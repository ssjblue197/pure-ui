import PAvatar from "./avatar.component.js";

export * from "./avatar.component.js";
export default PAvatar;

PAvatar.define("p-avatar");

declare global {
  interface HTMLElementTagNameMap {
    "p-avatar": PAvatar;
  }
}
