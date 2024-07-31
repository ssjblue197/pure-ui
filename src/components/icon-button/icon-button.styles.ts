import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    color: var(--p-color-neutral-600);
  }

  .icon-button {
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
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--p-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--p-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;
