import { animateTo, stopAnimations } from "../../internal/animate.js";
import { classMap } from "lit/directives/class-map.js";
import { getAnimation, setDefaultAnimation } from "../../utilities/animation-registry.js";
import { getTabbableBoundary } from "../../internal/tabbable.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query } from "lit/decorators.js";
import { waitForEvent } from "../../internal/event.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PPopup from "../popup/popup.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./dropdown.styles.js";
import type { CSSResultGroup } from "lit";
import type { PSelectEvent } from "../../events/p-select.js";
import type PButton from "../button/button.js";
import type PIconButton from "../icon-button/icon-button.js";
import type PMenu from "../menu/menu.js";

/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://pureui.xyz/components/dropdown
 * @status stable
 * @since 1.0
 *
 * @dependency p-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a `<p-button>` element.
 *
 * @event p-show - Emitted when the dropdown opens.
 * @event p-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event p-hide - Emitted when the dropdown closes.
 * @event p-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<p-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
export default class PDropdown extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = { "p-popup": PPopup };

  @query(".dropdown") popup: PPopup;
  @query(".dropdown__trigger") trigger: HTMLSlotElement;
  @query(".dropdown__panel") panel: HTMLSlotElement;

  private readonly localize = new LocalizeController(this);
  private closeWatcher: CloseWatcher | null;

  /**
   * The behavior of the dropdown. This determines how the dropdown is triggered. The default behavior is "click",
   * which means the dropdown is triggered by a click event on the trigger element. The other allowed value is "hover",
   * which means the dropdown is triggered by a mouse hover event on the trigger element.
   *
   * @type {"click" | "hover"}
   * @default "click"
   */
  @property({ reflect: true }) behavior: "click" | "hover" = "click";

  /**
   * Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   */
  @property({ reflect: true }) placement:
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end" = "bottom-start";

  /** Disables the dropdown so the panel will not open. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
   * dropdowns that allow for multiple interactions.
   */
  @property({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  stayOpenOnSelect = false;

  /**
   * The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
   * components that use a dropdown internally.
   */
  @property({ attribute: false }) containingElement?: HTMLElement;

  /** The distance in pixels from which to offset the panel away from its trigger. */
  @property({ type: Number }) distance = 0;

  /** The distance in pixels from which to offset the panel along its trigger. */
  @property({ type: Number }) skidding = 0;

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /**
   * Syncs the popup width or height to that of the trigger element.
   */
  @property({ reflect: true }) sync: "width" | "height" | "both" | undefined = undefined;

  connectedCallback() {
    super.connectedCallback();

    if (!this.containingElement) {
      this.containingElement = this;
    }
  }

  firstUpdated() {
    this.panel.hidden = !this.open;

    // If the dropdown is visible on init, update its position
    if (this.open) {
      this.addOpenListeners();
      this.popup.active = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
  }

  focusOnTrigger() {
    const trigger = this.trigger.assignedElements({ flatten: true })[0] as HTMLElement | undefined;
    if (typeof trigger?.focus === "function") {
      trigger.focus();
    }
  }

  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find(el => el.tagName.toLowerCase() === "p-menu") as
      | PMenu
      | undefined;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    // Close when escape is pressed inside an open dropdown. We need to listen on the panel itself and stop propagation
    // in case any ancestors are also listening for this key.
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
      this.focusOnTrigger();
    }
  };

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    // Close when escape or tab is pressed
    if (event.key === "Escape" && this.open && !this.closeWatcher) {
      event.stopPropagation();
      this.focusOnTrigger();
      this.hide();
      return;
    }

    // Handle tabbing
    if (event.key === "Tab") {
      // Tabbing within an open menu should close the dropdown and refocus the trigger
      if (this.open && document.activeElement?.tagName.toLowerCase() === "p-menu-item") {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
        return;
      }

      // Tabbing outside of the containing element closes the panel
      //
      // If the dropdown is used within a shadow DOM, we need to obtain the activeElement within that shadowRoot,
      // otherwise `document.activeElement` will only return the name of the parent shadow DOM element.
      setTimeout(() => {
        const activeElement =
          this.containingElement?.getRootNode() instanceof ShadowRoot
            ? document.activeElement?.shadowRoot?.activeElement
            : document.activeElement;

        if (
          !this.containingElement ||
          activeElement?.closest(this.containingElement.tagName.toLowerCase()) !== this.containingElement
        ) {
          this.hide();
        }
      });
    }
  };

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the containing element
    const path = event.composedPath();
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  };

  private handlePanelSelect = (event: PSelectEvent) => {
    const target = event.target as HTMLElement;

    // Hide the dropdown when a menu item is selected
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "p-menu") {
      this.hide();
      this.focusOnTrigger();
    }
  };

  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
      this.focusOnTrigger();
    }
  }

  private handleTriggerMouseEnter() {
    if (!this.open && this.behavior === "hover") {
      this.show();
      this.focusOnTrigger();
    }
  }
  private handleTriggerMouseLeave() {
    if (this.open && this.behavior === "hover") {
      this.hide();
    }
  }

  async handleTriggerKeyDown(event: KeyboardEvent) {
    // When spacebar/enter is pressed, show the panel but don't focus on the menu. This let's the user press the same
    // key again to hide the menu in case they don't want to make a selection.
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }

    const menu = this.getMenu();

    if (menu) {
      const menuItems = menu.getAllItems();
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];

      // When up/down is pressed, we make the assumption that the user is familiar with the menu and plans to make a
      // selection. Rather than toggle the panel, we focus on the menu (if one exists) and activate the first item for
      // faster navigation.
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();

        // Show the menu if it's not already open
        if (!this.open) {
          this.show();

          // Wait for the dropdown to open before focusing, but not the animation
          await this.updateComplete;
        }

        if (menuItems.length > 0) {
          // Focus on the first/last menu item after showing
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }

            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }

  handleTriggerKeyUp(event: KeyboardEvent) {
    // Prevent space from triggering a click event in Firefox
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }

  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <p-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({
      flatten: true,
    }) as HTMLElement[];
    const accessibleTrigger = assignedElements.find(el => getTabbableBoundary(el).start);
    let target: HTMLElement;

    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        // Pure UI buttons have to update the internal button so it's announced correctly by screen readers
        case "p-button":
        case "p-icon-button":
          target = (accessibleTrigger as PButton | PIconButton).button;
          break;

        default:
          target = accessibleTrigger;
      }

      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }

  /** Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, "p-after-show");
  }

  /** Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, "p-after-hide");
  }

  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }

  addOpenListeners() {
    this.panel.addEventListener("p-select", this.handlePanelSelect);
    if ("CloseWatcher" in window) {
      this.closeWatcher?.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        this.hide();
        this.focusOnTrigger();
      };
    } else {
      this.panel.addEventListener("keydown", this.handleKeyDown);
    }
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }

  removeOpenListeners() {
    if (this.panel) {
      this.panel.removeEventListener("p-select", this.handlePanelSelect);
      this.panel.removeEventListener("keydown", this.handleKeyDown);
    }
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    this.closeWatcher?.destroy();
  }

  @watch("open", { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }

    this.updateAccessibleTrigger();

    if (this.open) {
      // Show
      this.emit("p-show");
      this.addOpenListeners();

      await stopAnimations(this);
      this.panel.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "dropdown.show", {
        dir: this.localize.dir(),
      });
      await animateTo(this.popup.popup, keyframes, options);

      this.emit("p-after-show");
    } else {
      // Hide
      this.emit("p-hide");
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide", {
        dir: this.localize.dir(),
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.panel.hidden = true;
      this.popup.active = false;

      this.emit("p-after-hide");
    }
  }

  render() {
    return html`
      <p-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${ifDefined(this.sync ? this.sync : undefined)}
        class=${classMap({
          dropdown: true,
          "dropdown--open": this.open,
        })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
          @mouseenter=${this.handleTriggerMouseEnter}
          @mouseleave=${this.handleTriggerMouseLeave}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </p-popup>
    `;
  }
}

setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: "ease" },
});

setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: "ease" },
});
