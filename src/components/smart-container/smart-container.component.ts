import { html } from "lit";
// import { LocalizeController } from '../../utilities/localize.js';
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
//  * @event p-event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class PSmartContainer extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];

  static dependencies = {
    "p-dropdown": PDropdown,
    "p-icon": PIcon,
    "p-button": PButton,
  };

  // private readonly localize = new LocalizeController(this);

  /** An example attribute. */
  @property() attr = "example";

  @query(".smart-container") smartContainer: HTMLElement;

  @query("smart_container__dropdown-menu") dropdownMenu: HTMLElement;

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
    this.startObserver();
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      const slot = this.shadowRoot?.querySelector("slot:not([name])");
      const dropdownMenu = this.shadowRoot?.querySelector(".smart_container__dropdown-menu");
      const overlapElements: HTMLElement[] = [];

      if (!slot || !entries.length) return;

      const container = entries[0]?.contentRect;
      const elements = (slot as HTMLSlotElement)?.assignedElements({ flatten: true }) as HTMLElement[];

      const lastElement = elements[elements.length - 1];

      // Check existing dropdown elements
      if (dropdownMenu) {
        const dropdownElements = dropdownMenu.children as unknown as HTMLElement[];

        // Move back elements from dropdown to main container if there's space
        Array.from(dropdownElements).forEach((el: HTMLElement) => {
          if (el.offsetWidth <= container.width - (lastElement.offsetLeft + lastElement.offsetWidth)) {
            const cloneNode = el.cloneNode(true) as HTMLElement;
            slot.appendChild(cloneNode); // Move it back to the slot
            console.log("element moved back", slot);
            el.remove();
          }
        });
      }

      // Handle overflow of slotted elements
      elements.forEach((el: HTMLElement) => {
        if (el.offsetLeft + el.offsetWidth > container.width) {
          const cloneNode = el.cloneNode(true) as HTMLElement;
          overlapElements.push(cloneNode);
          el.remove();
        }
      });

      if (overlapElements.length > 0) {
        overlapElements.forEach((el: HTMLElement) => {
          dropdownMenu?.appendChild(el);
        });
      }

      this.requestUpdate();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopObserver();
  }

  render() {
    return html`<div class="smart-container" part="base">
      <slot></slot>
      <p-dropdown>
        <p-button slot="trigger">
          <slot name="icon">
            <p-icon name="funnel"></p-icon>
          </slot>
        </p-button>
        <p-menu part="dropdown-menu" class="smart_container__dropdown-menu"> </p-menu>
      </p-dropdown>
    </div>`;
  }
}
