import PVisuallyHidden from "./visually-hidden.component.js";

export * from "./visually-hidden.component.js";
export default PVisuallyHidden;

PVisuallyHidden.define("p-visually-hidden");

declare global {
  interface HTMLElementTagNameMap {
    "p-visually-hidden": PVisuallyHidden;
  }
}
