import PSelect from "./select.component.js";

export * from "./select.component.js";
export default PSelect;

PSelect.define("p-select");

declare global {
  interface HTMLElementTagNameMap {
    "p-select": PSelect;
  }
}
