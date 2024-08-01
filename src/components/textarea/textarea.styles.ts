import { css } from "lit";

export default css`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--p-input-font-family);
    font-weight: var(--p-input-font-weight);
    line-height: var(--p-line-height-normal);
    letter-spacing: var(--p-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--p-transition-fast) color,
      var(--p-transition-fast) border,
      var(--p-transition-fast) box-shadow,
      var(--p-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--p-input-background-color);
    border: solid var(--p-input-border-width) var(--p-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--p-input-background-color-hover);
    border-color: var(--p-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--p-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--p-input-background-color-focus);
    border-color: var(--p-input-border-color-focus);
    color: var(--p-input-color-focus);
    box-shadow: 0 0 0 var(--p-focus-ring-width) var(--p-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--p-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--p-input-background-color-disabled);
    border-color: var(--p-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--p-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--p-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--p-input-filled-background-color);
    color: var(--p-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--p-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--p-input-filled-background-color-focus);
    outline: var(--p-focus-ring);
    outline-offset: var(--p-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--p-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--p-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--p-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--p-input-border-radius-small);
    font-size: var(--p-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--p-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--p-input-border-radius-medium);
    font-size: var(--p-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--p-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--p-input-border-radius-large);
    font-size: var(--p-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--p-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;
