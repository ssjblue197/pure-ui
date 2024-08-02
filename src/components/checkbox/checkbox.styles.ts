import { css } from "lit";

export default css`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--p-input-font-family);
    font-weight: var(--p-input-font-weight);
    color: var(--p-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--p-toggle-size-small);
    font-size: var(--p-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--p-toggle-size-medium);
    font-size: var(--p-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--p-toggle-size-large);
    font-size: var(--p-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--p-input-border-width) var(--p-input-border-color);
    border-radius: 0.375rem;
    background-color: var(--p-input-background-color);
    color: var(--p-color-neutral-0);
    transition:
      var(--p-transition-fast) border-color,
      var(--p-transition-fast) background-color,
      var(--p-transition-fast) color,
      var(--p-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--p-input-border-color-hover);
    background-color: var(--p-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--p-color-primary-600);
    background-color: var(--p-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--p-color-primary-500);
    background-color: var(--p-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--p-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--p-input-required-content);
    color: var(--p-input-required-content-color);
    margin-inline-start: var(--p-input-required-content-offset);
  }
`;
