import PSmartContainer from "./smart-container.component.js";

export * from "./smart-container.component.js";
export default PSmartContainer;

PSmartContainer.define("p-smart-container");

declare global {
  interface HTMLElementTagNameMap {
    "p-smart-container": PSmartContainer;
  }
}
