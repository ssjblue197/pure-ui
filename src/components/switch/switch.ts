import PSwitch from "./switch.component.js";

export * from "./switch.component.js";
export default PSwitch;

PSwitch.define("p-switch");

declare global {
  interface HTMLElementTagNameMap {
    "p-switch": PSwitch;
  }
}
