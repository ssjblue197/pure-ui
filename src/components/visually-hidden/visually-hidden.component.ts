import { html } from "lit";
import componentStyles from "../../styles/component.styles.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./visually-hidden.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://pureui.xyz/components/visually-hidden
 * @status stable
 * @since 2.0
 *
 * @slot - The content to be visually hidden.
 */
export default class PVisuallyHidden extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  render() {
    return html` <slot></slot> `;
  }
}
