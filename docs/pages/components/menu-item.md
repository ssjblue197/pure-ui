---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
---

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item>Option 1</p-menu-item>
  <p-menu-item>Option 2</p-menu-item>
  <p-menu-item>Option 3</p-menu-item>
  <p-divider></p-divider>
  <p-menu-item type="checkbox" checked>Checkbox</p-menu-item>
  <p-menu-item disabled>Disabled</p-menu-item>
  <p-divider></p-divider>
  <p-menu-item>
    Prefix Icon
    <p-icon slot="prefix" name="gift"></p-icon>
  </p-menu-item>
  <p-menu-item>
    Suffix Icon
    <p-icon slot="suffix" name="heart"></p-icon>
  </p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PDivider from 'pure-uikit/dist/react/divider';
import PIcon from 'pure-uikit/dist/react/icon';
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem>Option 1</PMenuItem>
    <PMenuItem>Option 2</PMenuItem>
    <PMenuItem>Option 3</PMenuItem>
    <PDivider />
    <PMenuItem type="checkbox" checked>
      Checkbox
    </PMenuItem>
    <PMenuItem disabled>Disabled</PMenuItem>
    <PDivider />
    <PMenuItem>
      Prefix Icon
      <PIcon slot="prefix" name="gift" />
    </PMenuItem>
    <PMenuItem>
      Suffix Icon
      <PIcon slot="suffix" name="heart" />
    </PMenuItem>
  </PMenu>
);
```

{% endraw %}

## Examples

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item>
    <p-icon slot="prefix" name="house"></p-icon>
    Home
  </p-menu-item>

  <p-menu-item>
    <p-icon slot="prefix" name="envelope"></p-icon>
    Messages
    <p-badge slot="suffix" variant="primary" pill>12</p-badge>
  </p-menu-item>

  <p-divider></p-divider>

  <p-menu-item>
    <p-icon slot="prefix" name="gear"></p-icon>
    Settings
  </p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PBadge from 'pure-uikit/dist/react/badge';
import PDivider from 'pure-uikit/dist/react/divider';
import PIcon from 'pure-uikit/dist/react/icon';
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem>
      <PIcon slot="prefix" name="house" />
      Home
    </PMenuItem>

    <PMenuItem>
      <PIcon slot="prefix" name="envelope" />
      Messages
      <PBadge slot="suffix" variant="primary" pill>
        12
      </PBadge>
    </PMenuItem>

    <PDivider />

    <PMenuItem>
      <PIcon slot="prefix" name="gear" />
      Settings
    </PMenuItem>
  </PMenu>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item>Option 1</p-menu-item>
  <p-menu-item disabled>Option 2</p-menu-item>
  <p-menu-item>Option 3</p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem>Option 1</PMenuItem>
    <PMenuItem disabled>Option 2</PMenuItem>
    <PMenuItem>Option 3</PMenuItem>
  </PMenu>
);
```

{% endraw %}

### Loading

Use the `loading` attribute to indicate that a menu item is busy. Like a disabled menu item, clicks will be suppressed until the loading state is removed.

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item>Option 1</p-menu-item>
  <p-menu-item loading>Option 2</p-menu-item>
  <p-menu-item>Option 3</p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem>Option 1</PMenuItem>
    <PMenuItem loading>Option 2</PMenuItem>
    <PMenuItem>Option 3</PMenuItem>
  </PMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item type="checkbox">Autosave</p-menu-item>
  <p-menu-item type="checkbox" checked>Check Spelling</p-menu-item>
  <p-menu-item type="checkbox">Word Wrap</p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem type="checkbox">Autosave</PMenuItem>
    <PMenuItem type="checkbox" checked>
      Check Spelling
    </PMenuItem>
    <PMenuItem type="checkbox">Word Wrap</PMenuItem>
  </PMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `p-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
<p-menu class="menu-value" style="max-width: 200px;">
  <p-menu-item value="opt-1">Option 1</p-menu-item>
  <p-menu-item value="opt-2">Option 2</p-menu-item>
  <p-menu-item value="opt-3">Option 3</p-menu-item>
  <p-divider></p-divider>
  <p-menu-item type="checkbox" value="opt-4">Checkbox 4</p-menu-item>
  <p-menu-item type="checkbox" value="opt-5">Checkbox 5</p-menu-item>
  <p-menu-item type="checkbox" value="opt-6">Checkbox 6</p-menu-item>
</p-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('p-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

{% raw %}

```jsx:react
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <PMenu style={{ maxWidth: '200px' }} onPSelect={handleSelect}>
      <PMenuItem value="opt-1">Option 1</PMenuItem>
      <PMenuItem value="opt-2">Option 2</PMenuItem>
      <PMenuItem value="opt-3">Option 3</PMenuItem>
    </PMenu>
  );
};
```

{% endraw %}
