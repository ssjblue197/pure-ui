import { html } from "lit";
import { property, query, state } from "lit/decorators.js";
import { watch } from "../../internal/watch.js";
import componentStyles from "../../styles/component.styles.js";
import PIcon from "../icon/icon.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import styles from "./animated-image.styles.js";
import type { CSSResultGroup } from "lit";

/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 * @documentation https://pureui.xyz/components/animated-image
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 *
 * @event p-load - Emitted when the image loads successfully.
 * @event p-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<p-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<p-icon>`.
 *
 * @part control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
export default class PAnimatedImage extends PureElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = { "p-icon": PIcon };

  @query(".animated-image__animated") animatedImage: HTMLImageElement;

  @state() frozenFrame: string;
  @state() isLoaded = false;

  /** The path to the image to load. */
  @property() src: string;

  /** A description of the image used by assistive devices. */
  @property() alt: string;

  /** Plays the animation. When this attribute is remove, the animation will pause. */
  @property({ type: Boolean, reflect: true }) play: boolean;

  private handleClick() {
    this.play = !this.play;
  }

  private handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d")!.drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");

    if (!this.isLoaded) {
      this.emit("p-load");
      this.isLoaded = true;
    }
  }

  private handleError() {
    this.emit("p-error");
  }

  @watch("play", { waitUntilFirstUpdate: true })
  handlePlayChange() {
    // When the animation starts playing, reset the src so it plays from the beginning. Since the src is cached, this
    // won't trigger another request.
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }

  @watch("src")
  handleSrcChange() {
    this.isLoaded = false;
  }

  render() {
    return html`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded
          ? html`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><p-icon name="play-fill" library="system"></p-icon></slot>
                <slot name="pause-icon"><p-icon name="pause-fill" library="system"></p-icon></slot>
              </div>
            `
          : ""}
      </div>
    `;
  }
}
