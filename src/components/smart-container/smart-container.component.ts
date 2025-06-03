import { classMap } from "lit/directives/class-map.js";
import { HasSlotController } from "../../internal/slot.js";
import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PButton from "../button/button.component.js";
import PDropdown from "../dropdown/dropdown.component.js";
import PIcon from "../icon/icon.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./smart-container.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @summary This is a responsive container component that handles dynamic content overflow and provides an interactive dropdown menu for hidden items. It observes and manages content inside its slots, automatically adjusting the layout to handle overflow situations..
 * @documentation https://pureui.xyz/components/smart-container
 * @status stable
 * @since 1.2.17
 *
 * @dependency p-dropdown
 *
 * @slot - The default slot.
 * @slot icon - The icon slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart dropdown-menu - The dropdown menu.
 */
export default class PSmartContainer extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];
  private backupContainerWidth: number = 0;

  private readonly hasSlotController = new HasSlotController(this, "prefix", "suffix");

  static dependencies = {
    "p-dropdown": PDropdown,
    "p-icon": PIcon,
    "p-button": PButton,
  };

  /**
   * Whether the component is in a right-to-left context. This property is
   * automatically set when the component is rendered in a context with a
   * `dir="rtl"` attribute on a parent element.
   */
  @property({ type: Boolean, reflect: true }) rtl = false;

  @query(".smart-container") smartContainer: HTMLElement;

  @query(".smart-container__dropdown") dropdown: PDropdown;

  @query(".smart-container__dropdown-content") dropdownContent: HTMLElement;

  @watch("example")
  handleExampleChange() {
    // do something
  }

  private handleResize(entries: ResizeObserverEntry[]) {
    const slot = this.shadowRoot?.querySelector("slot:not([name])");
    const prefixElement = this.shadowRoot?.querySelector(".smart-container__prefix");
    const suffixElement = this.shadowRoot?.querySelector(".smart-container__suffix");

    const prefixWidth = (prefixElement as HTMLElement)?.offsetWidth || 0;
    const suffixWidth = (suffixElement as HTMLElement)?.offsetWidth || 0;

    if (!slot || !entries.length) return;

    const container = entries[0]?.contentRect;

    const elements = (slot as HTMLSlotElement)?.assignedElements({ flatten: true }) as HTMLElement[];

    if (this.backupContainerWidth > 0 && container.width > this.backupContainerWidth) {
      if (elements.length > 0) {
        if (this.dropdownContent.children.length >= 1) {
          if (this.rtl) {
            const firstElement = elements[0];
            const lastChildOfDropdown = this.dropdownContent.lastElementChild as HTMLElement;

            if (lastChildOfDropdown) {
              const width = Number(lastChildOfDropdown.dataset.oldWidth);
              if (firstElement.offsetLeft - width > 0) {
                this.append(lastChildOfDropdown);
              }
            }
          } else {
            const lastElement = elements[elements.length - 1];
            const lastChildOfDropdown = this.dropdownContent.lastElementChild as HTMLElement;

            if (lastChildOfDropdown) {
              const width = Number(lastChildOfDropdown.dataset.oldWidth);
              if (lastElement.offsetLeft + lastElement.offsetWidth + prefixWidth + suffixWidth + width < container.width) {
                this.append(lastChildOfDropdown);
              }
            }
          }
        }
      } else {
        if (this.dropdownContent.children.length >= 1) {
          const lastChildOfDropdown = this.dropdownContent.lastElementChild as HTMLElement;

          if (lastChildOfDropdown) {
            const width = Number(lastChildOfDropdown.dataset.oldWidth);
            if (width < container.width) {
              this.append(lastChildOfDropdown);
            }
          }
        }
      }
    } else {
      // Handle overflow of slotted elements

      if (this.rtl) {
        for (let i = 0; i <= elements.length - 1; i++) {
          const el = elements[i];
          if (el.offsetLeft < 0) {
            const dropElement = elements[elements.length - 1];
            dropElement.dataset.oldWidth = String(dropElement.offsetWidth);
            this.dropdownContent?.appendChild(dropElement);
          }
        }
      } else {
        for (let i = elements.length - 1; i >= 0; i--) {
          const el = elements[i];
          let triggerElementWidth = 0;
          if (this.dropdownContent && this.dropdownContent.children.length > 0) {
            triggerElementWidth = this.dropdown.offsetWidth;
          }
          if (el.offsetLeft + el.offsetWidth + prefixWidth + suffixWidth + triggerElementWidth > container.width) {
            el.dataset.oldWidth = String(el.offsetWidth);
            this.dropdownContent?.appendChild(el);
          }
        }
      }
    }

    if (this.dropdownContent && this.dropdownContent.children.length > 0) {
      this.dropdown.style.width = "auto";
      this.dropdown.style.visibility = "visible";
      this.dropdown.style.position = "relative";
    } else {
      if (this.dropdown) {
        this.dropdown.style.visibility = "hidden";
        this.dropdown.style.width = "0px";
        this.dropdown.style.position = "fixed";
      }
    }

    this.backupContainerWidth = entries[0]?.contentRect.width;

    this.requestUpdate();
  }

  private startObserver() {
    const containerElement = this.shadowRoot?.querySelector(".smart-container");

    // Unwatch previous elements
    this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
    this.observedElements = [];

    // Watch new elements
    this.resizeObserver.observe(containerElement as HTMLElement);

    this.observedElements.push(containerElement as HTMLElement);
  }

  private stopObserver() {
    this.resizeObserver.disconnect();
  }

  protected firstUpdated(): void {
    this.startObserver();
    // Trigger initial resize
    this.smartContainer.dispatchEvent(new Event("resize"));
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => this.handleResize(entries));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopObserver();
  }

  render() {
    const isRTL = this.rtl;

    return html` <div
      part="base"
      class=${classMap({
        "smart-container": true,
        "smart-container__rtl": isRTL,
        "smart-container--has-prefix": this.hasSlotController.test("prefix"),
        "smart-container--has-suffix": this.hasSlotController.test("suffix"),
      })}
    >
      <div class="smart-container__prefix">
        <slot name="prefix"></slot>
      </div>
      <slot></slot>
      <p-dropdown class="smart-container__dropdown">
        <slot name="trigger" slot="trigger">
          <p-button>
            <p-icon name="funnel"></p-icon>
          </p-button>
        </slot>
        <p-menu part="dropdown-menu">
          <div class="smart-container__dropdown-content"></div>
        </p-menu>
      </p-dropdown>
      <div class="smart-container__suffix">
        <slot name="suffix"></slot>
      </div>
    </div>`;
  }
}
