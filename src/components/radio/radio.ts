import PRadio from "./radio.component.js";

export * from "./radio.component.js";
export default PRadio;

PRadio.define("p-radio");

declare global {
  interface HTMLElementTagNameMap {
    "p-radio": PRadio;
  }
}
