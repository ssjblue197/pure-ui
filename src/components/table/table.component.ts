import { html } from "lit";
import { property } from "lit/decorators.js";
// import { LocalizeController } from "../../utilities/localize.js";
import { classMap } from "lit/directives/class-map.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PPaginate from "../paginate/paginate.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./table.styles.js";
import type { ColumnConfig, TableRowData } from "./table.ts";
import type { CSSResultGroup } from "lit";

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

  @property({
    type: Array,
  })
  columns: ColumnConfig[] = [];

  @property({
    type: Array,
  })
  data: RowData[] = [];

  @watch("columns")
  handleExampleChange() {
    // do something
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div
      class=${classMap({
        table: true,
      })}
      style="grid-template-columns: repeat(${this.columns.length}, 1fr);"
    >
      <div
        class=${classMap({
          "table-header": true,
          "table-header--hidden": this.hideHeader,
        })}
      >
        ${this.columns.map(
          i => html`
            <div
              class=${classMap({
                "table-cell": true,
              })}
            >
              ${i.headerTitle}
            </div>
          `,
        )}
      </div>
      <div
        class=${classMap({
          "table-body": true,
        })}
      >
        <div
          class=${classMap({
            "table-row": true,
          })}
        >
          ${[1, 2, 3, 4, 5].map(
            i => html`
              <div
                class=${classMap({
                  "table-cell": true,
                })}
              >
                ${i}
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
          <p-paginate size="small"></p-paginate>
        </slot>
      </div>
    </div>`;
  }
}
