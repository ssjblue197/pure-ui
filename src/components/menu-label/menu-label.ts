import PMenuLabel from "./menu-label.component.js";

export * from "./menu-label.component.js";
export default PMenuLabel;

PMenuLabel.define("p-menu-label");

declare global {
  interface HTMLElementTagNameMap {
    "p-menu-label": PMenuLabel;
  }
}
