import PDetails from "./details.component.js";

export * from "./details.component.js";
export default PDetails;

PDetails.define("p-details");

declare global {
  interface HTMLElementTagNameMap {
    "p-details": PDetails;
  }
}
