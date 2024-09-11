import { animateTo, stopAnimations } from "../../internal/animate.js";
import { classMap } from "lit/directives/class-map.js";
import { debounce } from "../../internal/debounce.js";
import { defaultValue } from "../../internal/default-value.js";
import { FormControlController } from "../../internal/form.js";
import {
  generateCalendarGrid,
  getAllDayNames,
  getDateDifferentFrom,
  getDateLabelWithFormat,
  getMonthDifferentFrom,
  getMonthName,
  isSameDay,
} from "../../internal/calendar.js";
import { getAnimation, setDefaultAnimation } from "../../utilities/animation-registry.js";
import { HasSlotController } from "../../internal/slot.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize.js";
import { partMap } from "../../internal/part-map.js";
import { property, query, state } from "lit/decorators.js";
import dateFormatter from "pure-date-format";
// import { scrollIntoView } from "../../internal/scroll.js";
// import { shadowQuery } from "../../utilities/shadow.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { waitForEvent } from "../../internal/event.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import formControlStyles from "../../styles/form-control.styles.js";
import PIcon from "../icon/icon.component.js";
import PPopup from "../popup/popup.component.js";
import PTag from "../tag/tag.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./calendar.styles.js";
import type { CalendarDay, CalendarInterface } from "../../internal/calendar.js";
import type { CSSResultGroup, TemplateResult } from "lit";
import type { PRemoveEvent } from "../../events/p-remove.js";
import type { PureFormControl } from "../../internal/pure-ui-element.js";

export interface RenderDayOptions {
  disabled?: boolean;
  content: string | TemplateResult;
}

/**
 * @summary Calendar shows a monthly view of the Gregorian calendar, optionally allowing users to interact with dates.
 * @documentation https://pureui.xyz/components/calendar
 *
 * @since 1.1.5
 * @status stable
 *
 * @dependency p-icon
 * @dependency p-popup
 * @dependency p-tag
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
 *
 * @slot footer - Optional content to place in the calendar's footer.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the calendar.
 * @slot suffix - Used to append a presentational icon or similar element to the calendar.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @csspart calendar - The component's container.
 * @csspart day - Targets day cells.
 * @csspart day-label - Targets the day labels (the name of the days in the grid).
 * @csspart day-weekend - Targets days that fall on weekends.
 * @csspart day-weekday - Targets weekdays.
 * @csspart day-current-focus - Targets days that are focused (used for keyboard navigation).
 * @csspart day-current-month - Targets days in the current month.
 * @csspart day-previous-month - Targets days in the previous month.
 * @csspart day-next-month - Targets days in the next month.
 * @csspart day-today - Targets today.
 * @csspart day-selected - Targets selected days.
 * @csspart day-selection-start - Targets days that begin a selection.
 * @csspart day-selected-in-range - Targets days that are in the middle of a selection when use type="range".
 * @csspart day-selection-end - Targets days that end a selection.
 * @csspart tag - Targets days that selected when use type="multiple".
 *
 *
 * @cssproperty --border-color - The calendar's border color.
 * @cssproperty --border-width - The calendar's border width.
 * @cssproperty --border-radius - The border radius of the calendar.
 */
export default class PCalendar extends PureElement implements PureFormControl {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];

  static dependencies = {
    "p-icon": PIcon,
    "p-popup": PPopup,
    "p-tag": PTag,
  };

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ["p-blur", "p-input", "p-select", "p-change"],
  });

  private readonly localize = new LocalizeController(this);
  private readonly hasSlotController = new HasSlotController(this, "prefix", "suffix");

  private keyword = "";
  private closeWatcher: CloseWatcher | null;

  @query(".calendar") popup: PPopup;
  @query(".calendar__combobox") combobox: HTMLSlotElement;
  @query(".calendar__display-input") displayInput: HTMLInputElement;
  @query(".calendar__value-input") valueInput: HTMLInputElement;
  @query(".calendar--dialog") calendar: HTMLSlotElement;

  /**
   * Whether to close the calendar when a date is selected.
   *
   * When `true`, the calendar will close after a date is selected.
   *
   * This attribute only applies when the calendar is in dialog mode and type not "multiple".
   * @defaultValue false
   */
  @property({ type: Boolean, attribute: "close-on-select", reflect: false }) closeOnSelect = false;

  /**
   * The date format to use when formatting the date.
   *
   * The format string is a combination of the following tokens:
   *
   * | Token | Description |
   * |-------|-------------|
   * | `YY`  | Four-digit year |
   * | `YYYY` | Four-digit year |
   * | `M`   | Month, numeric (0-11) |
   * | `MM`  | Month, numeric (00-11) |
   * | `MMM` | Month, abbreviated |
   * | `MMMM` | Month, full |
   * | `D`   | Day of month, numeric (1-31) |
   * | `DD`  | Day of month, numeric (01-31) |
   * | `d`   | Day of week, numeric (0-6) |
   * | `dd`  | Day of week, numeric (Su-Sa) |
   * | `ddd` | Day of week, abbreviated |
   * | `dddd` | Day of week, full |
   * | `H`   | Hour, numeric, 24-hour (0-23) |
   * | `HH`  | Hour, numeric, 24-hour (00-23) |
   * | `h`   | Hour, numeric, 12-hour (1-12) |
   * | `hh`  | Hour, numeric, 12-hour (01-12) |
   * | `m`   | Minute, numeric (0-59) |
   * | `mm`  | Minute, numeric (00-59) |
   * | `s`   | Second, numeric (0-59) |
   * | `ss`  | Second, numeric (00-59) |
   *
   * @type {string}
   * @default ""
   */
  @property({ reflect: true }) format: string = "";

  /**
   * Indicates whether the calendar is in typing mode.
   * Typing mode means that the calendar accepts user input and emits `p-input` and `p-change` events when the user types a valid date.
   * When typing mode is `false`, the calendar does not accept user input and does not emit `p-input` or `p-change` events.
   *
   * @type {boolean}
   * @default true
   */
  @property({ type: Boolean, reflect: true }) typing = true;

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
   * @type {Date}
   */
  @state() currentOption?: Date = undefined;

  /**
   * The selected options.
   * @type {Date | Date[]}
   */
  @state() selectedOptions: Date[] = [];

  /** The name of the calendar, submitted as a name/value pair with form data. */
  @property() name = "";

  @property({ reflect: true, attribute: false }) temporalEndDate?: Date = undefined;

  /**
   * The current value of the calendar, submitted as a name/value pair with form data. When type is set to`multiple`, the
   * value attribute will be a space-delimited list of values based on the dates selected, and the value property will
   * be an array. **For this reason, values must not contain spaces.**
   */
  @property({ type: Array }) _value: Date | Date[] = [];

  static get properties() {
    return {
      value: { type: Object },
    };
  }

  public get value(): string | Date | (string | Date)[] {
    if (Array.isArray(this._value)) {
      return this._value.map(v => {
        if (v instanceof Date) {
          return this.format ? dateFormatter().from(v, this.format) : v;
        } else {
          //TODO: handle check if can parser value to Date object
          return this.format ? v : new Date(v);
        }
      });
    } else {
      return this._value instanceof Date ? dateFormatter().from(this._value, this.format) : this._value;
    }
  }

  public set value(value: string | string[]) {
    if (Array.isArray(value)) {
      this._value = value.map(v => {
        if (typeof v === "string") {
          //TODO: handle check if can parser value to Date object when format is not provided
          return this.format ? dateFormatter().to(v, this.format) : new Date(v);
        } else {
          return v;
        }
      });
    } else {
      if (typeof value === "string") {
        this._value = this.format ? dateFormatter().to(value, this.format) : new Date(value);
      } else {
        this._value = value;
      }
    }
    this.setSelectedOptions(Array.isArray(this._value) ? this._value : [this._value]);
  }

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue() defaultValue: Date | Date[] = new Date();

  /** The select's size. */
  @property({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** Placeholder text to show as a hint when the select is empty. */
  @property() placeholder = "";

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
   * Indicates whether or not the calendar is open. You can toggle this attribute to show and hide the menu, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * Enable this option to prevent the calendar from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
   */
  @property({ type: Boolean }) hoist = false;

  /** Draws a filled select. */
  @property({ type: Boolean, reflect: true }) filled = false;

  /** Draws a pill-style select with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The calendar's label. If you need to display HTML, use the `label` slot instead. */
  @property() label = "";

  /**
   * The preferred placement of the calendar's popup. Note that the actual placement may vary as needed to keep the calendar
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
   * A function that customizes the tags to be rendered when type=multiple. The first argument is the option, the second
   * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
   * the specified value.
   */
  @property() getTag: (option: Date, index: number) => TemplateResult | string | HTMLElement = option => {
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
        ${this.format ? dateFormatter().from(option, this.format) : getDateLabelWithFormat(option)}
      </p-tag>
    `;
  };

  /**
   * When `true`, the calendar will show a button to quickly jump to today's date.
   *
   * @attribute show-today
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: "show-today" }) showToday = false;

  /**
   * The mode of the calendar.
   * - "default": calendar is displayed in a popup.
   * - "inline": calendar is displayed inline.
   * @attribute mode
   * @type {"default" | "inline"}
   * @default "default"
   */
  @property({ reflect: true }) mode: "default" | "inline" = "default";

  /**
   * The type of selection the calendar allows.
   * - "single": allows selecting a single date.
   * - "multiple": allows selecting multiple dates.
   * - "range": allows selecting a range of dates.
   *
   * @attribute type
   * @type {"single" | "multiple" | "range"}
   * @default "single"
   */
  @property({ reflect: true }) type: "single" | "multiple" | "range" = "single";

  /**
   * The interface of the calendar.
   * - "day": a regular calendar for selecting day according to Calendar type .
   * - "month": a calendar for selecting a month and year according to Calendar type .
   * - "year": a calendar for selecting a year according to Calendar type .
   *
   * @attribute interface
   * @type {"day" | "month" | "year"}
   * @default "day"
   */
  @property({ reflect: true }) interface: CalendarInterface = "day";

  /**
   * If `true`, the calendar will automatically receive focus when it open.
   * This can be useful when using the calendar in a dialog or other scenario where it should
   * receive focus without requiring the user to click on it.
   */
  @property({ type: Boolean, reflect: true }) autofocus = false;

  /** The month to render, 1-12/ */
  @property({ type: Number, reflect: true }) month: number = new Date().getMonth() + 1;

  /** The year to render. */
  @property({ type: Number, reflect: true }) year: number = new Date().getFullYear();

  /** The date to render. */
  @property({ type: Number, reflect: true }) date: number = new Date().getDate();

  /** Determines how day labels are shown, e.g. "M", "Mon", or "Monday". */
  @property({ attribute: "day-labels" }) dayLabels: "narrow" | "short" | "long" = "short";

  /** Determines how month labels are shown, e.g. "J", "Jan", or "January". */
  @property({ attribute: "month-labels" }) monthLabels: "numeric" | "2-digit" | "long" | "short" | "narrow" = "long";

  /** When true, dates from the previous and next month will also be shown to fill out the grid. */
  @property({ attribute: "show-adjacent-dates", type: Boolean })
  showAdjacentDates = false;

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
    this.placeholder = this.type === "range" ? `${this.format} - ${this.format}` : this.format;

    if (Array.isArray(this.value)) {
      this._value = this.value.map(v => {
        if (typeof v === "string") {
          return this.format ? dateFormatter().to(v, this.format) : new Date(v);
        } else {
          return v;
        }
      });
    } else {
      if (typeof this.value === "string") {
        this._value = this.format ? dateFormatter().to(this.value, this.format) : new Date(this.value);
      } else {
        this._value = this.value;
      }
    }
  }

  firstUpdated() {
    // Initialize the selected options from the value.
    // If the value is not an array, wrap it in one so we can handle it as an array.
    if (Array.isArray(this._value)) {
      this.selectedOptions = this._value;
      if (this.type === "range") {
        this.keyword = "";
        if (this.selectedOptions.length === 1) {
          this.keyword = `${this.format ? dateFormatter().from(this.selectedOptions[0], this.format) : getDateLabelWithFormat(this.selectedOptions[0])} - `;
        } else if (this.selectedOptions.length === 2) {
          this.keyword = this.format
            ? `${dateFormatter().from(this.selectedOptions[0], this.format)} - ${dateFormatter().from(this.selectedOptions[1], this.format)}`
            : `${getDateLabelWithFormat(this.selectedOptions[0])} - ${getDateLabelWithFormat(this.selectedOptions[1])}`;
        }
        this.displayLabel = this.keyword;
      }
    } else {
      this.selectedOptions = this._value ? [this._value] : [];
      this.keyword = this.format
        ? dateFormatter().from(this.selectedOptions[0], this.format)
        : getDateLabelWithFormat(this.selectedOptions[0]);
      this.displayLabel = this.keyword;
    }
  }

  private addOpenListeners() {
    //
    // Listen on the root node instead of the document in case the elements are inside a shadow root
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
    this.emit("p-blur");
  }

  @debounce(100)
  handleInput() {
    this.keyword = this.displayInput.value;

    //TODO: handle parsed input to date with format

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
    const isClearButton = target.closest(".calendar__clear") !== null;
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

      if (this.keyword) {
        if (this.type !== "range" || (Array.isArray(this._value) && this._value.length === 0)) {
          const isValid = dateFormatter().isValid(this.keyword, this.format);
          if (!isValid) {
            return;
          } else {
            this.handleSelectDate({
              date: dateFormatter().to(this.keyword, this.format),
              isToday: false,
              isWeekday: false,
              isWeekend: false,
              isCurrentMonth: false,
              isPreviousMonth: false,
              isNextMonth: false,
            });
            return;
          }
        }
      }

      // If it is open, update the value based on the current selection and close it
      if (this.currentOption && !this.disabled && this.open) {
        const allOptions = this.getAllOptions();
        const currentDayCalendar =
          this.currentOption &&
          allOptions.find(option => this.currentOption && isSameDay(option.date, this.currentOption));

        if (currentDayCalendar) {
          this.handleSelectDate(currentDayCalendar);
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
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) {
      if (this.currentOption) {
        let newCurrentOption = undefined;
        switch (event.key) {
          case "ArrowUp":
            if (this.interface === "day") {
              newCurrentOption = getDateDifferentFrom(this.currentOption, -7);
            } else if (this.interface === "month") {
              newCurrentOption = getMonthDifferentFrom(this.currentOption, -4);
            }
            break;
          case "ArrowDown":
            if (this.interface === "day") {
              newCurrentOption = getDateDifferentFrom(this.currentOption, 7);
            } else if (this.interface === "month") {
              newCurrentOption = getMonthDifferentFrom(this.currentOption, 4);
            }
            break;
          case "ArrowLeft":
            if (this.interface === "day") {
              newCurrentOption = getDateDifferentFrom(this.currentOption, -1);
            } else if (this.interface === "month") {
              newCurrentOption = getMonthDifferentFrom(this.currentOption, -1);
            }
            break;
          case "ArrowRight":
          case "Tab":
            if (this.interface === "day") {
              newCurrentOption = getDateDifferentFrom(this.currentOption, 1);
            } else if (this.interface === "month") {
              newCurrentOption = getMonthDifferentFrom(this.currentOption, 1);
            }
            break;
          default:
            break;
        }

        if (newCurrentOption) {
          this.year = newCurrentOption.getFullYear();
          this.month = newCurrentOption.getMonth() + 1;
          this.date = newCurrentOption.getDate();
          this.setCurrentOption(newCurrentOption);
        }

        // Prevent scrolling
        event.preventDefault();
        return;
      }
    }

    if (event.key === "Backspace") {
      if (!this.open && this.hasFocus) {
        this.show();
      }
      event.stopPropagation();
      // Remove the last selected option if multiple mode is ON
      if (this.type === "multiple" && this.keyword === "" && this.selectedOptions.length > 0) {
        this.handleTagRemove(new CustomEvent("p-remove"), this.selectedOptions[this.selectedOptions.length - 1]);
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
      this.displayInput?.focus();
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
    // if (event.key === "Tab") {
    //   return;
    // }

    //Note: not prevent default because it will prevent typing from virtual keyboard on mobile devices
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }

  private handleClearClick(event: MouseEvent) {
    event.stopPropagation();

    if (String(this._value) !== "") {
      this.displayInput.blur();
      this._value = [];
      this.setSelectedOptions([]);
      this.displayLabel = "";
      this.keyword = "";

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

  private checkIsDuplicateDate(day: CalendarDay) {
    if (!Array.isArray(this._value)) return false;
    return this._value.some(d => isSameDay(d, day.date));
  }

  private handleSetTemporaryEndDate(day: CalendarDay) {
    if (Array.isArray(this._value) && this._value.length === 1 && this.type === "range") {
      this.temporalEndDate = day.date;
    }
  }

  private handleSelectDate(day: CalendarDay) {
    const oldValue = structuredClone(this._value);
    switch (this.type) {
      case "single":
        this._value = day.date;
        if (this.closeOnSelect) {
          this.hide();
        }
        this.setSelectedOptions([this._value]);
        break;
      case "multiple":
        if (Array.isArray(this._value)) {
          if (this.checkIsDuplicateDate(day)) {
            this._value = this._value.filter(d => !isSameDay(d, day.date));
          } else {
            this._value = [...this._value, day.date];
          }
          this.setSelectedOptions(this._value);
        }
        break;
      case "range":
        if (Array.isArray(this._value)) {
          if (this._value.length === 2) {
            this.temporalEndDate = undefined;
            this._value = [day.date];
          } else if (this._value.length === 1) {
            this._value = [this._value[0], day.date].sort((a, b) => a.getTime() - b.getTime());
            this.temporalEndDate = undefined;
            if (this.closeOnSelect) {
              this.hide();
            }
          } else {
            this._value = [day.date];
          }
          this.setSelectedOptions(this._value);
        }
        break;
      default:
        break;
    }

    // Set focus after updating so the value is announced by screen readers
    this.updateComplete.then(() => {
      if (this.mode === "default") {
        this.displayInput.focus({ preventScroll: true });
      }
    });

    if (this._value !== oldValue) {
      // Emit after updating
      this.updateComplete.then(() => {
        this.emit("p-input");
        if (this.type !== "range" || (Array.isArray(this._value) && this._value.length === 2)) {
          this.emit("p-change");
        }
      });
    }
  }

  private handleTagRemove(event: PRemoveEvent, option: Date) {
    event.stopPropagation();
    if (!this.disabled) {
      this.setSelectedOptions(this.selectedOptions.filter(d => !isSameDay(d, option)));
      this._value = structuredClone(this.selectedOptions);
      // Emit after updating
      this.updateComplete.then(() => {
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }

  // Gets an array of all <p-option> elements
  private getAllOptions() {
    return [
      ...generateCalendarGrid(this.year, this.month, {
        interface: this.interface,
      }),
    ];
  }

  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  private setCurrentOption(option?: Date) {
    // Select the target option
    if (option) {
      this.currentOption = option;
    }
  }

  // Sets the selected option(s)
  private setSelectedOptions(options: Date[]) {
    this.selectedOptions = options;
    // Update selection, value, and display label
    this.selectionChanged();
  }

  // This method must be called whenever the selection changes. It will update the selected date cache, the current
  // value, and the display value
  private selectionChanged() {
    switch (this.type) {
      case "single":
        this.keyword = "";
        this.displayLabel = this.format
          ? dateFormatter().from(this.selectedOptions[0], this.format)
          : getDateLabelWithFormat(this.selectedOptions[0]);
        this._value = structuredClone(this.selectedOptions[0]);
        break;
      case "range":
        this.keyword = "";
        if (this.selectedOptions.length === 1) {
          this.keyword = `${this.format ? dateFormatter().from(this.selectedOptions[0], this.format) : getDateLabelWithFormat(this.selectedOptions[0])} - `;
        } else if (this.selectedOptions.length === 2) {
          this.keyword = this.format
            ? `${dateFormatter().from(this.selectedOptions[0], this.format)} - ${dateFormatter().from(this.selectedOptions[1], this.format)}`
            : `${getDateLabelWithFormat(this.selectedOptions[0])} - ${getDateLabelWithFormat(this.selectedOptions[1])}`;
        }
        this.displayLabel = this.keyword;
        this._value = structuredClone(this.selectedOptions);
        break;
      case "multiple":
        this.placeholder = this.format ? this.format : "MM/DD/YYYY";
        // this.displayLabel = this.placeholder;
        this._value = structuredClone(this.selectedOptions);
        break;
      default:
        break;
    }

    // If the value is an array of dates, set the year and month to the last date in the array.
    // If the value is a single date, set the year and month to that date.
    // This is used to position the calendar when it is opened.
    if (Array.isArray(this._value) && this._value.length > 0) {
      this.year = this._value[this._value.length - 1].getFullYear();
      this.month = this._value[this._value.length - 1].getMonth() + 1;
    } else if (this._value instanceof Date) {
      this.year = this._value.getFullYear();
      this.month = this._value.getMonth() + 1;
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
            <div class="calendar__tags--overflow" @click=${(e: Event) => e.stopPropagation()}>
              ${this.selectedOptions.slice(this.maxOptionsVisible).map((other, idx) => {
                const otherTag = this.getTag(other, this.maxOptionsVisible + idx);
                return html`<div
                  @p-remove=${(e: PRemoveEvent) => {
                    // Remove
                    console.log("handleTagRemove", e);
                  }}
                >
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
    // When the mode is "inline", we don't want to toggle the calendar based on the "open" property.
    // This is because the calendar is always visible in inline mode, and the "open" property is
    // used to determine whether the calendar should be shown or hidden.
    if (this.mode === "inline") {
      return;
    }
    // Close the calendar when the control is disabled
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }

  @watch("value", { waitUntilFirstUpdate: true })
  handleValueChange() {
    // Select only the options that match the new value
  }

  @watch("open", { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    // When the mode is "inline", we don't want to toggle the calendar based on the "open" property.
    // This is because the calendar is always visible in inline mode, and the "open" property is
    // used to determine whether the calendar should be shown or hidden.
    if (this.mode === "inline") {
      return;
    }
    if (this.open && !this.disabled) {
      // Show
      this.emit("p-show");
      this.addOpenListeners();

      await stopAnimations(this);
      this.calendar.hidden = false;
      this.popup.active = true;

      // Select the appropriate option based on value after the calendar opens
      requestAnimationFrame(() => {
        const allOptions = this.getAllOptions();
        if (this.showAdjacentDates) {
          this.setCurrentOption(allOptions?.[0]?.date);
        } else {
          const firstDateInMonth = allOptions.find(option => option.date.getMonth() + 1 === this.month)?.date;
          this.setCurrentOption(firstDateInMonth);
        }
      });

      const { keyframes, options } = getAnimation(this, "calendar.show", {
        dir: this.localize.dir(),
      });
      await animateTo(this.popup.popup, keyframes, options);

      // Make sure the current option is scrolled into view (required for Safari)
      // if (this.currentOption) {
      //   scrollIntoView(this.currentOption, this.calendar, "vertical", "auto");
      // }

      this.emit("p-after-show");
      //Handle show placeholder after open if typing is true
      if (this.typing) {
        if (this.selectedOptions.length > 0) {
          // When no items are selected, keep the value empty so the placeholder shows old value
          this.placeholder =
            this.type === "range"
              ? `${this.format ? `${this.format} - ${this.format}` : "MM/DD/YYYY - MM/DD/YYYY"}`
              : this.format || "MM/DD/YYYY";
        }
        // this.displayLabel = "";
        // this.keyword = "";
      }
      if (!document.activeElement || document.activeElement !== this.displayInput) {
        this.displayInput.focus({ preventScroll: true });
      }
    } else {
      // Hide
      this.emit("p-hide");
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "calendar.hide", {
        dir: this.localize.dir(),
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.calendar.hidden = true;
      this.popup.active = false;

      this.emit("p-after-hide");
      this.keyword = "";
    }
  }

  /** Shows the calendar. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, "p-after-show");
  }

  /** Hides the calendar. */
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

  /** Moves the calendar to the current month and year. */
  goToToday() {
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.date = new Date().getDate();
  }

  /** Moves the calendar to the previous month. */
  goToPreviousMonth(event: MouseEvent) {
    if (this.month === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
    event?.stopPropagation();
    event?.preventDefault();
  }

  /** Moves the calendar to the next month. */
  goToNextMonth(event: MouseEvent) {
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
    event?.stopPropagation();
    event?.preventDefault();
  }

  /** Moves the calendar to the previous year. */
  goToPreviousYear(event: MouseEvent) {
    if (this.year <= 1970) return;
    this.year--;
    event?.stopPropagation();
    event?.preventDefault();
  }

  /** Moves the calendar to the next year. */
  goToNextYear(event: MouseEvent) {
    this.year++;
    event?.stopPropagation();
    event?.preventDefault();
  }

  // @watch("month")
  // @watch("year")
  // handleMonthChange() {
  //   this.emit("p-change");
  // }

  render() {
    if (this.month < 1 || this.month > 12) {
      throw new Error(`The value "${this.month}" is not a valid month.`);
    }

    const lang = this.lang || document.documentElement.lang;
    const month = new Date(this.year, this.month - 1, 1);
    const calendarGrid = generateCalendarGrid(this.year, this.month, {
      interface: this.interface,
    });
    const dayNames = getAllDayNames(lang, this.dayLabels);

    const hasNavigateMonth = ["day"].includes(this.interface);

    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon =
      this.clearable &&
      !this.disabled &&
      ((Array.isArray(this._value) && this._value.length > 0) || (!Array.isArray(this._value) && this._value));
    const isPlaceholderVisible =
      this.placeholder &&
      ((Array.isArray(this._value) && this._value.length === 0) || (!Array.isArray(this._value) && !this._value));

    const calendarInline = html`
      <div
        id="calendar"
        part="calendar"
        role="listbox"
        class=${classMap({
          "calendar--dialog": true,
          "calendar--has-footer": this.hasSlotController.test("footer"),
          "calendar--show-adjacent-dates": this.showAdjacentDates,
          "calendar--dialog-inline": this.mode === "inline",
        })}
        aria-expanded=${this.open ? "true" : "false"}
        aria-multiselectable=${this.type === "multiple" ? "true" : "false"}
        aria-labelledby="label"
        tabindex="-1"
      >
        <header class="calendar__header">
          <p-button
            variant="default"
            size="small"
            @click=${this.goToPreviousYear}
            class=${classMap({
              "calendar__header-button": true,
              "calendar__header-button--disabled": this.disabled,
            })}
          >
            <p-icon-button name="chevron-double-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>
          <p-button
            variant="default"
            size="small"
            @click=${this.goToPreviousMonth}
            class=${classMap({
              "calendar__header-button": true,
              "calendar__header-button--disabled": this.disabled,
              "calendar__header-button--hidden": !hasNavigateMonth,
            })}
          >
            <p-icon-button name="chevron-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>

          <slot name="header-prefix"></slot>

          <span class="calendar__label">
            <span class="calendar__month-label"
              >${hasNavigateMonth ? getMonthName(month, lang, this.monthLabels) : ""}</span
            >
            <span class="calendar__year-label">${month.getFullYear()}</span>
          </span>

          <slot name="suffix-prefix"></slot>

          <p-button
            variant="default"
            size="small"
            @click=${this.goToNextMonth}
            class=${classMap({
              "calendar__header-button": true,
              "calendar__header-button--disabled": this.disabled,
              "calendar__header-button--hidden": !hasNavigateMonth,
            })}
          >
            <p-icon-button name="chevron-right" label=${this.localize.term("nextMonth")}></p-icon-button>
          </p-button>
          <p-button
            variant="default"
            size="small"
            @click=${this.goToNextYear}
            class=${classMap({
              "calendar__header-button": true,
              "calendar__header-button--disabled": this.disabled,
            })}
          >
            <p-icon-button name="chevron-double-right" label=${this.localize.term("nextMonth")}></p-icon-button>
          </p-button>
        </header>

        ${this.interface === "day"
          ? html`<div class="calendar__days">
              ${[0, 1, 2, 3, 4, 5, 6].map(day => {
                return html`
                  <span
                    part=${partMap({
                      day: true,
                      "day-label": true,
                      "day-weekday": day > 0 && day < 6,
                      "day-weekend": day === 0 || day === 6,
                    })}
                    class="calendar__day"
                  >
                    ${dayNames[day]}
                  </span>
                `;
              })}
              ${calendarGrid.map(day => {
                if (day.isCurrentMonth || this.showAdjacentDates) {
                  let isSelected = false;
                  let isSelectionStart = false;
                  let isSelectionEnd = false;
                  let isSelectedInRange = false;
                  const isCurrentSelect = this.currentOption ? isSameDay(this.currentOption, day.date) : false;
                  switch (this.type) {
                    case "single":
                      isSelected = this._value && !Array.isArray(this._value) && isSameDay(this._value, day.date);
                      break;
                    case "multiple":
                      isSelected = Array.isArray(this._value) ? this._value.some(d => isSameDay(d, day.date)) : false;
                      break;
                    case "range":
                      if (Array.isArray(this._value) && this._value.length > 0) {
                        isSelected = this._value.some(d => isSameDay(d, day.date));
                        if (this._value.length === 2) {
                          isSelectedInRange = day.date > this._value[0] && day.date < this._value[1];
                        }
                        if (this._value.length === 1) {
                          isSelectedInRange = this.temporalEndDate
                            ? (day.date > this._value[0] && day.date < this.temporalEndDate) ||
                              (day.date < this._value[0] && day.date > this.temporalEndDate)
                            : false;
                        }

                        isSelectionStart = isSameDay(this._value[0], day.date);
                        isSelectionEnd = isSameDay(this._value[this._value.length - 1], day.date);
                      }
                      break;
                    default:
                      break;
                  }

                  return html`
                    <button
                      type="button"
                      part=${partMap({
                        day: true,
                        "day-current-focus": isCurrentSelect,
                        "day-current-month": day.isCurrentMonth,
                        "day-previous-month": day.isPreviousMonth,
                        "day-next-month": day.isNextMonth,
                        "day-today": day.isToday,
                        "day-weekday": day.isWeekday,
                        "day-weekend": day.isWeekend,
                        "day-selected": isSelected,
                        "day-selected-in-range": isSelectedInRange,
                        "day-selection-start": isSelectionStart,
                        "day-selection-end": isSelectionEnd,
                      })}
                      class="calendar__day"
                      @mouseup=${() => this.handleSelectDate(day)}
                      @mouseenter=${() => this.handleSetTemporaryEndDate(day)}
                    >
                      ${day.date.getDate()}
                    </button>
                  `;
                }

                return html` <div class="calendar__day calendar__day--empty"></div> `;
              })}
            </div>`
          : null}
        ${this.interface === "month"
          ? html`<div class="calendar__months">
              ${calendarGrid.map((monthItem: CalendarDay) => {
                let isSelected = false;
                let isSelectionStart = false;
                let isSelectionEnd = false;
                let isSelectedInRange = false;
                const isCurrentSelect = this.currentOption ? isSameDay(this.currentOption, monthItem.date) : false;
                switch (this.type) {
                  case "single":
                    isSelected = this._value && !Array.isArray(this._value) && isSameDay(this._value, monthItem.date);
                    break;
                  case "multiple":
                    isSelected = Array.isArray(this._value)
                      ? this._value.some(d => isSameDay(d, monthItem.date))
                      : false;
                    break;
                  case "range":
                    if (Array.isArray(this._value) && this._value.length > 0) {
                      isSelected = this._value.some(d => isSameDay(d, monthItem.date));
                      if (this._value.length === 2) {
                        isSelectedInRange = monthItem.date > this._value[0] && monthItem.date < this._value[1];
                      }
                      if (this._value.length === 1) {
                        isSelectedInRange = this.temporalEndDate
                          ? (monthItem.date > this._value[0] && monthItem.date < this.temporalEndDate) ||
                            (monthItem.date < this._value[0] && monthItem.date > this.temporalEndDate)
                          : false;
                      }

                      isSelectionStart = isSameDay(this._value[0], monthItem.date);
                      isSelectionEnd = isSameDay(this._value[this._value.length - 1], monthItem.date);
                    }
                    break;
                  default:
                    break;
                }

                return html`
                  <button
                    type="button"
                    part=${partMap({
                      month: true,
                      "month-current": monthItem.isCurrentMonth,
                      "month-current-focus": isCurrentSelect,
                      "month-selected": isSelected,
                      "month-selected-in-range": isSelectedInRange,
                      "month-selection-start": isSelectionStart,
                      "month-selection-end": isSelectionEnd,
                    })}
                    class="calendar__month"
                    @mouseup=${() => this.handleSelectDate(monthItem)}
                    @mouseenter=${() => this.handleSetTemporaryEndDate(monthItem)}
                  >
                    ${getMonthName(monthItem.date, lang, this.monthLabels)}
                  </button>
                `;
              })}
            </div>`
          : null}

        <footer class="calendar__footer">
          ${this.showToday
            ? html`
                <p-button
                  @click=${this.goToToday}
                  variant="primary"
                  size="small"
                  class=${classMap({
                    "calendar__today-button": true,
                    "calendar__today-button--disabled": this.disabled,
                  })}
                  >${this.localize.term("today")}
                </p-button>
              `
            : null}
          <slot name="footer"></slot>
        </footer>
      </div>
    `;

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
          ${this.mode === "inline"
            ? html`<div style="display: contents">
                ${calendarInline}
                <input
                  class="calendar__value-input"
                  type="text"
                  ?disabled=${this.disabled}
                  ?required=${this.required}
                  .value=${Array.isArray(this._value) ? this._value.join(", ") : this._value.toLocaleDateString()}
                  tabindex="-1"
                  aria-hidden="true"
                  @focus=${() => this.focus()}
                  @invalid=${this.handleInvalid}
                />
              </div>`
            : html`
                <p-popup
                  class=${classMap({
                    calendar: true,
                    "calendar--standard": true,
                    "calendar--filled": this.filled,
                    "calendar--pill": this.pill,
                    "calendar--open": this.open,
                    "calendar--disabled": this.disabled,
                    "calendar--multiple": this.type === "multiple",
                    "calendar--focused": this.hasFocus,
                    "calendar--placeholder-visible": isPlaceholderVisible,
                    "calendar--top": this.placement === "top",
                    "calendar--bottom": this.placement === "bottom",
                    "calendar--small": this.size === "small",
                    "calendar--medium": this.size === "medium",
                    "calendar--large": this.size === "large",
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
                    class="calendar__combobox"
                    slot="anchor"
                    @keydown=${this.handleComboboxKeyDown}
                    @mousedown=${this.handleComboboxMouseDown}
                  >
                    <slot part="prefix" name="prefix" class="calendar__prefix">
                      <span class="calendar__icon">
                        ${this.type === "multiple"
                          ? html`<p-icon name="calendar-week"></p-icon>`
                          : this.type === "range"
                            ? html`<p-icon name="calendar-range"></p-icon>`
                            : html`<p-icon name="calendar-day"></p-icon>`}
                      </span>
                    </slot>

                    ${this.type === "multiple" ? html`<div part="tags" class="calendar__tags">${this.tags}</div>` : ""}

                    <input
                      part="display-input"
                      class="calendar__display-input"
                      type="text"
                      placeholder=${this.placeholder}
                      .disabled=${this.disabled}
                      .value=${this.hasFocus ? this.keyword : this.displayLabel}
                      autocomplete="off"
                      spellcheck="false"
                      autocapitalize="off"
                      aria-controls="calendar"
                      aria-expanded=${this.open ? "true" : "false"}
                      aria-haspopup="dialog"
                      aria-labelledby="label"
                      aria-disabled=${this.disabled ? "true" : "false"}
                      aria-describedby="help-text"
                      ?readonly=${!this.typing}
                      role="combobox"
                      tabindex="0"
                      @focus=${this.handleFocus}
                      @blur=${this.handleBlur}
                      @input=${this.handleInput}
                    />

                    <input
                      class="calendar__value-input"
                      type="text"
                      ?disabled=${this.disabled}
                      ?required=${this.required}
                      .value=${Array.isArray(this._value) ? this._value.join(", ") : this._value?.toLocaleDateString()}
                      tabindex="-1"
                      aria-hidden="true"
                      @focus=${() => this.focus()}
                      @invalid=${this.handleInvalid}
                    />

                    ${hasClearIcon
                      ? html`
                          <button
                            part="clear-button"
                            class="calendar__clear"
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

                    <slot name="suffix" part="suffix" class="calendar__suffix"></slot>
                  </div>

                  ${calendarInline}
                </p-popup>
              `}
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

setDefaultAnimation("calendar.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 },
  ],
  options: { duration: 100, easing: "ease" },
});

setDefaultAnimation("calendar.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 },
  ],
  options: { duration: 100, easing: "ease" },
});
