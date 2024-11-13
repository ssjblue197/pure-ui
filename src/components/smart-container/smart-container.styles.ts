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
  .smart_container__dropdown-content {
    min-width: 300px;
    display: flex;
    flex-flow: column nowrap;
    gap: var(--p-spacing-x-small);
    padding: 0 var(--p-spacing-x-small);
    position: relative;
  }
`;
