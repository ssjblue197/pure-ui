import { css } from "lit";

export default css`
  :host {
    display: inline-block;
  }

  :host([size="small"]) {
    --height: var(--p-toggle-size-small);
    --thumb-size: calc(var(--p-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--p-input-font-size-small);
  }

  :host([size="medium"]) {
    --height: var(--p-toggle-size-medium);
    --thumb-size: calc(var(--p-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--p-input-font-size-medium);
  }

  :host([size="large"]) {
    --height: var(--p-toggle-size-large);
    --thumb-size: calc(var(--p-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--p-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--p-input-font-family);
    font-size: inherit;
    font-weight: var(--p-input-font-weight);
    color: var(--p-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--p-color-neutral-400);
    border: solid var(--p-input-border-width) var(--p-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--p-transition-fast) border-color,
      var(--p-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--p-color-neutral-0);
    border-radius: 50%;
    border: solid var(--p-input-border-width) var(--p-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--p-transition-fast) translate ease,
      var(--p-transition-fast) background-color,
      var(--p-transition-fast) border-color,
      var(--p-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--p-color-neutral-400);
    border-color: var(--p-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--p-color-neutral-0);
    border-color: var(--p-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--p-color-neutral-400);
    border-color: var(--p-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--p-color-neutral-0);
    border-color: var(--p-color-primary-600);
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--p-color-primary-600);
    border-color: var(--p-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--p-color-neutral-0);
    border-color: var(--p-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--p-color-primary-600);
    border-color: var(--p-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--p-color-neutral-0);
    border-color: var(--p-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--p-color-primary-600);
    border-color: var(--p-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--p-color-neutral-0);
    border-color: var(--p-color-primary-600);
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--p-input-required-content);
    color: var(--p-input-required-content-color);
    margin-inline-start: var(--p-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;
