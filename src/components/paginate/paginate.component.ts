import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import { LocalizeController } from "../../utilities/localize.js";
import { property } from "lit/decorators.js";
import componentStyles from "../../styles/component.styles.js";
import PIcon from "../icon/icon.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./paginate.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @summary Paginate represent actions that are available to the user.
 * @documentation https://pureui.xyz/components/button
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 * @dependency p-button
 *
 * @event p-change - Emitted when the page changed.
 *
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
export default class PPaginate extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = {
    "p-icon": PIcon,
  };

  private readonly localize = new LocalizeController(this);

  @property() title = ""; // make reactive to pass through

  /** The button's theme variant. */
  @property({ reflect: true }) variant: "default" | "primary" | "success" | "neutral" | "warning" | "danger" | "text" =
    "default";

  /** The button's size. */
  @property({ reflect: true }) size: "small" | "medium" | "large" = "medium";

  /** Disables the button. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws a pill-style button with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** The total items to paginate. */
  @property({ type: Number, reflect: true }) total: number = 119;

  /** The current page. */
  @property({ type: Number, reflect: true }) page: number = 1;

  /** The limit items in a page. */
  @property({ type: Number, reflect: true }) limit: number = 12;

  /** The limit visible pages to show. */
  @property({ type: Number, reflect: true, attribute: "max-visible-pages" }) maxVisiblePages: number = 3;

  private getPages() {
    const totalPages = Math.ceil(this.total / this.limit);
    let pages: (number | string)[] = Array.from({ length: totalPages }, (_, i) => i + 1);

    const page = this.page;

    if (pages.length > this.maxVisiblePages) {
      if (page <= Math.floor(this.maxVisiblePages / 2)) {
        pages = [...pages.slice(0, this.maxVisiblePages), "..."];
      } else if (page >= totalPages - Math.floor(this.maxVisiblePages / 2)) {
        pages = ["...", ...pages.slice(totalPages - this.maxVisiblePages)];
      } else {
        pages = [
          "...",
          ...pages.slice(page - Math.ceil(this.maxVisiblePages / 2), page + Math.floor(this.maxVisiblePages / 2)),
          "...",
        ];
      }
    }

    return pages;
  }

  changePage(newPage: number | string) {
    if (newPage === "...") return;
    this.page = Number(newPage);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    this.emit("p-change", {
      detail: { page: this.page },
    });
  }

  prevPage() {
    if (this.page > 1) {
      this.changePage(this.page - 1);
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.total / this.limit);
    if (this.page < totalPages) {
      this.changePage(this.page + 1);
    }
  }
  render() {
    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    const pages = this.getPages();
    return html`
      <div class="paginate">
        <p-button
          size=${this.size}
          variant=${this.variant}
          ?disabled="${this.page === 1 || this.disabled}"
          @click="${this.prevPage}"
          ?circle=${this.pill}
        >
          <slot name="prefix" part="prefix" slot="prefix">
            <p-icon name="arrow-left"></p-icon>
          </slot>
          ${this.localize.term("previousPage")}
        </p-button>
        <div class="paginate__items">
          ${pages.map(
            page => html`
              <p-button
                size=${this.size}
                variant=${this.variant}
                @click="${() => this.changePage(page)}"
                ?disabled="${this.page === page || this.disabled}"
                class=${classMap({
                  page: true,
                  "page--active": Number(this.page) === Number(page) && String(this.page) !== "...",
                })}
                ?circle=${this.pill}
              >
                ${page}
              </p-button>
            `,
          )}
        </div>
        <p-button
          size=${this.size}
          variant=${this.variant}
          ?disabled="${this.page === Math.ceil(this.total / this.limit) || this.disabled}"
          @click="${this.nextPage}"
          ?circle=${this.pill}
        >
          <slot slot="suffix" name="suffix" part="suffix">
            <p-icon name="arrow-right"></p-icon>
          </slot>
          ${this.localize.term("nextPage")}
        </p-button>
      </div>
    `;
  }
}
