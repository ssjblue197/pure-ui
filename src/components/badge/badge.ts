import PBadge from "./badge.component.js";

export * from "./badge.component.js";
export default PBadge;

PBadge.define("p-badge");

declare global {
  interface HTMLElementTagNameMap {
    "p-badge": PBadge;
  }
}
