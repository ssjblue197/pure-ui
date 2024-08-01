import PFormatNumber from "./format-number.component.js";

export * from "./format-number.component.js";
export default PFormatNumber;

PFormatNumber.define("p-format-number");

declare global {
  interface HTMLElementTagNameMap {
    "p-format-number": PFormatNumber;
  }
}
