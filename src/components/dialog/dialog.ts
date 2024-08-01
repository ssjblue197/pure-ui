import PDialog from "./dialog.component.js";

export * from "./dialog.component.js";
export default PDialog;

PDialog.define("p-dialog");

declare global {
  interface HTMLElementTagNameMap {
    "p-dialog": PDialog;
  }
}
