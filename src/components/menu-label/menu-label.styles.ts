import { css } from 'lit';
export default css`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--p-font-sans);
    font-size: var(--p-font-size-small);
    font-weight: var(--p-font-weight-semibold);
    line-height: var(--p-line-height-normal);
    letter-spacing: var(--p-letter-spacing-normal);
    color: var(--p-color-neutral-500);
    padding: var(--p-spacing-2x-small) var(--p-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;
