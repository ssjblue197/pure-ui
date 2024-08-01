import PDropdown from "./dropdown.component.js";

export * from "./dropdown.component.js";
export default PDropdown;

PDropdown.define("p-dropdown");

declare global {
  interface HTMLElementTagNameMap {
    "p-dropdown": PDropdown;
  }
}
