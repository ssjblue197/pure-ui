import PTabPanel from "./tab-panel.component.js";

export * from "./tab-panel.component.js";
export default PTabPanel;

PTabPanel.define("p-tab-panel");

declare global {
  interface HTMLElementTagNameMap {
    "p-tab-panel": PTabPanel;
  }
}
