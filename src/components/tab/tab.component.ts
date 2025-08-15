import { classMap } from "lit/directives/class-map.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query } from "lit/decorators.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PIconButton from "../icon-button/icon-button.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./tab.styles.js";
import type { CSSResultGroup } from "lit";

let id = 0;

/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://pureui.online/components/tab
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon-button
 *
 * @slot - The tab's label.
 *
 * @event p-close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart close-button - The close button, an `<p-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 */
export default class PTab extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = { "p-icon-button": PIconButton };

  private readonly localize = new LocalizeController(this);

  private readonly attrId = ++id;
  private readonly componentId = `p-tab-${this.attrId}`;

  @query(".tab") tab: HTMLElement;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = "";

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Makes the tab closable and shows a close button. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** Disables the tab and prevents selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * @internal
   * Need to wrap in a `@property()` otherwise CustomElement throws a "The result must not have attributes" runtime error.
   */
  @property({ type: Number, reflect: true }) tabIndex = 0;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }

  private handleCloseClick(event: Event) {
    event.stopPropagation();
    this.emit("p-close");
  }

  @watch("active")
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }

  @watch("disabled")
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");

    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    return html`
      <div
        part="base"
        class=${classMap({
          tab: true,
          "tab--active": this.active,
          "tab--closable": this.closable,
          "tab--disabled": this.disabled,
        })}
      >
        <slot></slot>
        ${this.closable
          ? html`
              <p-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></p-icon-button>
            `
          : ""}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "p-tab": PTab;
  }
}
