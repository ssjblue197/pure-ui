import { animateTo, stopAnimations } from "../../internal/animate.js";
import { classMap } from "lit/directives/class-map.js";
import { getAnimation, setDefaultAnimation } from "../../utilities/animation-registry.js";
import { HasSlotController } from "../../internal/slot.js";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query } from "lit/decorators.js";
import { waitForEvent } from "../../internal/event.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./file-upload-item.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @since 2.0
 * @status experimental
 *
 * @dependency p-icon-button
 * @dependency p-progress-bar
 *
 * @event p-show - Emitted when the item opens.
 * @event p-after-show - Emitted after the item opens and all animations are complete.
 * @event p-hide - Emitted when the item closes.
 * @event p-after-hide - Emitted after the item closes and all animations are complete.
 *
 * @slot - The file list item's label.
 * @slot image - The file list item's image.
 * @slot close-button - The file list item's close button.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart image - The file list item's image.
 * @csspart label - The file list item's label.
 * @csspart close-button -  The file list item's close button.
 */
export default class PFileUploadItem extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly hasSlotController = new HasSlotController(this, "image", "suffix");
  private readonly localize = new LocalizeController(this);

  @query('[part="base"]') base: HTMLElement;

  /** Draws the item in a loading state. */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** The current progress, 0 to 100. Only respects is loading prop is true. */
  @property({ type: Number, reflect: true }) progress: number;

  /** A custom label for the progress bar's aria label. Only respects if loading prop is true. */
  @property() label: string;

  /** The locale to render the component in. */
  @property() lang: string;

  /** Draws the item in a warning state. */
  @property({ type: Boolean, reflect: true }) warning = false;

  /** Makes the item closable. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
  @property() value = "";

  /** The size of the file in bytes as a read-only 64-bit integer. */
  @property({ type: Number, reflect: true }) size: number;

  /** Indicates whether or not the file list item is hidden. */
  @property({ type: Boolean, reflect: true }) hidden = false;

  firstUpdated() {
    this.base.hidden = this.hidden;
  }

  @watch("hidden", { waitUntilFirstUpdate: true })
  async handleHiddenChange() {
    if (!this.hidden) {
      // Show
      this.emit("p-show");

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "file-upload-item.show", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit("p-after-show");
    } else {
      // Hide
      this.emit("p-hide");

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "file-upload-item.hide", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit("p-after-hide");
    }
  }

  /** Shows the item. */
  async show() {
    if (!this.hidden) {
      return undefined;
    }

    this.hidden = false;
    return waitForEvent(this, "p-after-show");
  }

  /** Hides the item */
  async hide() {
    if (this.hidden) {
      return undefined;
    }

    this.hidden = true;
    return waitForEvent(this, "p-after-hide");
  }

  handleCloseClick() {
    this.hide();
  }

  handleTriggerKeyUp(event: KeyboardEvent) {
    // Prevent space from triggering a click event in Firefox
    if (event.key === "\xA0 ") {
      event.preventDefault();
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          "file-upload-item": true,
          "file-upload-item--hidden": this.hidden,
          "file-upload-item--closable": this.closable,
          "file-upload-item--warning": this.warning,
          "file-upload-item--has-size": this.size,
          "file-upload-item--is-loading": this.loading,
          "file-upload-item--has-image": this.hasSlotController.test("image"),
        })}
      >
        <span class="file-upload-item__content">
          <span part="image" class="file-upload-item__image">
            <slot name="image"></slot>
          </span>
          <span part="label" class="file-upload-item__label">
            <slot></slot>
            ${this.size
              ? html`<p-format-bytes value="${this.size}" class="file-upload-item__label__size"></p-format-bytes>`
              : ""}
          </span>
          ${this.loading
            ? html`
                <span class="file-upload-item__progress-bar__container">
                  <p-progress-bar
                    class="file-upload-item__progress-bar"
                    ?indeterminate=${this.progress === undefined}
                    value=${ifDefined(this.progress)}
                    label=${ifDefined(this.label)}
                  ></p-progress-bar>
                </span>
              `
            : ""}
        </span>
        ${this.closable
          ? html`
              <span
                class="file-upload-item__close-button"
                @click=${this.handleCloseClick}
                @keyup=${this.handleTriggerKeyUp}
              >
                <slot name="close-button">
                  <p-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    name="x"
                    library="system"
                  ></p-icon-button>
                </slot>
              </span>
            `
          : ""}
      </div>
    `;
  }
}

setDefaultAnimation("file-upload-item.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" },
  ],
  options: { duration: 250, easing: "ease" },
});

setDefaultAnimation("file-upload-item.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" },
  ],
  options: { duration: 250, easing: "ease" },
});
