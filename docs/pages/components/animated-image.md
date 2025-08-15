---
meta:
  title: Animated Image
  description: A component for displaying animated GIFs and WEBPs that play and pause on interaction.
layout: component
---

```html:preview
<p-animated-image
  src="https://pureui.online/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
></p-animated-image>
```

```jsx:react
import PAnimatedImage from 'pure-uikit/dist/react/animated-image';

const App = () => (
  <PAnimatedImage
    src="https://pureui.online/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
  />
);
```

:::tip
This component uses `<canvas>` to draw freeze frames, so images are subject to [cross-origin restrictions](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).
:::

## Examples

### WEBP Images

Both GIF and WEBP images are supported.

```html:preview
<p-animated-image
  src="https://pureui.online/assets/images/tie.webp"
  alt="Animation of a shoe being tied"
></p-animated-image>
```

```jsx:react
import PAnimatedImage from 'pure-uikit/dist/react/animated-image';

const App = () => (
  <PAnimatedImage src="https://pureui.online/assets/images/tie.webp" alt="Animation of a shoe being tied" />
);
```

### Setting a Width and Height

To set a custom size, apply a width and/or height to the host element.

```html:preview
<p-animated-image
  src="https://pureui.online/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  style="width: 150px; height: 200px;"
>
</p-animated-image>
```

{% raw %}

```jsx:react
import PAnimatedImage from 'pure-uikit/dist/react/animated-image';

const App = () => (
  <PAnimatedImage
    src="https://pureui.online/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
    style={{ width: '150px', height: '200px' }}
  />
);
```

{% endraw %}

### Customizing the Control Box

You can change the appearance and location of the control box by targeting the `control-box` part in your styles.

```html:preview
<p-animated-image
  src="https://pureui.online/assets/images/walk.gif"
  alt="Animation of untied shoes walking on pavement"
  class="animated-image-custom-control-box"
></p-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
</style>
```

```jsx:react
import PAnimatedImage from 'pure-uikit/dist/react/animated-image';

const css = `
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
`;

const App = () => (
  <>
    <PAnimatedImage
      className="animated-image-custom-control-box"
      src="https://pureui.online/assets/images/walk.gif"
      alt="Animation of untied shoes walking on pavement"
    />

    <style>{css}</style>
  </>
);
```
