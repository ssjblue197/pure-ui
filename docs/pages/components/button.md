---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<p-button>Button</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => <PButton>Button</PButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html:preview
<p-button variant="default">Default</p-button>
<p-button variant="primary">Primary</p-button>
<p-button variant="success">Success</p-button>
<p-button variant="neutral">Neutral</p-button>
<p-button variant="warning">Warning</p-button>
<p-button variant="danger">Danger</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton variant="default">Default</PButton>
    <PButton variant="primary">Primary</PButton>
    <PButton variant="success">Success</PButton>
    <PButton variant="neutral">Neutral</PButton>
    <PButton variant="warning">Warning</PButton>
    <PButton variant="danger">Danger</PButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html:preview
<p-button size="small">Small</p-button>
<p-button size="medium">Medium</p-button>
<p-button size="large">Large</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton size="small">Small</PButton>
    <PButton size="medium">Medium</PButton>
    <PButton size="large">Large</PButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html:preview
<p-button variant="default" outline>Default</p-button>
<p-button variant="primary" outline>Primary</p-button>
<p-button variant="success" outline>Success</p-button>
<p-button variant="neutral" outline>Neutral</p-button>
<p-button variant="warning" outline>Warning</p-button>
<p-button variant="danger" outline>Danger</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton variant="default" outline>
      Default
    </PButton>
    <PButton variant="primary" outline>
      Primary
    </PButton>
    <PButton variant="success" outline>
      Success
    </PButton>
    <PButton variant="neutral" outline>
      Neutral
    </PButton>
    <PButton variant="warning" outline>
      Warning
    </PButton>
    <PButton variant="danger" outline>
      Danger
    </PButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html:preview
<p-button size="small" pill>Small</p-button>
<p-button size="medium" pill>Medium</p-button>
<p-button size="large" pill>Large</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton size="small" pill>
      Small
    </PButton>
    <PButton size="medium" pill>
      Medium
    </PButton>
    <PButton size="large" pill>
      Large
    </PButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<p-icon>` in the default slot.

```html:preview
<p-button variant="default" size="small" circle>
  <p-icon name="gear" label="Settings"></p-icon>
</p-button>

<p-button variant="default" size="medium" circle>
  <p-icon name="gear" label="Settings"></p-icon>
</p-button>

<p-button variant="default" size="large" circle>
  <p-icon name="gear" label="Settings"></p-icon>
</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <>
    <PButton variant="default" size="small" circle>
      <PIcon name="gear" />
    </PButton>
    <PButton variant="default" size="medium" circle>
      <PIcon name="gear" />
    </PButton>
    <PButton variant="default" size="large" circle>
      <PIcon name="gear" />
    </PButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html:preview
<p-button variant="text" size="small">Text</p-button>
<p-button variant="text" size="medium">Text</p-button>
<p-button variant="text" size="large">Text</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton variant="text" size="small">
      Text
    </PButton>
    <PButton variant="text" size="medium">
      Text
    </PButton>
    <PButton variant="text" size="large">
      Text
    </PButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

```html:preview
<p-button href="https://example.com/">Link</p-button>
<p-button href="https://example.com/" target="_blank">New Window</p-button>
<p-button href="/assets/images/wordmark.svg" download="pure-ui.svg">Download</p-button>
<p-button href="https://example.com/" disabled>Disabled</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton href="https://example.com/">Link</PButton>
    <PButton href="https://example.com/" target="_blank">
      New Window
    </PButton>
    <PButton href="/assets/images/wordmark.svg" download="pure-ui.svg">
      Download
    </PButton>
    <PButton href="https://example.com/" disabled>
      Disabled
    </PButton>
  </>
);
```

:::tip
When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).
:::

### Setting a Custom Width

As expected, buttons can be given a custom width by passing inline styles to the component (or using a class). This is useful for making buttons span the full width of their container on smaller screens.

```html:preview
<p-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</p-button>
<p-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</p-button>
<p-button variant="default" size="large" style="width: 100%;">Large</p-button>
```

{% raw %}

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </PButton>
    <PButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </PButton>
    <PButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </PButton>
  </>
);
```

{% endraw %}

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<p-button variant="default" size="small">
  <p-icon slot="prefix" name="gear"></p-icon>
  Settings
</p-button>

<p-button variant="default" size="small">
  <p-icon slot="suffix" name="arrow-counterclockwise"></p-icon>
  Refresh
</p-button>

<p-button variant="default" size="small">
  <p-icon slot="prefix" name="link-45deg"></p-icon>
  <p-icon slot="suffix" name="box-arrow-up-right"></p-icon>
  Open
</p-button>

<br /><br />

<p-button variant="default">
  <p-icon slot="prefix" name="gear"></p-icon>
  Settings
</p-button>

<p-button variant="default">
  <p-icon slot="suffix" name="arrow-counterclockwise"></p-icon>
  Refresh
</p-button>

<p-button variant="default">
  <p-icon slot="prefix" name="link-45deg"></p-icon>
  <p-icon slot="suffix" name="box-arrow-up-right"></p-icon>
  Open
</p-button>

<br /><br />

<p-button variant="default" size="large">
  <p-icon slot="prefix" name="gear"></p-icon>
  Settings
</p-button>

<p-button variant="default" size="large">
  <p-icon slot="suffix" name="arrow-counterclockwise"></p-icon>
  Refresh
</p-button>

<p-button variant="default" size="large">
  <p-icon slot="prefix" name="link-45deg"></p-icon>
  <p-icon slot="suffix" name="box-arrow-up-right"></p-icon>
  Open
</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <>
    <PButton variant="default" size="small">
      <PIcon slot="prefix" name="gear"></PIcon>
      Settings
    </PButton>

    <PButton variant="default" size="small">
      <PIcon slot="suffix" name="arrow-counterclockwise"></PIcon>
      Refresh
    </PButton>

    <PButton variant="default" size="small">
      <PIcon slot="prefix" name="link-45deg"></PIcon>
      <PIcon slot="suffix" name="box-arrow-up-right"></PIcon>
      Open
    </PButton>

    <br />
    <br />

    <PButton variant="default">
      <PIcon slot="prefix" name="gear"></PIcon>
      Settings
    </PButton>

    <PButton variant="default">
      <PIcon slot="suffix" name="arrow-counterclockwise"></PIcon>
      Refresh
    </PButton>

    <PButton variant="default">
      <PIcon slot="prefix" name="link-45deg"></PIcon>
      <PIcon slot="suffix" name="box-arrow-up-right"></PIcon>
      Open
    </PButton>

    <br />
    <br />

    <PButton variant="default" size="large">
      <PIcon slot="prefix" name="gear"></PIcon>
      Settings
    </PButton>

    <PButton variant="default" size="large">
      <PIcon slot="suffix" name="arrow-counterclockwise"></PIcon>
      Refresh
    </PButton>

    <PButton variant="default" size="large">
      <PIcon slot="prefix" name="link-45deg"></PIcon>
      <PIcon slot="suffix" name="box-arrow-up-right"></PIcon>
      Open
    </PButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html:preview
<p-button size="small" caret>Small</p-button>
<p-button size="medium" caret>Medium</p-button>
<p-button size="large" caret>Large</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton size="small" caret>
      Small
    </PButton>
    <PButton size="medium" caret>
      Medium
    </PButton>
    <PButton size="large" caret>
      Large
    </PButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

```html:preview
<p-button variant="default" loading>Default</p-button>
<p-button variant="primary" loading>Primary</p-button>
<p-button variant="success" loading>Success</p-button>
<p-button variant="neutral" loading>Neutral</p-button>
<p-button variant="warning" loading>Warning</p-button>
<p-button variant="danger" loading>Danger</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton variant="default" loading>
      Default
    </PButton>
    <PButton variant="primary" loading>
      Primary
    </PButton>
    <PButton variant="success" loading>
      Success
    </PButton>
    <PButton variant="neutral" loading>
      Neutral
    </PButton>
    <PButton variant="warning" loading>
      Warning
    </PButton>
    <PButton variant="danger" loading>
      Danger
    </PButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button.

```html:preview
<p-button variant="default" disabled>Default</p-button>
<p-button variant="primary" disabled>Primary</p-button>
<p-button variant="success" disabled>Success</p-button>
<p-button variant="neutral" disabled>Neutral</p-button>
<p-button variant="warning" disabled>Warning</p-button>
<p-button variant="danger" disabled>Danger</p-button>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';

const App = () => (
  <>
    <PButton variant="default" disabled>
      Default
    </PButton>

    <PButton variant="primary" disabled>
      Primary
    </PButton>

    <PButton variant="success" disabled>
      Success
    </PButton>

    <PButton variant="neutral" disabled>
      Neutral
    </PButton>

    <PButton variant="warning" disabled>
      Warning
    </PButton>

    <PButton variant="danger" disabled>
      Danger
    </PButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `p-button[variant="primary"]`).

```html:preview
<p-button class="pink">Pink Button</p-button>

<style>
  p-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --p-input-height-medium: 48px;
    --p-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--p-transition-medium) transform ease, var(--p-transition-medium) border ease;
  }

  p-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  p-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  p-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
