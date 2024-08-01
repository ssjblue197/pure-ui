import PSplitPanel from "./split-panel.component.js";

export * from "./split-panel.component.js";
export default PSplitPanel;

PSplitPanel.define("p-split-panel");

declare global {
  interface HTMLElementTagNameMap {
    "p-split-panel": PSplitPanel;
  }
}
