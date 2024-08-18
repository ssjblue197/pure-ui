import PCombobox from "./combobox.component.js";

export * from "./combobox.component.js";
export default PCombobox;

PCombobox.define("p-combobox");

declare global {
  interface HTMLElementTagNameMap {
    "p-combobox": PCombobox;
  }
}
