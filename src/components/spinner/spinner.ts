import PSpinner from "./spinner.component.js";

export * from "./spinner.component.js";
export default PSpinner;

PSpinner.define("p-spinner");

declare global {
  interface HTMLElementTagNameMap {
    "p-spinner": PSpinner;
  }
}
