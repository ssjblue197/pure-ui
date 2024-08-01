import PTooltip from "./tooltip.component.js";

export * from "./tooltip.component.js";
export default PTooltip;

PTooltip.define("p-tooltip");

declare global {
  interface HTMLElementTagNameMap {
    "p-tooltip": PTooltip;
  }
}
