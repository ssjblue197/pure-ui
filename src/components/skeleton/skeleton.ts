import PSkeleton from "./skeleton.component.js";

export * from "./skeleton.component.js";
export default PSkeleton;

PSkeleton.define("p-skeleton");

declare global {
  interface HTMLElementTagNameMap {
    "p-skeleton": PSkeleton;
  }
}
