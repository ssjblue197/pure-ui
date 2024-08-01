import PAnimation from "./animation.component.js";

export * from "./animation.component.js";
export default PAnimation;

PAnimation.define("p-animation");

declare global {
  interface HTMLElementTagNameMap {
    "p-animation": PAnimation;
  }
}
