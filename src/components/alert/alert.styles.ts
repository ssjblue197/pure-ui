import { css } from "lit";

export default css`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--p-panel-background-color);
    border: solid var(--p-panel-border-width) var(--p-panel-border-color);
    border-top-width: calc(var(--p-panel-border-width) * 3);
    border-radius: var(--p-border-radius-medium);
    font-family: var(--p-font-sans);
    font-size: var(--p-font-size-small);
    font-weight: var(--p-font-weight-normal);
    line-height: 1.6;
    color: var(--p-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--p-font-size-large);
    padding-inline-start: var(--p-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--p-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--p-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--p-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--p-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--p-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--p-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--p-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--p-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--p-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--p-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--p-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--p-font-size-medium);
    padding-inline-end: var(--p-spacing-medium);
  }
`;
