import PButton from "./button.component.js";

export * from "./button.component.js";
export default PButton;

PButton.define("p-button");

declare global {
  interface HTMLElementTagNameMap {
    "p-button": PButton;
  }
}
