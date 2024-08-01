import PAnimatedImage from "./animated-image.component.js";

export * from "./animated-image.component.js";
export default PAnimatedImage;

PAnimatedImage.define("p-animated-image");

declare global {
  interface HTMLElementTagNameMap {
    "p-animated-image": PAnimatedImage;
  }
}
