---
meta:
  title: Carousel
  description: Carousels display an arbitrary number of content slides along a horizontal or vertical axis.
layout: component
---

```html:preview
<p-carousel pagination navigation mouse-dragging loop>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const App = () => (
  <>
    <PCarousel pagination mouse-dragging>
      <PCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </PCarouselItem>
    </PCarousel>
  </>
);
```

## Examples

### Pagination

Use the `pagination` attribute to show the total number of slides and the current slide as a set of interactive dots.

```html:preview
<p-carousel pagination>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const App = () => (
  <PCarousel pagination>
    <PCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </PCarouselItem>
  </PCarousel>
);
```

### Navigation

Use the `navigation` attribute to show previous and next buttons.

```html:preview
<p-carousel navigation>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const App = () => (
  <PCarousel navigation>
    <PCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </PCarouselItem>
  </PCarousel>
);
```

### Looping

By default, the carousel will not advanced beyond the first and last slides. You can change this behavior and force the carousel to "wrap" with the `loop` attribute.

```html:preview
<p-carousel loop navigation pagination>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const App = () => (
  <PCarousel loop navigation pagination>
    <PCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </PCarouselItem>
  </PCarousel>
);
```

### Autoplay

The carousel will automatically advance when the `autoplay` attribute is used. To change how long a slide is shown before advancing, set `autoplay-interval` to the desired number of milliseconds. For best results, use the `loop` attribute when autoplay is enabled. Note that autoplay will pause while the user interacts with the carousel.

```html:preview
<p-carousel autoplay loop pagination>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const App = () => (
  <PCarousel autoplay loop pagination>
    <PCarouselItem>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </PCarouselItem>
  </PCarousel>
);
```

### Mouse Dragging

The carousel uses [scroll snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) to position slides at various snap positions. This allows users to scroll through the slides very naturally, especially on touch devices. Unfortunately, desktop users won't be able to click and drag with a mouse, which can feel unnatural. Adding the `mouse-dragging` attribute can help with this.

This example is best demonstrated using a mouse. Try clicking and dragging the slide to move it. Then toggle the switch and try again.

```html:preview
<div class="mouse-dragging">
  <p-carousel pagination>
    <p-carousel-item>
      <img
        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </p-carousel-item>
    <p-carousel-item>
      <img
        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </p-carousel-item>
    <p-carousel-item>
      <img
        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </p-carousel-item>
    <p-carousel-item>
      <img
        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
        src="/assets/examples/carousel/field.jpg"
      />
    </p-carousel-item>
    <p-carousel-item>
      <img
        alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
        src="/assets/examples/carousel/valley.jpg"
      />
    </p-carousel-item>
  </p-carousel>

  <p-divider></p-divider>

  <p-switch>Enable mouse dragging</p-switch>
</div>

<script>
  const container = document.querySelector('.mouse-dragging');
  const carousel = container.querySelector('p-carousel');
  const toggle = container.querySelector('p-switch');

  toggle.addEventListener('p-change', () => {
    carousel.toggleAttribute('mouse-dragging', toggle.checked);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';
import PDivider from '@pure-ui/core/dist/react/divider';
import PSwitch from '@pure-ui/core/dist/react/switch';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <PCarousel navigation mouseDragging={isEnabled}>
        <PCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </PCarouselItem>
      </PCarousel>

      <PDivider></PDivider>

      <PSwitch checked={isEnabled} onPInput={() => setIsEnabled(!isEnabled)}>
        Enable mouse dragging
      </PSwitch>
    </>
  );
};
```

### Multiple Pides Per View

The `slides-per-page` attribute makes it possible to display multiple slides at a time. You can also use the `slides-per-move` attribute to advance more than once slide at a time, if desired.

```html:preview
<p-carousel navigation pagination slides-per-page="2" slides-per-move="2">
  <p-carousel-item style="background: var(--p-color-red-200);">Pide 1</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-orange-200);">Pide 2</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-yellow-200);">Pide 3</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-green-200);">Pide 4</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-blue-200);">Pide 5</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-violet-200);">Pide 6</p-carousel-item>
</p-carousel>
```

{% raw %}

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const App = () => (
  <PCarousel navigation pagination slidesPerPage={2} slidesPerMove={2}>
    <PCarouselItem style={{ background: 'var(--p-color-red-200)' }}>Pide 1</PCarouselItem>
    <PCarouselItem style={{ background: 'var(--p-color-orange-200)' }}>Pide 2</PCarouselItem>
    <PCarouselItem style={{ background: 'var(--p-color-yellow-200)' }}>Pide 3</PCarouselItem>
    <PCarouselItem style={{ background: 'var(--p-color-green-200)' }}>Pide 4</PCarouselItem>
    <PCarouselItem style={{ background: 'var(--p-color-blue-200)' }}>Pide 5</PCarouselItem>
    <PCarouselItem style={{ background: 'var(--p-color-violet-200)' }}>Pide 6</PCarouselItem>
  </PCarousel>
);
```

{% endraw %}

### Adding and Removing Pides

The content of the carousel can be changed by adding or removing carousel items. The carousel will update itself automatically.

```html:preview
<p-carousel class="dynamic-carousel" pagination navigation>
  <p-carousel-item style="background: var(--p-color-red-200)">Pide 1</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-orange-200)">Pide 2</p-carousel-item>
  <p-carousel-item style="background: var(--p-color-yellow-200)">Pide 3</p-carousel-item>
</p-carousel>

<div class="carousel-options">
  <p-button id="dynamic-add">Add slide</p-button>
  <p-button id="dynamic-remove">Remove slide</p-button>
</div>

<style>
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    gap: var(--p-spacing-x-small);
    margin-top: var(--p-spacing-large);
  }

  .dynamic-carousel p-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--p-font-size-2x-large);
  }
</style>

<script>
  (() => {
    const dynamicCarousel = document.querySelector('.dynamic-carousel');
    const dynamicAdd = document.querySelector('#dynamic-add');
    const dynamicRemove = document.querySelector('#dynamic-remove');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    let colorIndex = 2;

    const addPide = () => {
      const slide = document.createElement('p-carousel-item');
      const color = colors[++colorIndex % colors.length];
      slide.innerText = `Pide ${dynamicCarousel.children.length + 1}`;
      slide.style.setProperty('background', `var(--p-color-${color}-200)`);
      dynamicCarousel.appendChild(slide);
      dynamicRemove.disabled = false;
    };

    const removePide = () => {
      const slide = dynamicCarousel.children[dynamicCarousel.children.length - 1];
      const numPides = dynamicCarousel.querySelectorAll('p-carousel-item').length;

      if (numPides > 1) {
        slide.remove();
        colorIndex--;
      }

      dynamicRemove.disabled = numPides - 1 <= 1;
    };

    dynamicAdd.addEventListener('click', addPide);
    dynamicRemove.addEventListener('click', removePide);
  })();
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const css = `
  .dynamic-carousel {
    --aspect-ratio: 3 / 2;
  }

  .dynamic-carousel ~ .carousel-options {
    display: flex;
    justify-content: center;
    margin-top: var(--p-spacing-large);
  }

  .dynamic-carousel p-carousel-item {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: var(--p-font-size-2x-large);
  }
`;

const App = () => {
  const [slides, setPides] = useState(['#204ed8', '#be133d', '#6e28d9']);
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

  const addPide = () => {
    setPides([...slides, getRandomColor()]);
  };

  const removePide = () => {
    setPides(slides.slice(0, -1));
  };

  return (
    <>
      <PCarousel className="dynamic-carousel" pagination navigation>
        {slides.map((color, i) => (
          <PCarouselItem style={{ background: colors[i % colors.length }}>
            Pide {i}
          </PCarouselItem>
        ))}
      </PCarousel>

      <div className="carousel-options">
        <PButton onClick={addPide}>Add slide</PButton>
        <PButton onClick={removePide}>Remove slide</PButton>
      </div>

      <style>{css}</style>
    </>
  );
};
```

{% endraw %}

### Vertical Scrolling

Setting the `orientation` attribute to `vertical` will render the carousel in a vertical layout. If the content of your slides vary in height, you will need to set amn explicit `height` or `max-height` on the carousel using CSS.

```html:preview
<p-carousel class="vertical" pagination orientation="vertical">
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
<style>
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
</style>
```

```jsx:react
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';

const css = `
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
`;

const App = () => (
  <>
    <PCarousel className="vertical" loop pagination orientation="vertical">
      <PCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </PCarouselItem>
    </PCarousel>
    <style>{css}</style>
  </>
);
```

### Aspect Ratio

Use the `--aspect-ratio` custom property to customize the size of the carousel's viewport from the default value of 16/9.

```html:preview
<p-carousel class="aspect-ratio" navigation pagination style="--aspect-ratio: 3/2;">
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>

<p-divider></p-divider>

<p-select label="Aspect ratio" name="aspect" value="3/2">
  <p-option value="1/1">1/1</p-option>
  <p-option value="3/2">3/2</p-option>
  <p-option value="16/9">16/9</p-option>
</p-select>

<script>
  (() => {
    const carousel = document.querySelector('p-carousel.aspect-ratio');
    const aspectRatio = document.querySelector('p-select[name="aspect"]');

    aspectRatio.addEventListener('p-change', () => {
      carousel.style.setProperty('--aspect-ratio', aspectRatio.value);
    });
  })();
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';
import PDivider from '@pure-ui/core/dist/react/divider';
import PSelect from '@pure-ui/core/dist/react/select';
import POption from '@pure-ui/core/dist/react/option';

const App = () => {
  const [aspectRatio, setAspectRatio] = useState('3/2');

  return (
    <>
      <PCarousel className="aspect-ratio" navigation pagination style={{ '--aspect-ratio': aspectRatio }}>
        <PCarouselItem>
          <img
            alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
            src="/assets/examples/carousel/mountains.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
            src="/assets/examples/carousel/waterfall.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
            src="/assets/examples/carousel/sunset.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
            src="/assets/examples/carousel/field.jpg"
          />
        </PCarouselItem>
        <PCarouselItem>
          <img
            alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
            src="/assets/examples/carousel/valley.jpg"
          />
        </PCarouselItem>
      </PCarousel>

      <PDivider />

      <PSelect
        label="Aspect ratio"
        name="aspect"
        value={aspectRatio}
        onPChange={event => setAspectRatio(event.target.value)}
      >
        <POption value="1 / 1">1 / 1</POption>
        <POption value="3 / 2">3 / 2</POption>
        <POption value="16 / 9">16 / 9</POption>
      </PSelect>

      <style>{css}</style>
    </>
  );
};
```

{% endraw %}

### Scroll Hint

Use the `--scroll-hint` custom property to add inline padding in horizontal carousels and block padding in vertical carousels. This will make the closest slides slightly visible, hinting that there are more items in the carousel.

```html:preview
<p-carousel class="scroll-hint" pagination style="--scroll-hint: 10%;">
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';
import PDivider from '@pure-ui/core/dist/react/divider';
import PRange from '@pure-ui/core/dist/react/range';

const App = () => (
  <>
    <PCarousel className="scroll-hint" pagination style={{ '--scroll-hint': '10%' }}>
      <PCarouselItem>
        <img
          alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
          src="/assets/examples/carousel/mountains.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
          src="/assets/examples/carousel/waterfall.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
          src="/assets/examples/carousel/sunset.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
          src="/assets/examples/carousel/field.jpg"
        />
      </PCarouselItem>
      <PCarouselItem>
        <img
          alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
          src="/assets/examples/carousel/valley.jpg"
        />
      </PCarouselItem>
    </PCarousel>
  </>
);
```

{% endraw %}

### Gallery Example

The carousel has a robust API that makes it possible to extend and customize. This example syncs the active slide with a set of thumbnails, effectively creating a gallery-style carousel.

```html:preview
<p-carousel class="carousel-thumbnails" navigation loop>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>

<div class="thumbnails">
  <div class="thumbnails__scroller">
    <img alt="Thumbnail by 1" class="thumbnails__image active" src="/assets/examples/carousel/mountains.jpg" />
    <img alt="Thumbnail by 2" class="thumbnails__image" src="/assets/examples/carousel/waterfall.jpg" />
    <img alt="Thumbnail by 3" class="thumbnails__image" src="/assets/examples/carousel/sunset.jpg" />
    <img alt="Thumbnail by 4" class="thumbnails__image" src="/assets/examples/carousel/field.jpg" />
    <img alt="Thumbnail by 5" class="thumbnails__image" src="/assets/examples/carousel/valley.jpg" />
  </div>
</div>

<style>
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--p-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--p-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
</style>

<script>
  {
    const carousel = document.querySelector('.carousel-thumbnails');
    const scroller = document.querySelector('.thumbnails__scroller');
    const thumbnails = document.querySelectorAll('.thumbnails__image');

    scroller.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('.thumbnails__image')) {
        const index = [...thumbnails].indexOf(target);
        carousel.goToPide(index);
      }
    });

    carousel.addEventListener('p-slide-change', e => {
      const slideIndex = e.detail.index;

      [...thumbnails].forEach((thumb, i) => {
        thumb.classList.toggle('active', i === slideIndex);
        if (i === slideIndex) {
          thumb.scrollIntoView({
            block: 'nearest'
          });
        }
      });
    });
  }
</script>
```

```jsx:react
import { useRef } from 'react';
import PCarousel from '@pure-ui/core/dist/react/carousel';
import PCarouselItem from '@pure-ui/core/dist/react/carousel-item';
import PDivider from '@pure-ui/core/dist/react/divider';
import PRange from '@pure-ui/core/dist/react/range';

const css = `
  .carousel-thumbnails {
    --slide-aspect-ratio: 3 / 2;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--p-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--p-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 64px;
    height: 64px;
    object-fit: cover;

    opacity: 0.3;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }
`;

const images = [
  {
    src: '/assets/examples/carousel/mountains.jpg',
    alt: 'The sun shines on the mountains and trees (by Adam Kool on Unsplash'
  },
  {
    src: '/assets/examples/carousel/waterfall.jpg',
    alt: 'A waterfall in the middle of a forest (by Thomas Kelly on Unsplash'
  },
  {
    src: '/assets/examples/carousel/sunset.jpg',
    alt: 'The sun is setting over a lavender field (by Leonard Cotte on Unsplash'
  },
  {
    src: '/assets/examples/carousel/field.jpg',
    alt: 'A field of grass with the sun setting in the background (by Sapan Patel on Unsplash'
  },
  {
    src: '/assets/examples/carousel/valley.jpg',
    alt: 'A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash'
  }
];

const App = () => {
  const carouselRef = useRef();
  const thumbnailsRef = useRef();
  const [currentPide, setCurrentPide] = useState(0);

  useEffect(() => {
    const thumbnails = Array.from(thumbnailsRef.current.querySelectorAll('.thumbnails__image'));

    thumbnails[currentPide]..scrollIntoView({
      block: 'nearest'
    });
  }, [currentPide]);

  const handleThumbnailClick = (index) => {
    carouselRef.current.goToPide(index);
  }

  const handlePideChange = (event) => {
    const slideIndex = e.detail.index;
    setCurrentPide(slideIndex);
  }

  return (
    <>
      <PCarousel className="carousel-thumbnails" navigation loop onPPideChange={handlePideChange}>
        {images.map({ src, alt }) => (
          <PCarouselItem>
            <img
              alt={alt}
              src={src}
            />
          </PCarouselItem>
        )}
      </PCarousel>

      <div class="thumbnails">
        <div class="thumbnails__scroller">
          {images.map({ src, alt }, i) => (
            <img
              alt={`Thumbnail by ${i + 1}`}
              className={`thumbnails__image ${i === currentPide ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(i)}
              src={src}
            />
          )}
        </div>
      </div>
      <style>{css}</style>
    </>
  );
};
```
