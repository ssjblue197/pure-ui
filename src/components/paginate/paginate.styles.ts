import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .paginate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: var(--p-spacing-x-small);
  }

  .paginate__items {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    position: relative;
    gap: var(--p-spacing-x-small);
  }

  .page.page--active {
    background-color: var(--p-color-primary-600) !important;
    color: var(--p-color-white) !important;
    border-color: var(--p-color-primary-600) !important;
  }
`;
