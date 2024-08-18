import { HasSlotController } from "../../internal/slot.js";
import { property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit";
import "../dropdown/dropdown.js";
import "../menu-item/menu-item.js";
import "../menu/menu";
import styles from "./combobox.styles.js";
import type PDropdown from "../dropdown/dropdown.js";
import type PInput from "../input/input.js";
import type PMenuItem from "../menu-item/menu-item.js";
import type PMenu from "../menu/menu.js";
import type { CSSResultGroup } from "lit";
import PureElement from "../../internal/pure-ui-element.js";

const escapeRegExp = (text: string) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

/**
 * @summary Combobox displays suggestions as you type.
 * @documentation https://pureui.xyz/components/button
 * @status stable
 * @since 1.0
 *
 * @since unreleased
 * @status unknown
 *
 * @dependency p-dropdown
 * @dependency p-menu
 *
 * @slot - The content that includes an input.
 * @slot empty-text - The text or content that is displayed when there is no suggestion based on the input.
 * @slot lading-text - The text or content that is displayed when the `loading` attribute evaluates to true.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart trigger - The wrapper for the trigger slot.
 * @csspart empty-text - The empty text's wrapper.
 * @csspart loading-test - The loading text's wrapper.
 *
 */

export default class PCombobox extends PureElement {
  static styles: CSSResultGroup = [styles];

  @query("p-menu") menu: PMenu;
  @query("p-dropdown") dropdown: PDropdown;
  @query("slot:not([name])") defaultSlot: HTMLSlotElement;

  private readonly hasSlotController = new HasSlotController(this, "loading-text", "empty-text");

  @state() private value = "";
  @state() private hasFocus = false;

  @property({ type: String, reflect: true }) emptyText: string;

  @property({ type: Boolean, reflect: true }) loading = false;

  @property({ type: String, reflect: true }) loadingText: string;

  @property({ type: Boolean, reflect: true }) autofilter = false;

  @property({ type: Boolean, reflect: true }) highlight = false;

  @property({ type: Number, reflect: true }) threshold = 1;

  handlePInput(event: CustomEvent) {
    const { value } = event.target as PInput;

    if (this.autofilter) {
      this.options.forEach(option => {
        const shouldDisplay = new RegExp(`(${escapeRegExp(value ?? "")})`, "ig").test(option.getTextLabel());

        if (shouldDisplay) {
          option.style.display = "block";
          option.disabled = false;
          option.ariaHidden = "false";
        } else {
          option.style.display = "none";
          option.disabled = true;
          option.ariaHidden = "true";
        }
      });
    }

    this.hasFocus = true;
    this.value = value;
  }

  handleKeydown(event: KeyboardEvent) {
    if (!this.shouldDisplayAutoComplete || event.ctrlKey || event.metaKey) {
      return;
    }

    const options = this.visibleOptions;

    if (options.length === 0) {
      return;
    }

    const firstItem = options[0];
    const lastItem = options[options.length - 1];

    switch (event.key) {
      case "Tab":
      case "Escape":
        this.hasFocus = false;
        break;

      case "ArrowDown":
        event.preventDefault();
        this.menu.setCurrentItem(firstItem);
        firstItem.focus();
        break;

      case "ArrowUp":
        event.preventDefault();
        this.menu.setCurrentItem(lastItem);
        lastItem.focus();
        break;
    }
  }

  handlePFocus() {
    if (this.value.length >= this.threshold) {
      this.hasFocus = true;
      this.show();
    }
  }

  handlePAfterHide() {
    this.hasFocus = false;
  }

  show() {
    this.dropdown?.show();
  }

  hide() {
    this.dropdown?.hide();
  }

  reset() {
    this.value = "";
  }

  get options(): PMenuItem[] {
    return (this.defaultSlot?.assignedElements() || []) as PMenuItem[];
  }

  get visibleOptions() {
    return this.options.filter(option => option.style.display !== "none");
  }

  get hasResults() {
    return this.visibleOptions.length > 0;
  }

  get shouldDisplayLoadingText() {
    return this.loading && (this.loadingText || this.hasSlotController.test("loading-text"));
  }

  get shouldDisplayEmptyText() {
    return (
      !this.shouldDisplayLoadingText &&
      !this.hasResults &&
      (this.emptyText || this.hasSlotController.test("empty-text"))
    );
  }

  get shouldDisplayAutoComplete() {
    return (
      this.hasFocus &&
      ((this.value.length >= this.threshold && this.hasResults) ||
        this.shouldDisplayLoadingText ||
        this.shouldDisplayEmptyText)
    );
  }

  render() {
    const { shouldDisplayLoadingText } = this;

    return html`
      <div part="base">
        <div part="trigger" @p-focus=${this.handlePFocus} @p-input=${this.handlePInput} @keydown=${this.handleKeydown}>
          <slot name="trigger"></slot>
        </div>
        <p-dropdown ?open=${this.shouldDisplayAutoComplete} @p-after-hide=${this.handlePAfterHide}>
          <p-menu>
            <slot
              aria-hidden=${shouldDisplayLoadingText ? "true" : "false"}
              style="${styleMap({ display: shouldDisplayLoadingText ? "none" : "block" })}"
            >
            </slot>
            <div
              part="loading-text"
              id="loading-text"
              class="loading-text"
              aria-hidden=${shouldDisplayLoadingText ? "false" : "true"}
              style="${styleMap({ display: shouldDisplayLoadingText ? "block" : "none" })}"
            >
              <slot name="loading-text">${this.loadingText}</slot>
            </div>
            <div
              part="empty-text"
              id="empty-text"
              class="empty-text"
              aria-hidden=${this.shouldDisplayEmptyText ? "false" : "true"}
              style="${styleMap({ display: this.shouldDisplayEmptyText ? "block" : "none" })}"
            >
              <slot name="empty-text">${this.emptyText}</slot>
            </div>
            <div aria-hidden="true" style=${styleMap({ width: `${this.clientWidth}px` })}></div>
          </p-menu>
        </p-dropdown>
      </div>
    `;
  }
}
