import POption from "./option.component.js";

export * from "./option.component.js";
export default POption;

POption.define("p-option");

declare global {
  interface HTMLElementTagNameMap {
    "p-option": POption;
  }
}
