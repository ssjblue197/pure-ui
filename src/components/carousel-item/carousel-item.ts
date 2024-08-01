import PCarouselItem from "./carousel-item.component.js";

export * from "./carousel-item.component.js";
export default PCarouselItem;

PCarouselItem.define("p-carousel-item");

declare global {
  interface HTMLElementTagNameMap {
    "p-carousel-item": PCarouselItem;
  }
}
