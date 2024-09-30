import { html } from "lit";
import { property, query } from "lit/decorators.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PButton from "../button/button.component.js";
import PDropdown from "../dropdown/dropdown.component.js";
import PIcon from "../icon/icon.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./smart-container.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @summary Short summary of the component's intended use.
 * @documentation https://pureui.xyz/components/smart-container
 * @status stable
 * @since 1.2.17
 *
 * @dependency p-dropdown
 *
 * @slot - The default slot.
 * @slot icon - The icon slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart dropdown-menu - The dropdown menu.
 */
export default class PSmartContainer extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];
  private overlapElements: number[] = [];

  static dependencies = {
    "p-dropdown": PDropdown,
    "p-icon": PIcon,
    "p-button": PButton,
  };

  /** An example attribute. */
  @property() attr = "example";

  @query(".smart-container") smartContainer: HTMLElement;

  @query(".smart_container__dropdown-menu") dropdownMenu: HTMLElement;

  @watch("example")
  handleExampleChange() {
    // do something
  }

  private startObserver() {
    const containerElement = this.shadowRoot?.querySelector(".smart-container");

    // Unwatch previous elements
    this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
    this.observedElements = [];

    // Watch new elements
    this.resizeObserver.observe(containerElement as HTMLElement);
    this.observedElements.push(containerElement as HTMLElement);
  }

  private stopObserver() {
    this.resizeObserver.disconnect();
  }

  protected firstUpdated(): void {
    // do something
    const slot = this.shadowRoot?.querySelector("slot:not([name])");
    const elements = (slot as HTMLSlotElement)?.assignedElements({ flatten: true }) as HTMLElement[];

    elements.forEach((el: HTMLElement) => {
      this.dropdownMenu?.appendChild(el.cloneNode(true));
    });
    this.startObserver();
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      this.overlapElements = [];
      const slot = this.shadowRoot?.querySelector("slot:not([name])");

      if (!slot || !entries.length) return;

      const container = entries[0]?.contentRect;
      const elements = (slot as HTMLSlotElement)?.assignedElements({ flatten: true }) as HTMLElement[];

      elements.forEach((el: HTMLElement) => {
        el.style.display = "block";
      });

      // Handle overflow of slotted elements
      elements.forEach((el: HTMLElement, index: number) => {
        if (el.offsetLeft + el.offsetWidth > container.width) {
          this.overlapElements.push(index);
          el.style.display = "none";
        }
      });

      if (this.overlapElements.length > 0) {
        Array.from(this.dropdownMenu.children).forEach((el: HTMLElement, index: number) => {
          if (this.overlapElements.includes(index)) {
            el.style.display = "block";
          } else {
            el.style.display = "none";
          }
        });
      } else {
        this.dropdownMenu.style.display = "none";
      }

      this.requestUpdate();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopObserver();
  }

  render() {
    return html` <div class="smart-container" part="base">
      <slot></slot>
      <p-dropdown>
        <p-button slot="trigger">
          <slot name="icon">
            <p-icon name="funnel"></p-icon>
          </slot>
        </p-button>
        <p-menu part="dropdown-menu" class="smart_container__dropdown-menu"></p-menu>
      </p-dropdown>
    </div>`;
  }
}
