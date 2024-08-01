import PImageComparer from "./image-comparer.component.js";

export * from "./image-comparer.component.js";
export default PImageComparer;

PImageComparer.define("p-image-comparer");

declare global {
  interface HTMLElementTagNameMap {
    "p-image-comparer": PImageComparer;
  }
}
