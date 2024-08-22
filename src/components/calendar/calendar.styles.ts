import { css } from "lit";
import componentStyles from "../../styles/component.styles.js";

export default css`
  ${componentStyles}

  :host {
    --border-color: var(--p-color-neutral-200);
    --border-radius: var(--p-input-border-radius-large);
    --border-width: 1px;
    --border-style: solid;

    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    display: block;
    overflow: hidden;
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

  .calendar__label {
    flex: 1 1 auto;
    text-align: center;
    font-weight: var(--p-font-weight-medium);
  }

  .calendar__days {
    isolation: isolate;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

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

  .calendar__day--empty {
    cursor: default;
    background-color: var(--p-color-neutral-50);
  }

  .calendar__day:not(.calendar__day--empty):hover {
    background-color: var(--p-color-primary-200);
    color: var(--p-color-neutral-900);
  }

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
    background-color: var(--p-color-neutral-100);
  }

  .calendar__day:nth-child(1) {
    border-top-left-radius: 0;
  }

  .calendar__day:nth-child(7) {
    border-top-right-radius: 0;
  }

  .calendar__day:nth-last-child(1) {
    border-bottom-right-radius: 0;
  }

  .calendar__day:nth-last-child(7) {
    border-bottom-left-radius: 0;
  }

  .calendar.calendar--has-footer .calendar__day:nth-last-child(1),
  .calendar__day:nth-last-child(7) {
    border-radius: 0;
  }

  .calendar__day:not(:nth-child(7n)) {
    border-right: none;
  }

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

  .calendar__day[part~="day-today"]:hover {
    font-weight: var(--p-font-weight-bold);
    color: var(--p-color-green-600);
    background-color: var(--p-color-green-200);
  }

  .calendar__day[part~="day-selected"] {
    background-color: var(--p-color-primary-300);
  }

  .calendar__day[part~="day-selection-start"] {
    background-color: var(--p-color-primary-600);
    color: var(--p-color-neutral-0);
  }

  .calendar__day[part~="day-selection-end"] {
    background-color: var(--p-color-primary-600);
    color: var(--p-color-neutral-0);
  }

  .calendar__day[part~="day-previous-month"],
  .calendar__day[part~="day-next-month"] {
    color: var(--p-color-neutral-500);
    // background-color: var(--p-color-neutral-50) !important;
  }

  .calendar__day[part~="day-previous-month"][part~="day-weekend"],
  .calendar__day[part~="day-next-month"][part~="day-weekend"] {
    color: var(--p-color-primary-400);
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
`;
