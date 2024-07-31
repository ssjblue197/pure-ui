import { css } from 'lit';

export default css`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--p-tooltip-arrow-size);
    --arrow-color: var(--p-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--p-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--p-tooltip-border-radius);
    background-color: var(--p-tooltip-background-color);
    font-family: var(--p-tooltip-font-family);
    font-size: var(--p-tooltip-font-size);
    font-weight: var(--p-tooltip-font-weight);
    line-height: var(--p-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--p-tooltip-color);
    padding: var(--p-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;
