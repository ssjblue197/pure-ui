import SlRating from "./rating.component.js";

export * from "./rating.component.js";
export default SlRating;

SlRating.define("p-rating");

declare global {
  interface HTMLElementTagNameMap {
    "p-rating": SlRating;
  }
}
