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
  .smart-container__dropdown-menu {
    min-width: 200px;
  }
`;
