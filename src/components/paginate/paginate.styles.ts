import { css } from "lit";

export default css`
  :host {
    display: inline-block;
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  button::part(base) {
    font-weight: var(--p-font-weight-medium);
  }

  .paginate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    gap: var(--p-spacing-x-small);
  }

  @media only screen and (max-width: 768px) {
    .paginate {
      justify-content: center !important;
    }
    .paginate__summary {
      display: none !important;
    }
  }

  .paginate__summary,
  .paginate__items {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    position: relative;
    gap: var(--p-spacing-x-small);
  }
  .paginate__select_limit {
    width: 128px;
    font-weight: var(--p-font-weight-medium);
  }

  .paginate__summary-text {
    font-family: var(--p-font-sans);
    font-size: var(--p-font-size-small);
    font-weight: var(--p-font-weight-medium);
    line-height: var(--p-line-height-normal);
    letter-spacing: var(--p-letter-spacing-normal);
    color: var(--p-color-gray-600);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .page::part(base) {
    // border: none !important;
  }

  .page::part(base):hover {
    background-color: var(--p-color-neutral-100) !important;
  }

  .page.page--active::part(base) {
    background-color: var(--p-color-neutral-100) !important;
    color: var(--p-color-neutral-900) !important;
    opacity: 1 !important;
  }
`;
