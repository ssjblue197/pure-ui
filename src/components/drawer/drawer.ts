import PDrawer from "./drawer.component.js";

export * from "./drawer.component.js";
export default PDrawer;

PDrawer.define("p-drawer");

declare global {
  interface HTMLElementTagNameMap {
    "p-drawer": PDrawer;
  }
}
