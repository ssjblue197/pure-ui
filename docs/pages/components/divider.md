---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<p-divider></p-divider>
```

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';

const App = () => <PDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<p-divider style="--width: 4px;"></p-divider>
```

{% raw %}

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';

const App = () => <PDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<p-divider style="--color: tomato;"></p-divider>
```

{% raw %}

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';

const App = () => <PDivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <p-divider style="--spacing: 2rem;"></p-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';

const App = () => (
  <>
    Above
    <PDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <p-divider vertical></p-divider>
  Middle
  <p-divider vertical></p-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <PDivider vertical />
    Middle
    <PDivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item value="1">Option 1</p-menu-item>
  <p-menu-item value="2">Option 2</p-menu-item>
  <p-menu-item value="3">Option 3</p-menu-item>
  <p-divider></p-divider>
  <p-menu-item value="4">Option 4</p-menu-item>
  <p-menu-item value="5">Option 5</p-menu-item>
  <p-menu-item value="6">Option 6</p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';
import PMenu from '@pure-ui/core/dist/react/menu';
import PMenuItem from '@pure-ui/core/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem value="1">Option 1</PMenuItem>
    <PMenuItem value="2">Option 2</PMenuItem>
    <PMenuItem value="3">Option 3</PMenuItem>
    <p-divider />
    <PMenuItem value="4">Option 4</PMenuItem>
    <PMenuItem value="5">Option 5</PMenuItem>
    <PMenuItem value="6">Option 6</PMenuItem>
  </PMenu>
);
```

{% endraw %}
