---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<p-dropdown>
  <p-button slot="trigger" caret>Dropdown</p-button>
  <p-menu>
    <p-menu-item>Dropdown Item 1</p-menu-item>
    <p-menu-item>Dropdown Item 2</p-menu-item>
    <p-menu-item>Dropdown Item 3</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item type="checkbox" checked>Checkbox</p-menu-item>
    <p-menu-item disabled>Disabled</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item>
      Prefix
      <p-icon slot="prefix" name="gift"></p-icon>
    </p-menu-item>
    <p-menu-item>
      Suffix Icon
      <p-icon slot="suffix" name="heart"></p-icon>
    </p-menu-item>
  </p-menu>
</p-dropdown>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PIcon from '@shoelace-style/shoelace/dist/react/icon';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PDropdown>
    <PButton slot="trigger" caret>
      Dropdown
    </PButton>
    <PMenu>
      <PMenuItem>Dropdown Item 1</PMenuItem>
      <PMenuItem>Dropdown Item 2</PMenuItem>
      <PMenuItem>Dropdown Item 3</PMenuItem>
      <PDivider />
      <PMenuItem type="checkbox" checked>
        Checkbox
      </PMenuItem>
      <PMenuItem disabled>Disabled</PMenuItem>
      <PDivider />
      <PMenuItem>
        Prefix
        <PIcon slot="prefix" name="gift" />
      </PMenuItem>
      <PMenuItem>
        Suffix Icon
        <PIcon slot="suffix" name="heart" />
      </PMenuItem>
    </PMenu>
  </PDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`p-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <p-dropdown>
    <p-button slot="trigger" caret>Edit</p-button>
    <p-menu>
      <p-menu-item value="cut">Cut</p-menu-item>
      <p-menu-item value="copy">Copy</p-menu-item>
      <p-menu-item value="paste">Paste</p-menu-item>
    </p-menu>
  </p-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('p-dropdown');

  dropdown.addEventListener('p-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <PDropdown>
      <PButton slot="trigger" caret>
        Edit
      </PButton>
      <PMenu onPSelect={handleSelect}>
        <PMenuItem value="cut">Cut</PMenuItem>
        <PMenuItem value="copy">Copy</PMenuItem>
        <PMenuItem value="paste">Paste</PMenuItem>
      </PMenu>
    </PDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <p-dropdown>
    <p-button slot="trigger" caret>Edit</p-button>
    <p-menu>
      <p-menu-item value="cut">Cut</p-menu-item>
      <p-menu-item value="copy">Copy</p-menu-item>
      <p-menu-item value="paste">Paste</p-menu-item>
    </p-menu>
  </p-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('p-menu-item[value="cut"]');
  const copy = container.querySelector('p-menu-item[value="copy"]');
  const paste = container.querySelector('p-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <PDropdown>
      <PButton slot="trigger" caret>
        Edit
      </PButton>
      <PMenu>
        <PMenuItem onClick={handleCut}>Cut</PMenuItem>
        <PMenuItem onClick={handleCopy}>Copy</PMenuItem>
        <PMenuItem onClick={handlePaste}>Paste</PMenuItem>
      </PMenu>
    </PDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<p-dropdown placement="top-start">
  <p-button slot="trigger" caret>Edit</p-button>
  <p-menu>
    <p-menu-item>Cut</p-menu-item>
    <p-menu-item>Copy</p-menu-item>
    <p-menu-item>Paste</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item>Find</p-menu-item>
    <p-menu-item>Replace</p-menu-item>
  </p-menu>
</p-dropdown>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PDropdown placement="top-start">
    <PButton slot="trigger" caret>
      Edit
    </PButton>
    <PMenu>
      <PMenuItem>Cut</PMenuItem>
      <PMenuItem>Copy</PMenuItem>
      <PMenuItem>Paste</PMenuItem>
      <PDivider />
      <PMenuItem>Find</PMenuItem>
      <PMenuItem>Replace</PMenuItem>
    </PMenu>
  </PDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<p-dropdown distance="30">
  <p-button slot="trigger" caret>Edit</p-button>
  <p-menu>
    <p-menu-item>Cut</p-menu-item>
    <p-menu-item>Copy</p-menu-item>
    <p-menu-item>Paste</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item>Find</p-menu-item>
    <p-menu-item>Replace</p-menu-item>
  </p-menu>
</p-dropdown>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PDropdown distance={30}>
    <PButton slot="trigger" caret>
      Edit
    </PButton>
    <PMenu>
      <PMenuItem>Cut</PMenuItem>
      <PMenuItem>Copy</PMenuItem>
      <PMenuItem>Paste</PMenuItem>
      <PDivider />
      <PMenuItem>Find</PMenuItem>
      <PMenuItem>Replace</PMenuItem>
    </PMenu>
  </PDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<p-dropdown skidding="30">
  <p-button slot="trigger" caret>Edit</p-button>
  <p-menu>
    <p-menu-item>Cut</p-menu-item>
    <p-menu-item>Copy</p-menu-item>
    <p-menu-item>Paste</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item>Find</p-menu-item>
    <p-menu-item>Replace</p-menu-item>
  </p-menu>
</p-dropdown>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PDropdown skidding={30}>
    <PButton slot="trigger" caret>
      Edit
    </PButton>
    <PMenu>
      <PMenuItem>Cut</PMenuItem>
      <PMenuItem>Copy</PMenuItem>
      <PMenuItem>Paste</PMenuItem>
      <PDivider />
      <PMenuItem>Find</PMenuItem>
      <PMenuItem>Replace</PMenuItem>
    </PMenu>
  </PDropdown>
);
```

### Submenus

To create a submenu, nest an `<p-menu slot="submenu">` element in a [menu item](/components/menu-item).

```html:preview
<p-dropdown>
  <p-button slot="trigger" caret>Edit</p-button>

  <p-menu style="max-width: 200px;">
    <p-menu-item value="undo">Undo</p-menu-item>
    <p-menu-item value="redo">Redo</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item value="cut">Cut</p-menu-item>
    <p-menu-item value="copy">Copy</p-menu-item>
    <p-menu-item value="paste">Paste</p-menu-item>
    <p-divider></p-divider>
    <p-menu-item>
      Find
      <p-menu slot="submenu">
        <p-menu-item value="find">Find…</p-menu-item>
        <p-menu-item value="find-previous">Find Next</p-menu-item>
        <p-menu-item value="find-next">Find Previous</p-menu-item>
      </p-menu>
    </p-menu-item>
    <p-menu-item>
      Transformations
      <p-menu slot="submenu">
        <p-menu-item value="uppercase">Make uppercase</p-menu-item>
        <p-menu-item value="lowercase">Make lowercase</p-menu-item>
        <p-menu-item value="capitalize">Capitalize</p-menu-item>
      </p-menu>
    </p-menu-item>
  </p-menu>
</p-dropdown>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--p-panel-border-color);
    padding: var(--p-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <PDropdown>
      <PButton slot="trigger" caret>Edit</PButton>

      <PMenu style="max-width: 200px;">
        <PMenuItem value="undo">Undo</PMenuItem>
        <PMenuItem value="redo">Redo</PMenuItem>
        <PDivider />
        <PMenuItem value="cut">Cut</PMenuItem>
        <PMenuItem value="copy">Copy</PMenuItem>
        <PMenuItem value="paste">Paste</PMenuItem>
        <PDivider />
        <PMenuItem>
          Find
          <PMenu slot="submenu">
            <PMenuItem value="find">Find…</PMenuItem>
            <PMenuItem value="find-previous">Find Next</PMenuItem>
            <PMenuItem value="find-next">Find Previous</PMenuItem>
          </PMenu>
        </PMenuItem>
        <PMenuItem>
          Transformations
          <PMenu slot="submenu">
            <PMenuItem value="uppercase">Make uppercase</PMenuItem>
            <PMenuItem value="lowercase">Make lowercase</PMenuItem>
            <PMenuItem value="capitalize">Capitalize</PMenuItem>
          </PMenu>
        </PMenuItem>
      </PMenu>
    </PDropdown>
  </>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenu when possible.
:::

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <p-dropdown>
    <p-button slot="trigger" caret>No Hoist</p-button>
    <p-menu>
      <p-menu-item>Item 1</p-menu-item>
      <p-menu-item>Item 2</p-menu-item>
      <p-menu-item>Item 3</p-menu-item>
    </p-menu>
  </p-dropdown>

  <p-dropdown hoist>
    <p-button slot="trigger" caret>Hoist</p-button>
    <p-menu>
      <p-menu-item>Item 1</p-menu-item>
      <p-menu-item>Item 2</p-menu-item>
      <p-menu-item>Item 3</p-menu-item>
    </p-menu>
  </p-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--p-panel-border-color);
    padding: var(--p-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--p-panel-border-color);
    padding: var(--p-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <PDropdown>
        <PButton slot="trigger" caret>
          No Hoist
        </PButton>
        <PMenu>
          <PMenuItem>Item 1</PMenuItem>
          <PMenuItem>Item 2</PMenuItem>
          <PMenuItem>Item 3</PMenuItem>
        </PMenu>
      </PDropdown>

      <PDropdown hoist>
        <PButton slot="trigger" caret>
          Hoist
        </PButton>
        <PMenu>
          <PMenuItem>Item 1</PMenuItem>
          <PMenuItem>Item 2</PMenuItem>
          <PMenuItem>Item 3</PMenuItem>
        </PMenu>
      </PDropdown>
    </div>

    <style>{css}</style>
  </>
);
```
