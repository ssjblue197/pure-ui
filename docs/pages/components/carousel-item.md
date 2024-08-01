---
meta:
  title: Carousel Item
  description: A carousel item represent a slide within a carousel.
layout: component
---

```html:preview
<p-carousel pagination>
  <p-carousel-item>
    <img
      alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
      src="/assets/examples/carousel/field.jpg"
    />
  </p-carousel-item>
  <p-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
      src="/assets/examples/carousel/valley.jpg"
    />
  </p-carousel-item>
</p-carousel>
```

```jsx:react
import PCarousel from 'pure-uikit/dist/react/carousel';
import PCarouselItem from 'pure-uikit/dist/react/carousel-item';

const App = () => (
  <PCarousel pagination>
    <PCarouselItem>
      <img
        alt="The sun shines on the mountains and trees - Photo by Adam Kool on Unsplash"
        src="/assets/examples/carousel/mountains.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A waterfall in the middle of a forest - Photo by Thomas Kelly on Unsplash"
        src="/assets/examples/carousel/waterfall.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="The sun is setting over a lavender field - Photo by Leonard Cotte on Unsplash"
        src="/assets/examples/carousel/sunset.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A field of grass with the sun setting in the background - Photo by Sapan Patel on Unsplash"
        src="/assets/examples/carousel/field.jpg"
      />
    </PCarouselItem>
    <PCarouselItem>
      <img
        alt="A scenic view of a mountain with clouds rolling in - Photo by V2osk on Unsplash"
        src="/assets/examples/carousel/valley.jpg"
      />
    </PCarouselItem>
  </PCarousel>
);
```

:::tip
Additional demonstrations can be found in the [carousel examples](/components/carousel).
:::
