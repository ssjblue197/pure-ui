import PFormatBytes from "./format-bytes.component.js";

export * from "./format-bytes.component.js";
export default PFormatBytes;

PFormatBytes.define("p-format-bytes");

declare global {
  interface HTMLElementTagNameMap {
    "p-format-bytes": PFormatBytes;
  }
}
