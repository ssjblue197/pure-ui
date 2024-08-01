import PTextarea from "./textarea.component.js";

export * from "./textarea.component.js";
export default PTextarea;

PTextarea.define("p-textarea");

declare global {
  interface HTMLElementTagNameMap {
    "p-textarea": PTextarea;
  }
}
