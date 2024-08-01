import PCarousel from "./carousel.component.js";

export * from "./carousel.component.js";
export default PCarousel;

PCarousel.define("p-carousel");

declare global {
  interface HTMLElementTagNameMap {
    "p-carousel": PCarousel;
  }
}
