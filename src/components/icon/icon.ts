import PIcon from "./icon.component.js";

export * from "./icon.component.js";
export default PIcon;

PIcon.define("p-icon");

declare global {
  interface HTMLElementTagNameMap {
    "p-icon": PIcon;
  }
}
