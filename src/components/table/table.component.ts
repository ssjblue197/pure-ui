import { classMap } from "lit/directives/class-map.js";
import { getNestedValue } from "../../utilities/object.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PCheckbox from "../checkbox/checkbox.component.js";
import PIcon from "../icon/icon.js";
import PPaginate from "../paginate/paginate.component.js";
import PTag from "../tag/tag.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./table.styles.js";
import type { CSSResultGroup } from "lit";
import type { TableOptions, TableRowData } from "./table.ts";

/**
 * @summary The Table component is used to display data in a table format.
 * @documentation https://pureui.xyz/components/table
 * @status stable
 * @since 1.1.15
 *
 * @dependency p-tag
 * @dependency p-paginate
 * @dependency p-icon
 *
 * @event p-change - Emitted when the current page value changes.
 * @event p-table-row-select - Emitted when the rows selected changed.
 *
 * @slot - The default slot.
 * @slot paginate - An optional slot for paginate element.
 *
 * @csspart table-wrapper - The component's table wrapper.
 * @csspart table-header - The component's table header wrapper.
 * @csspart table-body - The component's table body wrapper.
 * @csspart table-loading - The component's table loading wrapper.
 * @csspart table-empty - The component's table empty wrapper.
 * @csspart table-footer - The component's table footer wrapper.
 *
 *
 * @cssproperty --table-header-cell-padding - Set padding for header cell.
 * @cssproperty --table-body-cell-padding - Set padding for body cell.
 * @cssproperty --table-footer-padding - Set padding for footer cell.
 * @cssproperty --table-border-horizontal-width - Set border width horizontal.
 * @cssproperty --table-border-horizontal-style - Set border style horizontal.
 * @cssproperty --table-border-horizontal-color - Set border color horizontal.
 * @cssproperty --table-border-vertical-width - Set border width vertical.
 * @cssproperty --table-border-vertical-style - Set border style vertical.
 * @cssproperty --table-border-vertical-color - Set border color vertical.
 * @cssproperty --table-border-width - Set table border width.
 * @cssproperty --table-border-color - Set table border color.
 * @cssproperty --table-border-style - Set table border style.
 * @cssproperty --table-border-radius - Set table border radius.
 * @cssproperty --table-row-hover-background-color - Set table row hover background color.
 * @cssproperty --table-cell-background-color - Set table cell background color.
 * @cssproperty --table-cell-hover-background-color - Set table cell hover background color.
 * @cssproperty --table-cell-min-height - Set table cell min height.
 * @cssproperty --table-cell-max-height - Set table cell max height.
 * @cssproperty --table-cell-min-width - Set table cell min width.
 * @cssproperty --table-cell-max-width - Set table cell max width.
 *
 *
 *
 *
 *
 */
export default class PTable extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];

  static dependencies = {
    "p-paginate": PPaginate,
    "p-tag": PTag,
    "p-icon": PIcon,
    "p-checkbox": PCheckbox,
  };

  private readonly localize = new LocalizeController(this);

  /**
   * Indicates that the element is disabled.
   *
   * @attribute disabled
   * @type {boolean}
   * @defaultValue false
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * The options for the table.
   *
   * @property options
   * @type {TableOptions<TableRowData>}
   * @defaultValue { columns: [], data: [] }
   * @reflect
   *
   * @description
   * This property is an object that contains the columns and data for the table.
   * The `columns` property is an array of objects, where each object represents a
   * column and has the following properties:
   *
   * - `field`: The field in the row data that the column represents.
   * - `headerName`: The text to display in the column header.
   * - `width`: The width of the column.
   * - `minWidth`: The minimum width of the column.
   * - `maxWidth`: The maximum width of the column.
   * - `alignItems`: The alignment of the content in the column.
   * - `justifyContent`: The justification of the content in the column.
   * - `justifyItems`: The justification of the items in the column.
   * - `truncate`: Whether to truncate the content in the column.
   * - `classes`: The CSS classes to apply to the column.
   * - `sticky`: Whether the column should be sticky.
   * - `stickyOffset`: The offset from the top of the scroll container at which the column should become sticky.
   *
   * The `data` property is an array of objects, where each object represents a row
   * in the table.
   *
   * */
  @property({
    type: Object,
    reflect: false,
    converter: {
      fromAttribute: (value: string) => {
        if (!value) return null;
        return JSON.parse(value) as TableOptions<TableRowData>;
      },
      toAttribute: (value: TableOptions<TableRowData>) => {
        if (!value) return null;
        return JSON.stringify(value);
      },
    },
  })
  options: TableOptions<TableRowData> = {
    columns: [],
    paginate: true,
    draggable: false,
    hideHeader: false,
    hideFooter: false,
    expandable: false,
    selectable: false,
  };

  /**
   * The data to display in the table.
   *
   * This property is an array of objects, where each object represents a row
   * in the table. The properties of each object will be used to populate the
   * columns in the table. The column headers will be determined by the
   * `options.columns` property.
   *
   * @type {TableRowData[]}
   * @default []
   */
  @property({ type: Array, reflect: false }) data: TableRowData[] = [];

  /**
   * Whether the table is currently loading data.
   *
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  /**
   * The current page of items based on the current `limit` and `total`.
   *
   * @type {number}
   * @default 1
   */
  @property({ type: Number, reflect: true }) page = 1;

  /**
   * The number of items to display per page.
   *
   * @type {number}
   * @default 10
   */
  @property({ type: Number, reflect: true }) limit = 10;

  /**
   * The total number of items in the table.
   *
   * @type {number}
   * @default 0
   */
  @property({ type: Number, reflect: true }) total = 0;

  @property({
    type: Array,
    reflect: false,
  })
  items: TableRowData[] = [];

  @state() selectedRows: TableRowData[] = [];
  @state() tmpSelectedRows: TableRowData[] = [];

  @query(".table-wrapper") tableWrapper: HTMLElement;

  // Computed property using a getter
  /**
   * Returns the current page of items based on the current page, page size, and total items.
   * If the table is not local paginated, all items are returned.
   *
   * @returns {Array} The current page of items.
   */
  get currentItems() {
    // If the table is not local paginated, return all items.
    if (!this.options?.paginate) return this.items;

    // If there are no total items, return an empty array.
    if (this.total === 0) return [];

    // Calculate the start and end indices for the current page.
    const start = ((this.page || 1) - 1) * this.limit;
    const end = start + this.limit;

    // Return the current page of items.
    return this.items.slice(start, end);
  }

  @watch("data")
  handleApplyOptionsChange() {
    this.total = this.data.length;
    this.items = this.data;
  }

  @watch("disabled", { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  private startObserver() {
    const elements = this.shadowRoot?.querySelectorAll(".table-header .table-cell.table-cell--resizable") as unknown;

    // Unwatch previous elements
    this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
    this.observedElements = [];

    // Watch new elements
    (elements as HTMLElement[]).forEach(el => {
      this.resizeObserver.observe(el);
      this.observedElements.push(el);
    });
  }

  private stopObserver() {
    this.resizeObserver.disconnect();
  }

  private handleAttachResizeObserved() {
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (Array.isArray(entries) && entries.length > 0) {
        const currentResizedElement = entries[0]?.target;
        const currentColumnIndex = currentResizedElement.getAttribute("data-column-index");
        const rowData = this.shadowRoot?.querySelectorAll(".table-body .table-row") as unknown;
        Array.from(rowData as HTMLElement[]).forEach((el: HTMLElement) => {
          const cellResize = el.querySelector(`.table-cell[data-column-index="${currentColumnIndex}"]`);
          if (cellResize) {
            (cellResize as HTMLElement).style.width = `${currentResizedElement.clientWidth}px`;
          }
        });
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.handleAttachResizeObserved();
  }

  private handleEventDispatch = (e: Event) => {
    // do something
    // Find the closest element with the class "row"
    const path = e.composedPath();

    const closestRow = path.find(element => (element as HTMLElement)?.classList?.contains("table-row")) as HTMLElement;

    if (closestRow) {
      // Now you have the row element and can access its data or handle it as needed
      const rowElement = closestRow as HTMLElement | null;

      const rowValue = (
        rowElement as HTMLElement & {
          "data-row": TableRowData;
        }
      )?.["data-row"];

      // Dispatch a custom event with the row data
      this.dispatchEvent(new CustomEvent(e.type, { detail: rowValue, bubbles: true, composed: true }));
    }
  };

  protected firstUpdated(): void {
    // do something
    this.tableWrapper.addEventListener("click", this.handleEventDispatch.bind(this));
    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.tableWrapper.removeEventListener("click", this.handleEventDispatch.bind(this));
    this.stopObserver();
  }

  private handleChangePage(e: CustomEvent & { detail: { page: number } }) {
    e?.preventDefault();
    e?.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const page = Number(e.detail.page);
    this.page = page;

    // Handle recovering the temporal selected rows when the page changes
    this.tmpSelectedRows = [];
    this.currentItems.forEach(selectedRow => {
      if (this.selectedRows.includes(selectedRow)) {
        this.tmpSelectedRows = [...this.tmpSelectedRows, selectedRow];
      }
    });

    this.emit("p-change", {
      detail: { page: this.page },
    });
  }

  private handleChangeLimit(e: CustomEvent & { detail: { limit: number } }) {
    e?.preventDefault();
    e?.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const limit = Number(e.detail?.limit);
    this.limit = limit;
    this.page = 1;
    this.emit("p-change-limit", {
      detail: { limit: limit },
    });
  }

  private handleSelectAll(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.tmpSelectedRows.length === this.currentItems.length && this.tmpSelectedRows.length > 0) {
      this.tmpSelectedRows = [];
      this.selectedRows = this.selectedRows.filter(
        selectedRow =>
          !this.currentItems.some(currentRow => JSON.stringify(currentRow) === JSON.stringify(selectedRow)),
      );
    } else {
      this.tmpSelectedRows = this.currentItems;
      this.currentItems.forEach(selectedRow => {
        if (!this.selectedRows.some(currentRow => JSON.stringify(currentRow) === JSON.stringify(selectedRow))) {
          this.selectedRows = [...this.selectedRows, selectedRow];
        }
      });
    }
    // Wait for the tree items' DOM to update before emitting
    Promise.all(this.selectedRows.map(el => el.updateComplete)).then(() => {
      this.emit("p-table-row-select", { detail: { selection: this.selectedRows } });
    });
  }

  private handleSelectRow(e: Event, r: TableRowData) {
    e.preventDefault();
    e.stopPropagation();
    if (this.selectedRows.some(currentRow => JSON.stringify(currentRow) === JSON.stringify(r))) {
      this.selectedRows = this.selectedRows.filter(selectedRow => JSON.stringify(selectedRow) !== JSON.stringify(r));
      this.tmpSelectedRows = this.tmpSelectedRows.filter(
        selectedRow => JSON.stringify(selectedRow) !== JSON.stringify(r),
      );
    } else {
      this.selectedRows = [...this.selectedRows, r];
      this.tmpSelectedRows = [...this.tmpSelectedRows, r];
    }
    // Wait for the tree items' DOM to update before emitting
    Promise.all(this.selectedRows.map(el => el.updateComplete)).then(() => {
      this.emit("p-table-row-select", { detail: { selection: this.selectedRows, row: r } });
    });
  }

  getSelectedRows() {
    return this.selectedRows;
  }

  render() {
    return html` <div
      class=${classMap({
        "table-wrapper": true,
      })}
      part="table-wrapper"
    >
      <div
        class=${classMap({
          table: true,
        })}
        style="grid-template-columns: repeat(${this.options?.selectable
          ? this.options.columns.length + 1
          : this.options.columns.length}, auto); max-height: ${this.options?.maxHeight || "unset"};
          min-height: ${this.options?.minHeight || "auto"};
          "
      >
        <div
          class=${classMap({
            "table-header": true,
            "table-header--hidden": !!this.options?.hideHeader,
          })}
          part="table-header"
        >
          ${this.options?.selectable
            ? html`
                <div
                  class=${classMap({
                    "table-cell": true,
                  })}
                  style=${styleMap({
                    width: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                  })}
                >
                  <p-checkbox
                    ?checked=${this.tmpSelectedRows.length > 0 &&
                    this.tmpSelectedRows.length === this.currentItems.length}
                    @click=${this.handleSelectAll}
                  ></p-checkbox>
                </div>
              `
            : ""}
          ${this.options.columns.map(
            (i, index) => html`
              <div
                class=${classMap({
                  "table-cell": true,
                  "table-cell--resizable": !!i?.resizable,
                })}
                data-column-index=${index}
                style=${styleMap({
                  width: i?.width || "auto",
                  minWidth: i?.minWidth || "auto",
                  maxWidth: i?.maxWidth || "unset",
                  display: i?.hide ? "none" : "flex",
                  alignItems: i?.alignItems || "center",
                  justifyContent: i?.justifyContent || "flex-start",
                  textOverflow: i?.truncate ? "ellipsis" : "unset",
                  whiteSpace: i?.truncate ? "nowrap" : "unset",
                  overflow: i?.truncate ? "hidden" : i?.resizable ? "auto" : "unset",
                  position: i?.sticky ? "sticky" : "relative",
                  left: i?.sticky === "start" ? `${i?.stickyOffset || 0}px` : "unset",
                  right: i?.sticky === "end" ? `${i?.stickyOffset || 0}px` : "unset",
                  borderLeft: i?.sticky === "end" ? "1px solid var(--p-color-gray-200)" : "",
                  borderRight: i?.sticky === "start" ? "1px solid var(--p-color-gray-200)" : "",
                })}
              >
                ${i?.headerName}
              </div>
            `,
          )}
        </div>
        <div
          class=${classMap({
            "table-body": true,
          })}
          part="table-body"
        >
          ${!this.loading && this.currentItems.length > 0
            ? this.currentItems.map(
                i => html`
                  <div
                    class=${classMap({
                      "table-row": true,
                    })}
                    .data-row=${i}
                  >
                    ${this.options?.selectable
                      ? html`
                          <div
                            class=${classMap({
                              "table-cell": true,
                            })}
                            style=${styleMap({
                              width: "auto",
                              alignItems: "center",
                              justifyContent: "center",
                            })}
                          >
                            <p-checkbox
                              ?checked=${this.selectedRows.includes(i)}
                              @click=${(e: Event) => this.handleSelectRow(e, i)}
                            ></p-checkbox>
                          </div>
                        `
                      : ""}
                    ${this.options.columns.map(
                      (k, idx) => html`
                        <div
                          class=${classMap({
                            "table-cell": true,
                            [String(k.classes)]: k.classes || false,
                          })}
                          data-column-index=${idx}
                          style=${styleMap({
                            width: k?.width || "auto",
                            minWidth: k?.minWidth || "auto",
                            maxWidth: k?.maxWidth || "unset",
                            display: k?.hide ? "none" : "flex",
                            alignItems: k?.alignItems || "center",
                            justifyContent: k?.justifyContent || "flex-start",
                            textOverflow: k?.truncate ? "ellipsis" : "unset",
                            whiteSpace: k?.truncate ? "nowrap" : "unset",
                            overflow: k?.truncate ? "hidden" : "unset",
                            position: k?.sticky ? "sticky" : "relative",
                            left: k?.sticky === "start" ? `${k?.stickyOffset || 0}px` : "unset",
                            right: k?.sticky === "end" ? `${k?.stickyOffset || 0}px` : "unset",
                            borderLeft: k?.sticky === "end" ? "1px solid var(--p-color-gray-200)" : "",
                            borderRight: k?.sticky === "start" ? "1px solid var(--p-color-gray-200)" : "",
                          })}
                        >
                          ${k.render ? k.render(i) : k.field ? html` <span>${getNestedValue(i, k.field)}</span> ` : ""}
                        </div>
                      `,
                    )}
                  </div>
                `,
              )
            : ""}
        </div>
      </div>
      ${this.loading
        ? html`
            <div
              class=${classMap({
                "table-loading": true,
              })}
              part="table-loading"
            >
              <p-spinner style="font-size: 30px; --track-width: 4px;"></p-spinner>
            </div>
          `
        : ""}
      ${!this.loading && this.currentItems.length === 0
        ? html`
            <div
              class=${classMap({
                "table-empty": true,
              })}
              part="table-empty"
            >
              <p-icon name="box"></p-icon>
              <span class="table-empty__label">${this.localize.term("empty")}</span>
            </div>
          `
        : ""}
      <div
        class=${classMap({
          "table-footer": true,
          "table-footer--hidden": !!this.options?.hideFooter,
        })}
        part="table-footer"
      >
        <slot name="paginate">
          ${this.options?.paginate
            ? html`
                <p-paginate
                  size="small"
                  variant="default"
                  total=${this.total}
                  page=${this.page}
                  limit=${this.limit}
                  @p-change=${this.handleChangePage}
                  @p-change-limit=${this.handleChangeLimit}
                ></p-paginate>
              `
            : ""}
        </slot>
      </div>
    </div>`;
  }
}
