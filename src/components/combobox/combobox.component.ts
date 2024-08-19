import "../dropdown/dropdown.js";
import "../menu-item/menu-item.js";
import "../menu/menu.js";
import { HasSlotController } from "../../internal/slot.js";
import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import PInput from "../input/input.js";
import PMenu from "../menu/menu.component.js";
import PMenuItem from "../menu-item/menu-item.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./combobox.styles.js";
import type { CSSResultGroup } from "lit";
import type PDropdown from "../dropdown/dropdown.js";

/**
 * @summary Combobox displays suggestions as you type.
 * @documentation https://pureui.xyz/components/button
 * @status stable
 * @since 1.0
 *
 * @dependency p-dropdown
 * @dependency p-menu
 *
 * @slot - The content that includes an input.
 * @slot empty-text - The text or content that is displayed when there is no suggestion based on the input.
 * @slot lading-text - The text or content that is displayed when the loading attribute evaluates to true.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart trigger - The wrapper for the trigger slot.
 * @csspart empty-text - The empty text's wrapper.
 * @csspart loading-test - The loading text's wrapper.
 *
 */

// Utility function to escape special characters for RegExp
const escapeRegExp = (text: string) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

export default class PCombobox extends PureElement {
  static styles: CSSResultGroup = [styles];

  static dependencies = {
    "p-input": PInput,
    "p-menu-item": PMenuItem,
  };

  @query("p-menu") menu!: PMenu;
  @query("p-dropdown") dropdown!: PDropdown;
  @query("slot:not([name])") defaultSlot!: HTMLSlotElement;

  private readonly hasSlotController = new HasSlotController(this, "loading-text", "empty-text");

  @state() private value = "";
  @state() private hasFocus = false;

  @property({ type: String, reflect: true }) emptyText = "";
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: String, reflect: true }) loadingText = "";
  @property({ type: Boolean, reflect: true }) autofilter = false;
  @property({ type: Boolean, reflect: true }) highlight = false;
  @property({ type: Number, reflect: true }) threshold = 1;

  private handleInput(event: CustomEvent) {
    const { value } = event.target as PInput;
    this.value = value;
    this.hasFocus = true;

    if (this.autofilter) {
      this.filterOptions(value);
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    if (!this.shouldDisplayAutoComplete || event.ctrlKey || event.metaKey) return;

    const options = this.visibleOptions;
    if (options.length === 0) return;

    switch (event.key) {
      case "Tab":
      case "Escape":
        this.hasFocus = false;
        break;

      case "ArrowDown":
        event.preventDefault();
        this.menu.setCurrentItem(options[0]);
        options[0].focus();
        break;

      case "ArrowUp":
        event.preventDefault();
        this.menu.setCurrentItem(options[options.length - 1]);
        options[options.length - 1].focus();
        break;
    }
  }

  private handleFocus() {
    if (this.value.length >= this.threshold) {
      this.hasFocus = true;
      this.show();
    }
  }

  private handleDropdownHide() {
    this.hasFocus = false;
  }

  private filterOptions(value: string) {
    const regex = new RegExp(`(${escapeRegExp(value)})`, "ig");

    this.options.forEach(option => {
      const shouldDisplay = regex.test(option.getTextLabel());
      option.style.display = shouldDisplay ? "block" : "none";
      option.disabled = !shouldDisplay;
      option.ariaHidden = shouldDisplay ? "false" : "true";
    });
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
    return html`
      <div part="base">
        <div part="trigger" @p-focus=${this.handleFocus} @p-input=${this.handleInput} @keydown=${this.handleKeydown}>
          <slot name="trigger"></slot>
        </div>
        <p-dropdown ?open=${this.shouldDisplayAutoComplete} @p-after-hide=${this.handleDropdownHide}>
          <p-menu>
            <slot style=${styleMap({ display: this.shouldDisplayLoadingText ? "none" : "block" })}></slot>
            <div
              part="loading-text"
              id="loading-text"
              class="loading-text"
              aria-hidden=${this.shouldDisplayLoadingText ? "false" : "true"}
              style=${styleMap({ display: this.shouldDisplayLoadingText ? "block" : "none" })}
            >
              <slot name="loading-text">${this.loadingText}</slot>
            </div>
            <div
              part="empty-text"
              id="empty-text"
              class="empty-text"
              aria-hidden=${this.shouldDisplayEmptyText ? "false" : "true"}
              style=${styleMap({ display: this.shouldDisplayEmptyText ? "block" : "none" })}
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
