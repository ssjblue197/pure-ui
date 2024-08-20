import { css } from "lit";

export default css`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--p-z-index-dropdown);
  }

  .select[data-current-placement^="top"]::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^="bottom"]::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
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
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--p-transition-fast) color,
      var(--p-transition-fast) border,
      var(--p-transition-fast) box-shadow,
      var(--p-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--p-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    // -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--p-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--p-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    width: auto;
    flex: 1;
    min-width: 80px;
    padding-left: var(--p-input-spacing-small);
  }

  .select__value-input {
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

  .select__tags {
    display: flex;
    width: auto;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--p-spacing-2x-small);
  }

  .select__tags::slotted(p-tag) {
    cursor: pointer !important;
  }
  .select__tags--overflow {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--p-spacing-2x-small);
    align-items: flex-start;
    justify-content: center;
    margin-inline-start: var(--p-spacing-2x-small);
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(p-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--p-input-background-color);
    border: solid var(--p-input-border-width) var(--p-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--p-input-background-color-disabled);
    border-color: var(--p-input-border-color-disabled);
    color: var(--p-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--p-input-background-color-focus);
    border-color: var(--p-input-border-color-focus);
    box-shadow: 0 0 0 var(--p-focus-ring-width) var(--p-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--p-input-filled-background-color);
    color: var(--p-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--p-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--p-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--p-input-filled-background-color-focus);
    outline: var(--p-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--p-input-border-radius-small);
    font-size: var(--p-input-font-size-small);
    min-height: var(--p-input-height-small);
    padding-block: 0;
    padding-inline: var(--p-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--p-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--p-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--p-input-border-radius-large);
    font-size: var(--p-input-font-size-medium);
    min-height: var(--p-input-height-medium);
    padding-block: 0;
    padding-inline: var(--p-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--p-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--p-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--p-input-border-radius-large);
    font-size: var(--p-input-font-size-large);
    min-height: var(--p-input-height-large);
    padding-block: 0;
    padding-inline: var(--p-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--p-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--p-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--p-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--p-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--p-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--p-input-placeholder-color);
  }

  /* Suffix */
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--p-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
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

  .select__clear:hover {
    color: var(--p-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--p-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--p-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
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

  .select__listbox ::slotted(p-divider) {
    --spacing: var(--p-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--p-font-size-small);
    font-weight: var(--p-font-weight-medium);
    color: var(--p-color-neutral-500);
    padding-block: var(--p-spacing-2x-small);
    padding-inline: var(--p-spacing-x-large);
  }
`;
