import PDivider from "./divider.component.js";

export * from "./divider.component.js";
export default PDivider;

PDivider.define("p-divider");

declare global {
  interface HTMLElementTagNameMap {
    "p-divider": PDivider;
  }
}
