import { html } from "lit";
import { property, state } from "lit/decorators.js";
// import { LocalizeController } from "../../utilities/localize.js";
import { classMap } from "lit/directives/class-map.js";
import { getNestedValue } from "../../utilities/object.js";
import { styleMap } from "lit/directives/style-map.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PPaginate from "../paginate/paginate.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./table.styles.js";
import type { CSSResultGroup } from "lit";
import type { TableOptions, TableRowData } from "./table.ts";

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://pureui.xyz/components/table
 * @status experimental
 * @since 2.0
 *
 * @dependency p-example
 *
 * @event p-change - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class PTable extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  static dependencies = {
    "p-paginate": PPaginate,
  };

  // private readonly localize = new LocalizeController(this);

  /**
   * Indicates that the element is disabled.
   *
   * @attribute disabled
   * @type {boolean}
   * @defaultValue false
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * Indicates that the header row of the table should be hidden.
   *
   * @attribute hideHeader
   * @type {boolean}
   * @defaultValue false
   */
  @property({ type: Boolean, reflect: true, attribute: "hide-header" }) hideHeader = false;

  /**
   * Indicates that the footer row of the table should be hidden.
   *
   * @attribute hideFooter
   * @type {boolean}
   * @defaultValue false
   */
  @property({ type: Boolean, reflect: true, attribute: "hide-footer" }) hideFooter = false;

  @property({ type: Boolean, reflect: true, attribute: "local-paginate" }) localPaginate = true;

  @property({ type: Object }) options: TableOptions<TableRowData> = {
    columns: [],
    data: [],
  };

  @state() currentPage = 1;

  @state() pageSize = 10;

  @state() totalItems = 0;

  // Computed property using a getter
  /**
   * Returns the current page of items based on the current page, page size, and total items.
   * If the table is not local paginated, all items are returned.
   *
   * @returns {Array} The current page of items.
   */
  get currentItems() {
    // If the table is not local paginated, return all items.
    if (!this.localPaginate) return this.options.data;

    // If there are no total items, return an empty array.
    if (this.totalItems === 0) return [];

    // Calculate the start and end indices for the current page.
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    // Return the current page of items.
    return this.options.data.slice(start, end);
  }

  @watch("options")
  handleExampleChange() {
    // do something
    this.totalItems = this.options.data.length;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  private handleChangePage(e: CustomEvent & { detail: { page: number } }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const page = Number(e.detail.page);
    this.currentPage = page;
  }

  render() {
    return html` <div
      class=${classMap({
        "table-wrapper": true,
      })}
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
            "table-header--hidden": this.hideHeader,
          })}
        >
          ${this.options.columns.map(
            i => html`
              <div
                class=${classMap({
                  "table-cell": true,
                })}
                style=${styleMap({
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
        >
          ${this.currentItems.map(
            i => html`
              <div
                class=${classMap({
                  "table-row": true,
                })}
              >
                ${this.options.columns.map(
                  k => html`
                    <div
                      class=${classMap({
                        "table-cell": true,
                        [String(k.classes)]: k.classes || false,
                      })}
                      style=${styleMap({
                        width: k?.width || k?.maxWidth || "auto",
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
          )}
        </div>
      </div>
      <div
        class=${classMap({
          "table-footer": true,
          "table-footer--hidden": this.hideFooter,
        })}
      >
        <slot name="paginate">
          ${this.localPaginate
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
