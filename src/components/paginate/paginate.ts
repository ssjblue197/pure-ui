import PPaginate from "./paginate.component.js";

export * from "./paginate.component.js";
export default PPaginate;

PPaginate.define("p-paginate");

declare global {
  interface HTMLElementTagNameMap {
    "p-paginate": PPaginate;
  }
}
