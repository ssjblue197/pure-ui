import PMenuItem from "./menu-item.component.js";

export * from "./menu-item.component.js";
export default PMenuItem;

PMenuItem.define("p-menu-item");

declare global {
  interface HTMLElementTagNameMap {
    "p-menu-item": PMenuItem;
  }
}
