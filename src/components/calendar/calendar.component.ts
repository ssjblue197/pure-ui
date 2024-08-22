import { classMap } from "lit/directives/class-map.js";
import { generateCalendarGrid, getAllDayNames, getMonthName, isSameDay } from "../../internal/calendar.js";
import { HasSlotController } from "../../internal/slot.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize.js";
import { partMap } from "../../internal/part-map.js";
import { property } from "lit/decorators.js";
import { watch } from "../../internal/watch.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./calendar.styles.js";
import type { CSSResultGroup, TemplateResult } from "lit";

export interface RenderDayOptions {
  disabled?: boolean;
  content: string | TemplateResult;
}

/**
 * @summary A calendar prototype for Pure UI.
 * @documentation https://pureui.xyz/components/calendar
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency p-example
 *
 * @event p-change - Emitted when the date changes.
 *
 * @slot footer - Optional content to place in the calendar's footer.
 *
 * @csspart day - Targets day cells.
 * @csspart day-label - Targets the day labels (the name of the days in the grid).
 * @csspart day-weekend - Targets days that fall on weekends.
 * @csspart day-weekday - Targets weekdays.
 * @csspart day-current-month - Targets days in the current month.
 * @csspart day-previous-month - Targets days in the previous month.
 * @csspart day-next-month - Targets days in the next month.
 * @csspart day-today - Targets today.
 * @csspart day-selected - Targets selected days.
 * @csspart day-selection-start - Targets days that begin a selection.
 * @csspart day-selection-end - Targets days that end a selection.
 *
 * @cssproperty --border-color - The calendar's border color.
 * @cssproperty --border-width - The calendar's border width.
 * @cssproperty --border-radius - The border radius of the calendar.
 */
export default class PCalendar extends PureElement {
  static styles: CSSResultGroup = styles;

  private readonly localize = new LocalizeController(this);
  private readonly hasSlotController = new HasSlotController(this, "prefix", "suffix");

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
   *
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
   * If `true`, the calendar will automatically receive focus when it open.
   * This can be useful when using the calendar in a dialog or other scenario where it should
   * receive focus without requiring the user to click on it.
   */
  @property({ type: Boolean, reflect: true }) autofocus = false;

  /**
   - Set to `true` to prevent the user from interacting with the calendar.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

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

  /** Draws the target dates as a selection in the calendar. */
  @property({ type: Array }) selectedDates: Date[] = [];

  /** Moves the calendar to the current month and year. */
  goToToday() {
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.date = new Date().getDate();
  }

  /** Moves the calendar to the previous month. */
  goToPreviousMonth() {
    if (this.month === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
  }

  /** Moves the calendar to the next month. */
  goToNextMonth() {
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
  }

  /** Moves the calendar to the previous year. */
  goToPreviousYear() {
    this.year > 1970 && this.year--;
  }

  /** Moves the calendar to the next year. */
  goToNextYear() {
    this.year++;
  }

  @watch("month")
  @watch("year")
  handleMonthChange() {
    this.emit("p-change");
  }

  render() {
    if (this.month < 1 || this.month > 12) {
      throw new Error(`The value "${this.month}" is not a valid month.`);
    }

    const lang = this.lang || document.documentElement.lang;
    const month = new Date(this.year, this.month - 1, 1);
    const dayGrid = generateCalendarGrid(this.year, this.month);
    const dayNames = getAllDayNames(lang, this.dayLabels);

    //
    // TODO - December is not showing a label because the month is calculated as Sat Jan 01 2022 00:00:00 GMT-0500
    //

    return html`
      <div
        class=${classMap({
          calendar: true,
          "calendar--has-footer": this.hasSlotController.test("footer"),
          "calendar--show-adjacent-dates": this.showAdjacentDates,
        })}
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
            })}
          >
            <p-icon-button name="chevron-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>

          <slot name="header-prefix"></slot>

          <span class="calendar__label">
            <span class="calendar__month-label">${getMonthName(month, lang, this.monthLabels)}</span>
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

        <div class="calendar__days">
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
          ${dayGrid.map((day, index) => {
            if (day.isCurrentMonth || this.showAdjacentDates) {
              const isSelected = Array.isArray(this.selectedDates)
                ? this.selectedDates.some(d => isSameDay(d, day.date))
                : false;
              const previousDay = index > 0 ? dayGrid[index - 1] : null;
              const nextDay = index < dayGrid.length - 1 ? dayGrid[index + 1] : null;
              const isSelectionStart =
                isSelected && previousDay ? !this.selectedDates.some(d => isSameDay(d, previousDay.date)) : false;
              const isSelectionEnd =
                isSelected && nextDay ? !this.selectedDates.some(d => isSameDay(d, nextDay.date)) : false;

              return html`
                <button
                  type="button"
                  part=${partMap({
                    day: true,
                    "day-current-month": day.isCurrentMonth,
                    "day-previous-month": day.isPreviousMonth,
                    "day-next-month": day.isNextMonth,
                    "day-today": day.isToday,
                    "day-weekday": day.isWeekday,
                    "day-weekend": day.isWeekend,
                    "day-selected": isSelected,
                    "day-selection-start": isSelectionStart,
                    "day-selection-end": isSelectionEnd,
                  })}
                  class="calendar__day"
                >
                  ${day.date.getDate()}
                </button>
              `;
            }

            return html` <div class="calendar__day calendar__day--empty"></div> `;
          })}
        </div>

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
  }
}
