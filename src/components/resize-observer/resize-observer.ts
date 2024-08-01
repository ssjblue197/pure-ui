import PResizeObserver from "./resize-observer.component.js";

export * from "./resize-observer.component.js";
export default PResizeObserver;

PResizeObserver.define("p-resize-observer");

declare global {
  interface HTMLElementTagNameMap {
    "p-resize-observer": PResizeObserver;
  }
}
