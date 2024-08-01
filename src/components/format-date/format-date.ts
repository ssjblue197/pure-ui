import PFormatDate from "./format-date.component.js";

export * from "./format-date.component.js";
export default PFormatDate;

PFormatDate.define("p-format-date");

declare global {
  interface HTMLElementTagNameMap {
    "p-format-date": PFormatDate;
  }
}
