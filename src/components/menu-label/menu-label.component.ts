import { html } from "lit";
import componentStyles from "../../styles/component.styles.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./menu-label.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @summary Menu labels are used to describe a group of menu items.
 * @documentation https://pureui.xyz/components/menu-label
 * @status stable
 * @since 1.0
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's base wrapper.
 */
export default class PMenuLabel extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  render() {
    return html` <slot part="base" class="menu-label"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "p-menu-label": PMenuLabel;
  }
}
