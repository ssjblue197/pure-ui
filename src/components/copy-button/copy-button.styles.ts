import { css } from "lit";

export default css`
  :host {
    --error-color: var(--p-color-danger-600);
    --success-color: var(--p-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--p-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--p-spacing-x-small);
    cursor: pointer;
    transition: var(--p-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;
