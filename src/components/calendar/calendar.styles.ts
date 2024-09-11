import { css } from "lit";
import componentStyles from "../../styles/component.styles.js";

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--p-color-neutral-200);
    --border-radius: var(--p-input-border-radius-large);
    --border-width: 0px;
    --border-style: solid;
    --calendar-background-color: var(--p-surface);
    --calendar-box-shadow: var(--p-shadow-medium);

    border-radius: var(--border-radius);
    display: block;
    background-color: var(--calendar-background-color);
  }

  .calendar__header {
    display: flex;
    align-items: center;
    gap: var(--p-spacing-2x-small);
    padding: var(--p-spacing-small);
    // background-color: var(--p-color-primary-200);
  }

  .calendar__header p-icon-button {
    flex: 0 0 auto;
  }

  .calendar__header-button::part(base) {
    width: 2rem !important;
    height: 2rem !important;
  }

  .calendar__header-button.calendar__header-button--disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  .calendar__header-button.calendar__header-button--hidden {
    display: none;
  }

  .calendar__label {
    flex: 1 1 auto;
    text-align: center;
    font-weight: var(--p-font-weight-medium);
  }

  .calendar__months,
  .calendar__days {
    isolation: isolate;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .calendar__months {
    grid-template-columns: repeat(4, 1fr);
  }

  .calendar__month,
  .calendar__day {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: solid var(--border-width) var(--border-color);
    border-bottom: none;
    background: none;
    background-color: var(--p-color-neutral-0);
    font: inherit;
    color: var(--p-color-neutral-900);
    min-height: 3rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .calendar__month--empty,
  .calendar__day--empty {
    cursor: default;
    background-color: var(--p-color-neutral-50);
  }

  .calendar__month:not(.calendar__month--empty):not([part~="month-selected"]):hover,
  .calendar__day:not(.calendar__day--empty):not([part~="day-selected"]):hover {
    background-color: var(--p-color-primary-200);
    color: var(--p-color-neutral-900);
  }
  .calendar__month:not(.calendar__month--empty):active,
  .calendar__day:not(.calendar__day--empty):active {
    background-color: var(--p-color-primary-300);
  }

  .calendar__day:nth-child(1),
  .calendar__day:nth-child(2),
  .calendar__day:nth-child(3),
  .calendar__day:nth-child(4),
  .calendar__day:nth-child(5),
  .calendar__day:nth-child(6),
  .calendar__day:nth-child(7) {
    font-weight: var(--p-font-weight-medium);
    background-color: var(--p-color-neutral-100) !important;
  }

  .calendar__day:nth-child(1) {
    border-top-left-radius: 0;
  }
  .calendar__day:nth-child(7) {
    border-top-right-radius: 0;
  }
  .calendar__month:nth-last-child(1),
  .calendar__day:nth-last-child(1) {
    border-bottom-right-radius: 0;
  }
  .calendar__month:nth-last-child(4),
  .calendar__day:nth-last-child(7) {
    border-bottom-left-radius: 0;
  }

  .calendar.calendar--has-footer .calendar__month:nth-last-child(1),
  .calendar__month:nth-last-child(4),
  .calendar.calendar--has-footer .calendar__day:nth-last-child(1),
  .calendar__day:nth-last-child(7) {
    border-radius: 0;
  }
  .calendar__month:not(:nth-child(4n)),
  .calendar__day:not(:nth-child(7n)) {
    border-right: none;
  }
  .calendar__month:nth-last-child(1),
  .calendar__month:nth-last-child(2),
  .calendar__month:nth-last-child(3),
  .calendar__month:nth-last-child(4),
  .calendar__day:nth-last-child(1),
  .calendar__day:nth-last-child(2),
  .calendar__day:nth-last-child(3),
  .calendar__day:nth-last-child(4),
  .calendar__day:nth-last-child(5),
  .calendar__day:nth-last-child(6),
  .calendar__day:nth-last-child(7) {
    border-bottom: solid var(--border-width) var(--border-color);
  }

  .calendar__day:focus-visible {
    outline: solid 2px var(--p-color-primary-600);
    z-index: 1;
  }

  .calendar__day[part~="day-weekend"] {
    color: var(--p-color-primary-600);
    font-weight: var(--p-font-weight-medium);
  }

  .calendar__day[part~="day-weekend"]:hover {
    color: var(--p-color-primary-600);
  }

  .calendar__day[part~="day-today"] {
    font-weight: var(--p-font-weight-bold);
    color: var(--p-color-green-600);
    background-color: var(--p-color-green-50);
  }

  .calendar__day[part~="day-today"]:not([part~="day-selected"]):hover {
    font-weight: var(--p-font-weight-bold);
    color: var(--p-color-green-600);
    background-color: var(--p-color-green-200);
  }
  .calendar__month[part~="month-selected-in-range"],
  .calendar__day[part~="day-selected-in-range"] {
    background-color: var(--p-color-primary-300);
  }
  .calendar__month[part~="month-selected"],
  .calendar__day[part~="day-selected"] {
    background-color: var(--p-color-primary-600);
    color: var(--p-color-neutral-0) !important;
  }

  .calendar__month[part~="month-selection-start"],
  .calendar__day[part~="day-selection-start"] {
    background-color: var(--p-color-primary-600) !important;
    color: var(--p-color-neutral-0) !important;
    font-weight: var(--p-font-weight-medium) !important;
  }
  .calendar__month[part~="month-selection-end"],
  .calendar__day[part~="day-selection-end"] {
    background-color: var(--p-color-primary-600) !important;
    color: var(--p-color-neutral-0) !important;
    font-weight: var(--p-font-weight-medium) !important;
  }

  .calendar__day[part~="day-previous-month"],
  .calendar__day[part~="day-next-month"] {
    color: var(--p-color-neutral-500);
    // background-color: var(--p-color-neutral-50) !important;
  }
  .calendar__day[part~="day-previous-month"][part~="day-selected"],
  .calendar__day[part~="day-next-month"][part~="day-selected"] {
    color: var(--p-color-neutral-0) !important;
    // background-color: var(--p-color-neutral-50) !important;
  }

  .calendar__day[part~="day-previous-month"][part~="day-weekend"],
  .calendar__day[part~="day-next-month"][part~="day-weekend"] {
    color: var(--p-color-primary-400);
  }

  @media (min-width: 768px) {
    /* CSS styles for tablet devices */
    .calendar__month[part~="month-current-focus"]:not([part~="month-selected"]),
    .calendar__day[part~="day-current-focus"]:not([part~="day-selected"]) {
      background-color: var(--p-color-rose-100);
    }
  }

  /* CSS for desktop devices */
  @media (min-width: 1024px) {
    /* CSS styles for desktop devices */
  }

  /* CSS for larger screens */
  @media (min-width: 1200px) {
    /* CSS styles for larger screens */
  }

  .calendar__footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--p-spacing-small);
    padding: var(--p-spacing-small);
  }

  .calendar__footer:not(:has(p-button.calendar__today-button)) {
    padding: 0 !important;
  }

  p-icon-button::part(base) {
    color: var(--p-color-neutral-600);
  }

  /** The popup */
  .calendar {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .calendar::part(popup) {
    z-index: var(--p-z-index-dropdown);
  }

  .calendar[data-current-placement^="top"]::part(popup) {
    transform-origin: bottom;
  }

  .calendar[data-current-placement^="bottom"]::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .calendar__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--p-input-font-family);
    font-weight: var(--p-input-font-weight);
    letter-spacing: var(--p-input-letter-spacing);
    vertical-align: middle;
    // overflow: hidden;
    cursor: pointer;
    transition:
      var(--p-transition-fast) color,
      var(--p-transition-fast) border,
      var(--p-transition-fast) box-shadow,
      var(--p-transition-fast) background-color;
  }

  .calendar__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--p-input-color);
    cursor: inherit;
    // overflow: hidden;
    padding: 0;
    margin: 0;
    line-height: normal !important;
    -webkit-appearance: none;
  }

  .calendar__display-input::placeholder {
    color: var(--p-input-placeholder-color);
  }

  .calendar:not(.calendar--disabled):hover .calendar__display-input {
    color: var(--p-input-color-hover);
  }

  .calendar__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .calendar--multiple:not(.calendar--placeholder-visible) .calendar__display-input {
    width: auto;
    flex: 1;
    min-width: 0px;
    padding-left: var(--p-input-spacing-small);
  }

  .calendar__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .calendar__tags {
    display: flex;
    width: auto;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--p-spacing-2x-small);
  }

  .calendar__tags::slotted(p-tag) {
    cursor: pointer !important;
  }
  .calendar__tags--overflow {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--p-spacing-x-small);
    align-items: flex-start;
    justify-content: center;
    margin-inline-start: var(--p-spacing-2x-small);
    padding: var(--p-spacing-x-small);
    overflow: hidden;
    background-color: var(--p-color-neutral-0);
  }

  .calendar--disabled .calendar__tags,
  .calendar--disabled .calendar__tags::slotted(p-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .calendar--standard .calendar__combobox {
    background-color: var(--p-input-background-color);
    border: solid var(--p-input-border-width) var(--p-input-border-color);
  }

  .calendar--standard.calendar--disabled .calendar__combobox {
    background-color: var(--p-input-background-color-disabled);
    border-color: var(--p-input-border-color-disabled);
    color: var(--p-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .calendar--standard:not(.calendar--disabled).calendar--open .calendar__combobox,
  .calendar--standard:not(.calendar--disabled).calendar--focused .calendar__combobox {
    background-color: var(--p-input-background-color-focus);
    border-color: var(--p-input-border-color-focus);
    box-shadow: 0 0 0 var(--p-focus-ring-width) var(--p-input-focus-ring-color);
  }

  /* Filled selects */
  .calendar--filled .calendar__combobox {
    border: none;
    background-color: var(--p-input-filled-background-color);
    color: var(--p-input-color);
  }

  .calendar--filled:hover:not(.calendar--disabled) .calendar__combobox {
    background-color: var(--p-input-filled-background-color-hover);
  }

  .calendar--filled.calendar--disabled .calendar__combobox {
    background-color: var(--p-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .calendar--filled:not(.calendar--disabled).calendar--open .calendar__combobox,
  .calendar--filled:not(.calendar--disabled).calendar--focused .calendar__combobox {
    background-color: var(--p-input-filled-background-color-focus);
    outline: var(--p-focus-ring);
  }

  /* Sizes */
  .calendar--small .calendar__combobox {
    border-radius: var(--p-input-border-radius-small);
    font-size: var(--p-input-font-size-small);
    min-height: var(--p-input-height-small);
    padding-block: 0;
    padding-inline: var(--p-input-spacing-small);
  }

  .calendar--small .calendar__clear {
    margin-inline-start: var(--p-input-spacing-small);
  }

  .calendar--small .calendar__prefix::slotted(*) {
    margin-inline-end: var(--p-input-spacing-small);
  }

  .calendar--small.calendar--multiple:not(.calendar--placeholder-visible) .calendar__combobox {
    padding-block: 2px;
    // padding-inline-start: 0;
  }

  .calendar--small .calendar__tags {
    gap: 2px;
  }

  .calendar--medium .calendar__combobox {
    border-radius: var(--p-input-border-radius-large);
    font-size: var(--p-input-font-size-medium);
    min-height: var(--p-input-height-medium);
    padding-block: 0;
    padding-inline: var(--p-input-spacing-medium);
  }

  .calendar--medium .calendar__clear {
    margin-inline-start: var(--p-input-spacing-medium);
  }

  .calendar--medium .calendar__prefix::slotted(*) {
    margin-inline-end: var(--p-input-spacing-medium);
  }

  .calendar--medium.calendar--multiple:not(.calendar--placeholder-visible) .calendar__combobox {
    // padding-inline-start: 0;
    padding-block: 3px;
  }

  .calendar--medium .calendar__tags {
    gap: 3px;
  }

  .calendar--large .calendar__combobox {
    border-radius: var(--p-input-border-radius-large);
    font-size: var(--p-input-font-size-large);
    min-height: var(--p-input-height-large);
    padding-block: 0;
    padding-inline: var(--p-input-spacing-large);
  }

  .calendar--large .calendar__clear {
    margin-inline-start: var(--p-input-spacing-large);
  }

  .calendar--large .calendar__prefix::slotted(*) {
    margin-inline-end: var(--p-input-spacing-large);
  }

  .calendar--large.calendar--multiple:not(.calendar--placeholder-visible) .calendar__combobox {
    // padding-inline-start: 0;
    padding-block: 4px;
  }

  .calendar--large .calendar__tags {
    gap: 4px;
  }

  /* Pills */
  .calendar--pill.calendar--small .calendar__combobox {
    border-radius: var(--p-input-height-small);
  }

  .calendar--pill.calendar--medium .calendar__combobox {
    border-radius: var(--p-input-height-medium);
  }

  .calendar--pill.calendar--large .calendar__combobox {
    border-radius: var(--p-input-height-large);
  }

  /* Prefix */
  .calendar__prefix {
    flex: 0 0 auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--p-input-placeholder-color);
  }

  /* Suffix */
  .calendar__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--p-input-placeholder-color);
  }

  /* Icon */
  .calendar__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-inline-end: var(--p-input-spacing-small);
    font-size: var(--p-font-size-large);
  }

  /* Clear button */
  .calendar__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--p-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--p-transition-fast) color;
    cursor: pointer;
  }

  .calendar__clear:hover {
    color: var(--p-input-icon-color-hover);
  }

  .calendar__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .calendar__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--p-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--p-spacing-small);
  }

  .calendar--open .calendar__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .calendar--dialog {
    display: block;
    position: relative;
    font-family: var(--p-font-sans);
    font-size: var(--p-font-size-medium);
    font-weight: var(--p-font-weight-normal);
    box-shadow: var(--p-shadow-large);
    background: var(--p-panel-background-color);
    border: solid var(--p-panel-border-width) var(--p-panel-border-color);
    border-radius: var(--p-border-radius-large);
    padding-block: 0; //OLD: var(--p-spacing-x-small)
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .calendar--dialog.calendar--dialog-inline {
    box-shadow: var(--p-shadow-small) !important;
  }

  .calendar--dialog ::slotted(p-divider) {
    --spacing: var(--p-spacing-x-small);
  }

  .calendar--dialog ::slotted(small) {
    display: block;
    font-size: var(--p-font-size-small);
    font-weight: var(--p-font-weight-medium);
    color: var(--p-color-neutral-500);
    padding-block: var(--p-spacing-2x-small);
    padding-inline: var(--p-spacing-x-large);
  }
`;
