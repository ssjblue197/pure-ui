import { css } from "lit";

export default css`
  :host {
    --table-header-cell-padding: var(--p-spacing-small) var(--p-spacing-medium);
    --table-body-cell-padding: var(--p-spacing-small) var(--p-spacing-medium);
    --table-footer-padding: var(--p-spacing-small) var(--p-spacing-medium);

    --table-border-horizontal-width: 1px;
    --table-border-horizontal-style: solid;
    --table-border-horizontal-color: var(--p-color-neutral-200);

    --table-border-vertical-width: 0px;
    --table-border-vertical-style: solid;
    --table-border-vertical-color: var(--p-color-neutral-200);

    --table-border-width: 1px;
    --table-border-color: var(--p-color-neutral-200);
    --table-border-style: solid;
    --table-border-radius: var(--p-border-radius-x-large);

    --table-row-expand-background-color: var(--p-color-gray-50);
    --table-row-hover-background-color: var(--p-color-primary-50);
    --table-cell-background-color: var(--p-color-neutral-0);
    --table-cell-hover-background-color: var(--p-color-primary-50);

    --table-cell-min-height: 40px;
    --table-cell-max-height: 1fr;

    --table-cell-min-width: 100px;
    --table-cell-max-width: 1fr;

    --table-row-gap: 0;
    --table-column-gap: 0;
  }

  .table-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    border: var(--table-border-width) var(--table-border-style) var(--table-border-color);
    border-radius: var(--table-border-radius);
    box-shadow: 0px 1px 2px 0px #1018280d;
  }

  .table {
    width: 100%;
    display: grid !important;
    grid-template-columns: repeat(1, minmax(var(--table-cell-min-width), var(--table-cell-max-width)));
    // grid-template-rows: repeat(auto-fill, minmax(var(--table-cell-min-height), var(--table-cell-max-height)));
    row-gap: var(--table-row-gap);
    column-gap: var(--table-column-gap);
    position: relative;
    overflow: auto;
  }
  .table-header,
  .table-body,
  .table-row {
    display: contents;
    position: relative;
  }

  .table-header.table-header--hidden {
    display: none;
  }

  .table-cell.table-cell--resizable {
    resize: horizontal;
    overflow: auto;
  }

  .table-header .table-cell {
    color: var(--p-color-gray-600);
    font-weight: var(--p-font-weight-medium);
    font-size: var(--p-font-size-x-small);
    padding: var(--table-header-cell-padding);
    justify-items: stretch;
    background-color: var(--p-color-gray-50);
    border-bottom: var(--table-border-horizontal-width) var(--table-border-horizontal-style)
      var(--table-border-horizontal-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    position: sticky !important;
    top: 0;
    z-index: 1;
  }

  .table-header .table-cell:not(:last-child) {
    border-right: var(--table-border-vertical-width) var(--table-border-vertical-style)
      var(--table-border-vertical-color);
  }

  .table-body {
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: auto;
  }

  .table-row .table-cell:not(:last-child) {
    border-right: var(--table-border-vertical-width) var(--table-border-vertical-style)
      var(--table-border-horizontal-color);
  }

  .table-row:hover .table-cell {
    background-color: var(--table-row-hover-background-color) !important;
  }

  .table-row:not(:last-child) .table-cell {
    border-bottom: var(--table-border-horizontal-width) var(--table-border-horizontal-style)
      var(--table-border-horizontal-color);
  }

  .table-row-expand {
    grid-column: 1 / -1;
    position: relative;
    overflow: hidden;
    height: 0px;
    transition: height 0.5s ease;
    will-change: auto;
  }

  .table-row-expand.table-row-expand--is-open {
    border-bottom: var(--table-border-horizontal-width) var(--table-border-horizontal-style)
      var(--table-border-horizontal-color);
    background-color: var(--table-row-expand-background-color);
    height: auto !important;
  }

  .row-expand-icon-container {
    position: relative;
    cursor: pointer;
    transition: transform 0.5s ease;
    transform: rotate(0);
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row-expand-icon-container.row-expand-icon-container--is-open {
    transform: rotate(180deg);
  }

  .table-footer {
    width: 100%;
    justify-self: stretch;
    justify-content: center;
    align-items: center;
    padding: var(--table-footer-padding);
  }

  .table-footer.table-footer--hidden {
    display: none;
  }

  .table-footer {
    border-top: var(--table-border-horizontal-width) var(--table-border-horizontal-style)
      var(--table-border-horizontal-color);
  }

  .table-cell {
    display: flex;
    padding: 0.5rem;
    justify-items: stretch;
    justify-self: stretch;
    align-self: stretch;
    color: var(--p-color-gray-600);
    font-weight: var(--p-font-weight-normal);
    font-size: var(--p-font-size-small);
    padding: var(--table-body-cell-padding);
    min-height: round(var(--table-cell-min-height), 1px);
    max-height: round(var(--table-cell-max-height), 1px);
  }

  .table-cell.table-cell--sticky {
    position: sticky;
    z-index: 2 !important;
  }

  .table-row .table-cell {
    background-color: var(--table-cell-background-color);
  }

  .table-row .table-cell:hover {
    background-color: var(--table-cell-hover-background-color) !important;
  }

  .table-loading,
  .table-empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    grid-column: 1 / -1;
  }

  .table-empty .table-empty__label {
    color: var(--p-color-gray-500);
    font-weight: var(--p-font-weight-normal);
    font-size: var(--p-font-size-x-small);
    padding: 0.5rem;
  }
`;
