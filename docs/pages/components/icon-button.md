---
meta:
  title: Icon Button
  description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component
---

For a full list of icons that come bundled with Pure UI, refer to the [icon component](/components/icon).

```html:preview
<p-icon-button name="gear" label="Settings"></p-icon-button>
```

```jsx:react
import PIconButton from '@pure-ui/core/dist/react/icon-button';

const App = () => <PIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html:preview
<p-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></p-icon-button>
<p-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></p-icon-button>
<p-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></p-icon-button>
```

{% raw %}

```jsx:react
import PIconButton from '@pure-ui/core/dist/react/icon-button';

const App = () => (
  <>
    <PIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <PIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <PIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html:preview
<div class="icon-button-color">
  <p-icon-button name="type-bold" label="Bold"></p-icon-button>
  <p-icon-button name="type-italic" label="Italic"></p-icon-button>
  <p-icon-button name="type-underline" label="Underline"></p-icon-button>
</div>

<style>
  .icon-button-color p-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color p-icon-button::part(base):hover,
  .icon-button-color p-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color p-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx:react
import PIconButton from '@pure-ui/core/dist/react/icon-button';

const css = `
  .icon-button-color p-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color p-icon-button::part(base):hover,
  .icon-button-color p-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color p-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <PIconButton name="type-bold" label="Bold" />
      <PIconButton name="type-italic" label="Italic" />
      <PIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html:preview
<p-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></p-icon-button>
```

```jsx:react
import PIconButton from '@pure-ui/core/dist/react/icon-button';

const App = () => <PIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html:preview
<p-tooltip content="Settings">
  <p-icon-button name="gear" label="Settings"></p-icon-button>
</p-tooltip>
```

```jsx:react
import PIconButton from '@pure-ui/core/dist/react/icon-button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => (
  <PTooltip content="Settings">
    <PIconButton name="gear" label="Settings" />
  </PTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html:preview
<p-icon-button name="gear" label="Settings" disabled></p-icon-button>
```

```jsx:react
import PIconButton from '@pure-ui/core/dist/react/icon-button';

const App = () => <PIconButton name="gear" label="Settings" disabled />;
```
