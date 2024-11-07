import { css } from "lit";
import componentStyles from "../../styles/component.styles.js";

export default css`
  ${componentStyles}
  :host {
    --border-radius: var(--p-border-radius-large);
    --border-width: var(--p-input-border-width);
    --border-style: dashed;
    display: block;
  }
  .file-upload__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--p-color-gray-700);
    background-color: var(--p-color-neutral-0);
    border: 1px solid #eaecf0;
    border-radius: var(--border-radius);
    font-size: var(--p-font-size-x-large);
    box-shadow: 0px 1px 2px 0px #1018280d;
  }
  .file-upload__label {
    padding: var(--p-spacing-large) var(--p-spacing-x-large);
    border: var(--border-width) var(--border-style) var(--p-color-neutral-300);
    border-radius: var(--border-radius);
  }
  .file-upload:not(.file-upload--disabled):hover .file-upload__label {
    border-color: var(--p-color-primary-500);
    background-color: var(--p-color-primary-50);
    cursor: pointer;
  }
  .file-upload__label__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--p-spacing-medium);
  }
  .file-upload__label__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--p-spacing-x-small);
  }
  .file-upload__label__description {
    text-align: center;
    color: var(--p-color-neutral-600);
    font-size: var(--p-font-size-x-small);
    font-weight: var(--p-font-weight-regular);
  }
  .file-upload--dragged:not(.file-upload--disabled) .file-upload__label {
    border-color: var(--p-color-primary-500);
    background-color: var(--p-color-primary-100);
  }
  .file-upload__label__container__image {
    height: 6rem;
    color: var(--p-color-primary-600);
  }
  .file-upload--disabled .file-upload__label,
  .file-upload--no-drag .file-upload__label {
    cursor: no-drop;
  }
  .file-upload--disabled .file-upload__label {
    color: var(--p-color-neutral-500);
  }
  .file-upload--disabled .file-upload__label__container__image {
    color: var(--p-color-neutral-300);
  }
  .file-upload__file-items {
    display: flex;
    flex-direction: column;
    gap: var(--p-spacing-small);
    margin-top: var(--p-spacing-medium);
  }
  .file-upload--warning .file-upload__label {
    border-color: var(--p-color-warning-600);
    color: var(--p-color-warning-600);
  }
  .file-upload--warning .file-upload__label__container__image {
    color: var(--p-color-warning-500);
  }
`;
