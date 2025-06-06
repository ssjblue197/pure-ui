import { animateTo, stopAnimations } from "../../internal/animate.js";
import { classMap } from "lit/directives/class-map.js";
import { debounce } from "../../internal/debounce.js";
import { defaultValue } from "../../internal/default-value.js";
import { FormControlController } from "../../internal/form.js";
import { getAnimation, setDefaultAnimation } from "../../utilities/animation-registry.js";
import { HasSlotController } from "../../internal/slot.js";
import { html, render } from "lit";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query, state } from "lit/decorators.js";
import { scrollIntoView } from "../../internal/scroll.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { waitForEvent } from "../../internal/event.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import formControlStyles from "../../styles/form-control.styles.js";
import PIcon from "../icon/icon.component.js";
import PPopup from "../popup/popup.component.js";
import PTag from "../tag/tag.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./select.styles.js";
import type { CSSResultGroup, TemplateResult } from "lit";
import type { PRemoveEvent } from "../../events/p-remove.js";
import type { PureFormControl } from "../../internal/pure-ui-element.js";
import type POption from "../option/option.component.js";

/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://pureui.xyz/components/select
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 * @dependency p-popup
 * @dependency p-tag
 *
 * @slot - The listbox options. Must be `<p-option>` elements. You can use `<p-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-change - Emitted when the control's value changes.
 * @event p-clear - Emitted when the control's value is cleared.
 * @event p-input - Emitted when the control receives input.
 * @event p-focus - Emitted when the control gains focus.
 * @event p-blur - Emitted when the control loses focus.
 * @event p-show - Emitted when the select's menu opens.
 * @event p-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event p-hide - Emitted when the select's menu closes.
 * @event p-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
export default class PSelect extends PureElement implements PureFormControl {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];
  static dependencies = {
    "p-icon": PIcon,
    "p-popup": PPopup,
    "p-tag": PTag,
  };

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ["p-blur", "p-input"],
  });
  private readonly hasSlotController = new HasSlotController(this, "help-text", "label");
  private readonly localize = new LocalizeController(this);
  private keyword = "";
  private closeWatcher: CloseWatcher | null;

  @query(".select") popup: PPopup;
  @query(".select__combobox") combobox: HTMLSlotElement;
  @query(".select__display-input") displayInput: HTMLInputElement;
  @query(".select__value-input") valueInput: HTMLInputElement;
  @query(".select__listbox") listbox: HTMLSlotElement;

  /**
   * Indicates whether the control has focus.
   * @type {boolean}
   */
  @state() private hasFocus = false;

  /**
   * The display label to show in the select when no options are selected.
   * Used when the control is not focused.
   * @type {string}
   */
  @state() displayLabel = "";

  /**
   * The currently selected option.
   * @type {POption}
   */
  @state() currentOption: POption;

  /**
   * The selected options.
   * @type {POption[]}
   */
  @state() selectedOptions: POption[] = [];

  /**
   * The maximum number of options that can be selected.
   * Defaults to -1, which means there is no limit.
   *
   * @type {number}
   * @reflect
   * @attribute
   * @default -1
   */
  @property({ type: Number, reflect: true, attribute: "max-count" }) maxCount = -1;

  /**
   * Indicates whether the select should operate in tag mode, where selected options
   * are shown as tags and the user can remove them or add new tag by "Enter" after typing new tag.
   * This property is reflected as a boolean attribute, `tag-mode`, on the element.
   *
   * @type {boolean}
   * @reflect
   * @attribute
   */
  @property({ type: Boolean, reflect: true, attribute: "tag-mode" }) tagMode = false;

  /**
   * Indicates whether a search box should be shown for finding options quickly.
   * This property is reflected as a boolean attribute, `show-search`, on the element.
   *
   * @type {boolean}
   * @reflect
   * @attribute
   */
  @property({ type: Boolean, reflect: true, attribute: "show-search" }) showSearch = false;

  /** The name of the select, submitted as a name/value pair with form data. */
  @property() name = "";

  /**
   * The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
   * value attribute will be a space-delimited list of values based on the options selected, and the value property will
   * be an array. **For this reason, values must not contain spaces.**
   */
  @property({
    converter: {
      fromAttribute: (value: string) => value.split(", "),
      toAttribute: (value: string[]) => value.join(", "),
    },
  })
  value: string | string[] = "";

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue: string | string[] = "";

  /** The select's size. */
  @property({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** Placeholder text to show as a hint when the select is empty. */
  @property() placeholder = "";

  /** Allows more than one option to be selected. */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /**
   * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
   * indicate the number of additional items that are selected. Set to 0 to remove the limit.
   */
  @property({ attribute: "max-options-visible", type: Number })
  maxOptionsVisible = 3;

  /** Disables the select control. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Adds a clear button when the select is not empty. */
  @property({ type: Boolean }) clearable = false;

  /**
   * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** Draws a filled select. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style select with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The select's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = "";

  /**
   * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
   * inside of the viewport.
   */
  @property({ reflect: true }) placement: "top" | "bottom" = "bottom";

  /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: "help-text" }) helpText = "";

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = "";

  /** The select's required attribute. */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   */
  @property() getTag: (option: POption, index: number) => TemplateResult | string | HTMLElement = option => {
    return html`
      <p-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @p-remove=${(event: PRemoveEvent) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </p-tag>
    `;
  };

  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  connectedCallback() {
    super.connectedCallback();

    // Because this is a form control, it shouldn't be opened initially
    this.open = false;
  }

  private addOpenListeners() {
    //
    // Listen on the root node instead of the document in case the elements are inside a shadow root
    //
    // https://github.com/ssjblue197/pure-ui/issues/1763
    //
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);

    // If the component is rendered in a shadow root, we need to attach the focusin listener there too
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }

    if ("CloseWatcher" in window) {
      this.closeWatcher?.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          if (!document.activeElement || document.activeElement !== this.displayInput) {
            this.displayInput.focus({ preventScroll: true });
          }
        }
      };
    }
  }

  private removeOpenListeners() {
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);

    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }

    this.closeWatcher?.destroy();
  }

  private handleFocus() {
    this.hasFocus = true;
    // this.displayInput.setSelectionRange(0, 0);
    this.emit("p-focus");
  }

  private handleBlur() {
    this.hasFocus = false;
    if (!this.multiple) {
      this.displayLabel = this.selectedOptions.map(option => option.getTextLabel()).join(", ");
    } else {
      this.displayLabel = "";
    }
    this.emit("p-blur");
  }

  @debounce(100)
  handleInput() {
    this.keyword = this.displayInput.value;
    this.handleFilterOptions();
    console.log("handleInput", this.keyword);

    if (document.activeElement !== this.displayInput) {
      // Keep the focus in the input
      this.displayInput.focus({ preventScroll: true });
    }

    this.emit("p-input");
  }

  private handleDocumentFocusIn = (event: KeyboardEvent) => {
    // Close when focusing out of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const isClearButton = target.closest(".select__clear") !== null;
    const isIconButton = target.closest("p-icon-button") !== null;

    // Ignore presses when the target is an icon button (e.g. the remove button in <p-tag>)
    if (isClearButton || isIconButton) {
      return;
    }

    // Close when pressing escape
    if (event.key === "Escape" && this.open && !this.closeWatcher) {
      event.preventDefault();
      event.stopPropagation();
      this.hide();
      return;
    }

    // Handle enter. When pressing Enter, we allow for type to select behaviors so if there's anything in the
    // buffer we _don't_ close it.
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopImmediatePropagation();

      // If it's not open, open it
      if (!this.open) {
        this.show();
        return;
      }

      if (this.tagMode && this.keyword) {
        this.handleAddNewTag(this.keyword.trim());
        if (!document.activeElement || document.activeElement !== this.displayInput) {
          this.displayInput.focus({ preventScroll: true });
        }

        this.requestUpdate();

        return;
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.currentOption.disabled && this.open) {
        if (this.multiple) {
          this.toggleOptionSelection(this.currentOption);
          if (!document.activeElement || document.activeElement !== this.displayInput) {
            this.displayInput.focus({ preventScroll: true });
          }
          this.hasFocus = true;
        } else {
          this.setSelectedOptions(this.currentOption);
          // this.displayInput.blur();
          // this.hasFocus = false;
          this.hide();
        }

        // Emit after updating
        this.updateComplete.then(() => {
          this.emit("p-input");
          this.emit("p-change");
        });
      }
      return;
    }

    // Navigate options
    if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const allOptions = this.getAllOptions();

      allOptions.forEach(option => {
        option.hidden =
          !option.getTextLabel().toLowerCase().includes(this.keyword.toLowerCase()) &&
          !option.value.toLowerCase().includes(this.keyword.toLowerCase());
      });
      const availableOptions = allOptions.filter(el => !el.hidden);
      const currentIndex = availableOptions.indexOf(this.currentOption);
      let newIndex = Math.max(0, currentIndex);

      // Prevent scrolling
      event.preventDefault();

      // Open it
      if (!this.open) {
        this.show();

        // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
        // opens for the first time
        if (this.currentOption) {
          return;
        }
      }

      if (event.key === "ArrowDown") {
        newIndex = currentIndex + 1;
        if (newIndex > availableOptions.length - 1) newIndex = 0;
      } else if (event.key === "ArrowUp") {
        newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = availableOptions.length - 1;
      } else if (event.key === "Home") {
        newIndex = 0;
      } else if (event.key === "End") {
        newIndex = availableOptions.length - 1;
      }

      this.setCurrentOption(availableOptions[newIndex]);
      return;
    }

    if (event.key === "Backspace") {
      if (!this.open && this.hasFocus) {
        this.show();
      }
      event.stopPropagation();
      // Remove the last selected option if multiple mode is ON
      if (this.multiple && this.keyword === "") {
        const allOptions = this.getAllOptions();
        const optionsSelected = allOptions.filter(el => el.selected);
        if (optionsSelected.length > 0) {
          this.handleTagRemove(new CustomEvent("p-remove"), optionsSelected[optionsSelected.length - 1]);
        }
      }
      return;
    }

    // All other "printable" keys trigger type to select
    if (event.key.length === 1) {
      if (!this.open && this.hasFocus) {
        this.show();
      }
    }
  };

  private handleDocumentMouseDown = (event: MouseEvent) => {
    // Close when clicking outside of the select
    const path = event.composedPath();
    if (this && !path.includes(this)) {
      this.hide();
    }
  };

  private handleLabelClick() {
    if (!document.activeElement || document.activeElement !== this.displayInput) {
      this.open = true;
      this.displayInput.focus({ preventScroll: true });
    }
  }

  private handleComboboxMouseDown(event: MouseEvent) {
    const path = event.composedPath();
    const isIconButton = path.some(el => el instanceof Element && el.tagName.toLowerCase() === "p-icon-button");

    // Ignore disabled controls and clicks on tags (remove buttons)
    if (this.disabled || isIconButton) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.open = !this.open;
  }

  private handleComboboxKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      return;
    }

    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.blur();

      // Emit after update
      this.updateComplete.then(() => {
        this.emit("p-clear");
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }

  private handleClearMouseDown(event: MouseEvent) {
    // Don't lose focus or propagate events when clicking the clear button
    event.stopPropagation();
    event.preventDefault();
  }

  private handleOptionClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const option = target.closest("p-option");
    const oldValue = this.value;

    this.setCurrentOption(option);

    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }

      // Set focus after updating so the value is announced by screen readers
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));

      if (this.value !== oldValue) {
        // Emit after updating
        this.updateComplete.then(() => {
          this.emit("p-input");
          this.emit("p-change");
        });
      }

      if (!this.multiple) {
        this.hide();
        this.displayInput.blur();
      }
    }
  }

  private handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values: string[] = [];

    // Check for duplicate values in menu items
    if (customElements.get("p-option")) {
      allOptions.forEach(option => values.push(option.value));

      // Select only the options that match the new value
      this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
    } else {
      // Rerun this handler when <p-option> is registered
      customElements.whenDefined("p-option").then(() => this.handleDefaultSlotChange());
    }
  }

  private handleTagRemove(event: PRemoveEvent, option: POption) {
    event.stopPropagation();

    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      if (this.selectedOptions.length > 0) {
        this.setCurrentOption(this.selectedOptions[this.selectedOptions.length - 1]);
      }
      // Emit after updating
      this.updateComplete.then(() => {
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }

  private handleAddNewTag(value: string) {
    if (!this.disabled) {
      const allOptions = this.getAllOptions();

      // Get the values of all options in the select
      const selectedOptionValues = allOptions.map(option => option.value);

      // Check if the new tag value already exists in the select options
      // If it does, there is no need to add a new option, so return early
      // This prevents duplicate options from being added to the select
      if (selectedOptionValues.includes(value)) {
        return;
      }

      const option = html`
        <p-option value="${value.replace(/\s/g, "_")}">${value.charAt(0).toUpperCase() + value.slice(1)}</p-option>
      `;
      // Create a DocumentFragment
      const fragment = document.createDocumentFragment();
      // Render the TemplateResult into the fragment
      render(option, fragment);
      this.appendChild(fragment);

      this.updateComplete.then(() => {
        this.keyword = "";
        this.displayLabel = "";
        this.handleFilterOptions();

        const newAllOptions = this.getAllOptions();
        const newOption = newAllOptions[newAllOptions.length - 1];
        this.toggleOptionSelection(newOption, true);
        this.setCurrentOption(newOption);
        this.emit("p-change");
      });
    }
  }

  // Gets an array of all <p-option> elements
  private getAllOptions() {
    return [...this.querySelectorAll<POption>("p-option")];
  }

  // Gets the first <p-option> element
  private getFirstOption() {
    return this.querySelector<POption>("p-option");
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option: POption | null) {
    const allOptions = this.getAllOptions();

    // Clear selection
    allOptions.forEach(el => {
      el.current = false;
      el.tabIndex = -1;
    });

    // Select the target option
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      // option.focus();
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(option: POption | POption[]) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];

    // Clear existing selection
    allOptions.forEach(el => (el.selected = false));

    // Set the new selection
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach(el => (el.selected = true));
    }

    // Update selection, value, and display label
    this.selectionChanged();
  }

  // Toggles an option's selected state
  private toggleOptionSelection(option: POption, force?: boolean) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }

    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  private selectionChanged() {
    // Update selected options cache
    this.selectedOptions = this.getAllOptions().filter(el => el.selected);

    // Update the value and display label
    if (this.multiple) {
      this.value = this.selectedOptions.map(el => el.value);
      // this.placeholder = this.localize.term("numOptionsSelected", this.selectedOptions.length);
      // this.displayLabel = this.placeholder;
    } else {
      this.value = this.selectedOptions[0]?.value ?? "";
      this.placeholder = this.selectedOptions[0]?.getTextLabel() ?? "";
      this.displayLabel = this.selectedOptions[0]?.getTextLabel() ?? "";
    }

    // Update validity
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  protected get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        // Wrap so we can handle the remove
        return html`<div @p-remove=${(e: PRemoveEvent) => this.handleTagRemove(e, option)}>
          ${typeof tag === "string" ? unsafeHTML(tag) : tag}
        </div>`;
      } else if (index === this.maxOptionsVisible) {
        // Hit tag limit
        return html`
          <p-dropdown placement="top" behavior="hover">
            <p-tag slot="trigger" size=${this.size}>+${this.selectedOptions.length - index}</p-tag>
            <div class="select__tags--overflow" @click=${(e: Event) => e.stopPropagation()}>
              ${this.selectedOptions.slice(this.maxOptionsVisible).map((other, idx) => {
                const otherTag = this.getTag(other, this.maxOptionsVisible + idx);
                return html`<div @p-remove=${(e: PRemoveEvent) => this.handleTagRemove(e, option)}>
                  ${typeof otherTag === "string" ? unsafeHTML(otherTag) : otherTag}
                </div>`;
              })}
            </div>
          </p-dropdown>
        `;
      }
      return html``;
    });
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Close the listbox when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch("value", { waitUntilFirstUpdate: true })
  handleValueChange() {
    const allOptions = this.getAllOptions();
    let value: unknown[] = [];

    if (this.multiple) {
      value = Array.isArray(this.value) ? this.value : [];
    } else {
      value = Array.isArray(this.value) ? this.value : [this.value];
    }

    if (value.length > 0) {
      this.displayInput.setAttribute("placeholder", "");
    } else {
      this.displayInput.setAttribute("placeholder", this.placeholder);
    }

    this.setSelectedOptions(allOptions.filter(el => value.includes(el.value)));
  }

  @watch("open", { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      // Reset the current option
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());

      // Show
      this.emit("p-show");
      this.addOpenListeners();

      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;

      // Select the appropriate option based on value after the listbox opens
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });

      const { keyframes, options } = getAnimation(this, "select.show", {
        dir: this.localize.dir(),
      });
      await animateTo(this.popup.popup, keyframes, options);
      // Make sure the current option is scrolled into view (required for Safari)
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }

      this.emit("p-after-show");
      //Handle show placeholder after open if showSearch is true
      if (this.showSearch) {
        if (this.selectedOptions.length > 0) {
          // When no items are selected, keep the value empty so the placeholder shows old value
          // if (this.multiple) {
          //   this.placeholder = this.localize.term("numOptionsSelected", this.selectedOptions.length);
          // } else {
          //   this.placeholder = this.selectedOptions[0].getTextLabel();
          // }
        }
        this.keyword = "";
        this.displayInput.focus({ preventScroll: true });
      }
      if (!document.activeElement || document.activeElement !== this.displayInput) {
        // Keep the focus in the input element
        this.displayInput.focus({ preventScroll: true });
      }
      const allOptions = this.getAllOptions();
      allOptions.forEach(option => {
        option.hidden = false;
      });
    } else {
      // Hide
      this.emit("p-hide");
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "select.hide", {
        dir: this.localize.dir(),
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;

      this.emit("p-after-hide");
      this.keyword = "";
    }
  }

  private handleFilterOptions() {
    if (!this.showSearch) return;
    const allOptions = this.getAllOptions();
    if (this.keyword) {
      allOptions.forEach(option => {
        option.hidden =
          !option.getTextLabel().toLowerCase().includes(this.keyword.toLowerCase()) &&
          !option.value.toLowerCase().includes(this.keyword.toLowerCase());
      });
      const availableOptions = allOptions.filter(el => !el.hidden);
      if (availableOptions.length > 0) {
        this.setCurrentOption(availableOptions[0]);
      } else {
        this.setCurrentOption(null);
      }
    } else {
      allOptions.forEach(option => {
        option.hidden = false;
      });
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
    }
  }

  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, "p-after-show");
  }

  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, "p-after-hide");
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  /** Sets focus on the control. */
  focus(options?: FocusOptions) {
    this.displayInput.focus(options);
  }

  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasPrependRowSlot = this.hasSlotController.test("prepend-row");
    const hasAppendRowSlot = this.hasSlotController.test("append-row");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;

    return html`
      <div
        part="form-control"
        class=${classMap({
          "form-control": true,
          "form-control--small": this.size === "small",
          "form-control--medium": this.size === "medium",
          "form-control--large": this.size === "large",
          "form-control--has-label": hasLabel,
          "form-control--has-help-text": hasHelpText,
        })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <p-popup
            class=${classMap({
              select: true,
              "select--standard": true,
              "select--filled": this.filled,
              "select--pill": this.pill,
              "select--open": this.open,
              "select--disabled": this.disabled,
              "select--multiple": this.multiple,
              "select--focused": this.hasFocus,
              "select--placeholder-visible": isPlaceholderVisible,
              "select--top": this.placement === "top",
              "select--bottom": this.placement === "bottom",
              "select--small": this.size === "small",
              "select--medium": this.size === "medium",
              "select--large": this.size === "large",
            })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              ${this.multiple ? html`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.hasFocus ? this.keyword : this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                ?readonly=${!this.showSearch}
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                @input=${this.handleInput}
              />

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon
                ? html`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <p-icon name="x-circle-fill" library="system"></p-icon>
                      </slot>
                    </button>
                  `
                : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <p-icon library="system" name="chevron-down"></p-icon>
              </slot>
            </div>
            <div class="select__listbox" part="select__listbox">
              ${hasPrependRowSlot
                ? html`<slot name="prepend-row" class="listbox__prepend" part="prepend-row"></slot>`
                : null}
              <div
                id="listbox"
                role="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-multiselectable=${this.multiple ? "true" : "false"}
                aria-labelledby="label"
                part="listbox"
                tabindex="-1"
                @mouseup=${this.handleOptionClick}
                @slotchange=${this.handleDefaultSlotChange}
              >
                <slot></slot>
              </div>
              ${hasAppendRowSlot
                ? html`<slot name="append-row" class="listbox__append" part="append-row"></slot>`
                : null}
            </div>
          </p-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: "ease" },
});

setDefaultAnimation("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: "ease" },
});
