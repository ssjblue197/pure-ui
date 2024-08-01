import PTree from "./tree.component.js";

export * from "./tree.component.js";
export default PTree;

PTree.define("p-tree");

declare global {
  interface HTMLElementTagNameMap {
    "p-tree": PTree;
  }
}
