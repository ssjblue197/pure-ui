import { css } from "lit";
import componentStyles from "../../styles/component.styles.js";

export default css`
  ${componentStyles}
  :host {
    display: contents;
    /* For better Developer Experience, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }
  .file-upload-item {
    position: relative;
    display: flex;
    background-color: var(--p-panel-background-color);
    border: var(--p-panel-border-width) solid var(--p-panel-border-color);
    border-radius: var(--p-border-radius-medium);
    font-family: var(--p-font-sans);
    font-size: var(--p-font-size-medium);
    font-weight: var(--p-font-weight-normal);
    line-height: var(--p-line-height-normal);
    color: var(--p-color-neutral-700);
    margin: inherit;
  }
  .file-upload-item__content {
    position: relative;
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .file-upload-item:not(.file-upload-item--has-image) .file-upload-item__image,
  .file-upload-item:not(.file-upload-item--closable) .file-upload-item__close-button {
    display: none;
  }
  .file-upload-item--is-loading .file-upload-item__image,
  .file-upload-item--is-loading .file-upload-item__label {
    visibility: hidden;
  }
  .file-upload-item__image {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--p-font-size-x-large);
    padding-left: var(--p-spacing-large);
    color: var(--p-color-primary-600);
  }
  .file-upload-item__progress-bar__container {
    inset: 0;
    position: absolute;
    display: flex;
    padding: var(--p-spacing-large);
    align-items: center;
  }
  .file-upload-item__progress-bar {
    flex: 1;
  }
  .file-upload-item__label {
    flex: 1 1 auto;
    padding: var(--p-spacing-medium);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .file-upload-item__label__size {
    font-size: var(--p-font-size-small);
    line-height: var(--p-line-height-dense);
  }
  .file-upload-item__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--p-font-size-large);
    padding-right: var(--p-spacing-medium);
  }
  .file-upload-item--warning {
    border-color: var(--p-color-warning-600);
  }
  .file-upload-item--warning,
  .file-upload-item--warning .file-upload-item__image {
    color: var(--p-color-warning-600);
  }
`;
