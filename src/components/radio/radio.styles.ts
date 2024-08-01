import { css } from "lit";

export default css`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--p-input-font-family);
    font-size: var(--p-input-font-size-medium);
    font-weight: var(--p-input-font-weight);
    color: var(--p-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--p-toggle-size-small);
    font-size: var(--p-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--p-toggle-size-medium);
    font-size: var(--p-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--p-toggle-size-large);
    font-size: var(--p-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--p-input-border-width) var(--p-input-border-color);
    border-radius: 50%;
    background-color: var(--p-input-background-color);
    color: transparent;
    transition:
      var(--p-transition-fast) border-color,
      var(--p-transition-fast) background-color,
      var(--p-transition-fast) color,
      var(--p-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--p-input-border-color-hover);
    background-color: var(--p-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--p-color-neutral-0);
    border-color: var(--p-color-primary-600);
    background-color: var(--p-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--p-color-primary-500);
    background-color: var(--p-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--p-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;
