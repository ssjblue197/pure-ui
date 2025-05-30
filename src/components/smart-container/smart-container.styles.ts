import { css } from "lit";

export default css`
  :host {
    display: block;
  }
  .smart-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    flex-wrap: nowrap;
    gap: var(--p-spacing-x-small);
  }
  .smart-container__rtl {
    justify-content: flex-end !important;
  }
  .smart-container__dropdown-content {
    min-width: 300px;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--p-spacing-x-small);
    padding: 0 var(--p-spacing-x-small);
    position: relative;
  }

  .smart-container__prefix,
  .smart-container__suffix {
    display: none;
    flex: 0 0 auto;
  }

  .smart-container--has-prefix .smart-container__prefix {
    display: inline-flex !important;
    width: auto !important;
    // margin-inline-end: var(--p-spacing-x-small);
  }

  .smart-container--has-suffix .smart-container__suffix {
    display: inline-flex !important;
    width: auto !important;
    // margin-inline-start: var(--p-spacing-x-small);
  }
`;
