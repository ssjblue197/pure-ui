import PProgressRing from "./progress-ring.component.js";

export * from "./progress-ring.component.js";
export default PProgressRing;

PProgressRing.define("p-progress-ring");

declare global {
  interface HTMLElementTagNameMap {
    "p-progress-ring": PProgressRing;
  }
}
