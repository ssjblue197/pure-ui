import { classMap } from "lit/directives/class-map.js";
import { getNestedValue } from "../../utilities/object.js";
import { html } from "lit";
import { LocalizeController } from "../../utilities/localize.js";
import { property, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
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

  static dependencies = {
    "p-paginate": PPaginate,
    "p-tag": PTag,
    "p-icon": PIcon,
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
    reflect: true,
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
  @property({ type: Array, reflect: true }) data: TableRowData[] = [];

  /**
   * Whether the table is currently loading data.
   *
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  /**
   * The current page of items based on the current `pageSize` and `totalItems`.
   *
   * @type {number}
   * @default 1
   */
  @state() currentPage = 1;

  /**
   * The number of items to display per page.
   *
   * @type {number}
   * @default 10
   */
  @state() pageSize = 10;

  /**
   * The total number of items in the table.
   *
   * @type {number}
   * @default 0
   */
  @state() totalItems = 0;

  @property({
    type: Array,
    reflect: true,
  })
  items: TableRowData[] = [];

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
    if (this.totalItems === 0) return [];

    // Calculate the start and end indices for the current page.
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    // Return the current page of items.
    return this.items.slice(start, end);
  }

  @watch("data")
  handleApplyOptionsChange() {
    this.totalItems = this.data.length;
    this.items = this.data;
  }

  connectedCallback() {
    super.connectedCallback();
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
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.tableWrapper.removeEventListener("click", this.handleEventDispatch.bind(this));
  }

  private handleChangePage(e: CustomEvent & { detail: { page: number } }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const page = Number(e.detail.page);
    this.currentPage = page;
    this.emit("p-change");
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
        style="grid-template-columns: repeat(${this.options.columns.length}, auto);"
      >
        <div
          class=${classMap({
            "table-header": true,
            "table-header--hidden": !!this.options?.hideHeader,
          })}
          part="table-header"
        >
          ${this.options.columns.map(
            i => html`
              <div
                class=${classMap({
                  "table-cell": true,
                })}
                style=${styleMap({
                  width: i?.width || "auto",
                  minWidth: i?.minWidth || "auto",
                  maxWidth: i?.maxWidth || "unset",
                  display: i?.hide ? "none" : "flex",
                  alignItems: i?.alignItems || "center",
                  justifyContent: i?.justifyContent || "flex-start",
                  textOverflow: i?.truncate ? "ellipsis" : "unset",
                  whiteSpace: i?.truncate ? "nowrap" : "unset",
                  overflow: i?.truncate ? "hidden" : "unset",
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
                    ${this.options.columns.map(
                      k => html`
                        <div
                          class=${classMap({
                            "table-cell": true,
                            [String(k.classes)]: k.classes || false,
                          })}
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
                  total=${this.totalItems}
                  page=${this.currentPage}
                  pageSize=${this.pageSize}
                  @p-change=${this.handleChangePage}
                ></p-paginate>
              `
            : ""}
        </slot>
      </div>
    </div>`;
  }
}
