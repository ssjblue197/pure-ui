import PInclude from "./include.component.js";

export * from "./include.component.js";
export default PInclude;

PInclude.define("p-include");

declare global {
  interface HTMLElementTagNameMap {
    "p-include": PInclude;
  }
}
