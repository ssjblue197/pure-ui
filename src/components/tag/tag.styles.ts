import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--p-color-primary-50);
    border-color: var(--p-color-primary-200);
    color: var(--p-color-primary-800);
  }

  .tag--primary:active > p-icon-button {
    color: var(--p-color-primary-600);
  }

  .tag--success {
    background-color: var(--p-color-success-50);
    border-color: var(--p-color-success-200);
    color: var(--p-color-success-800);
  }

  .tag--success:active > p-icon-button {
    color: var(--p-color-success-600);
  }

  .tag--neutral {
    background-color: var(--p-color-neutral-50);
    border-color: var(--p-color-neutral-200);
    color: var(--p-color-neutral-800);
  }

  .tag--neutral:active > p-icon-button {
    color: var(--p-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--p-color-warning-50);
    border-color: var(--p-color-warning-200);
    color: var(--p-color-warning-800);
  }

  .tag--warning:active > p-icon-button {
    color: var(--p-color-warning-600);
  }

  .tag--danger {
    background-color: var(--p-color-danger-50);
    border-color: var(--p-color-danger-200);
    color: var(--p-color-danger-800);
  }

  .tag--danger:active > p-icon-button {
    color: var(--p-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--p-button-font-size-small);
    height: calc(var(--p-input-height-small) * 0.8);
    line-height: calc(var(--p-input-height-small) - var(--p-input-border-width) * 2);
    border-radius: var(--p-input-border-radius-small);
    padding: 0 var(--p-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--p-button-font-size-medium);
    height: calc(var(--p-input-height-medium) * 0.8);
    line-height: calc(var(--p-input-height-medium) - var(--p-input-border-width) * 2);
    border-radius: var(--p-input-border-radius-medium);
    padding: 0 var(--p-spacing-small);
  }

  .tag--large {
    font-size: var(--p-button-font-size-large);
    height: calc(var(--p-input-height-large) * 0.8);
    line-height: calc(var(--p-input-height-large) - var(--p-input-border-width) * 2);
    border-radius: var(--p-input-border-radius-large);
    padding: 0 var(--p-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--p-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--p-border-radius-pill);
  }
`;
