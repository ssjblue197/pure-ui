---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-item value="undo">Undo</p-menu-item>
  <p-menu-item value="redo">Redo</p-menu-item>
  <p-divider></p-divider>
  <p-menu-item value="cut">Cut</p-menu-item>
  <p-menu-item value="copy">Copy</p-menu-item>
  <p-menu-item value="paste">Paste</p-menu-item>
  <p-menu-item value="delete">Delete</p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuItem value="undo">Undo</PMenuItem>
    <PMenuItem value="redo">Redo</PMenuItem>
    <PDivider />
    <PMenuItem value="cut">Cut</PMenuItem>
    <PMenuItem value="copy">Copy</PMenuItem>
    <PMenuItem value="paste">Paste</PMenuItem>
    <PMenuItem value="delete">Delete</PMenuItem>
  </PMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::

## Examples

### In Dropdowns

Menus work really well when used inside [dropdowns](/components/dropdown).

```html:preview
<p-dropdown>
  <p-button slot="trigger" caret>Edit</p-button>
  <p-menu>
    <p-menu-item value="cut">Cut</p-menu-item>
    <p-menu-item value="copy">Copy</p-menu-item>
    <p-menu-item value="paste">Paste</p-menu-item>
  </p-menu>
</p-dropdown>
```

```jsx:react
import PButton from '@shoelace-style/shoelace/dist/react/button';
import PDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PDropdown>
    <PButton slot="trigger" caret>Edit</PButton>
    <PMenu>
      <PMenuItem value="cut">Cut</PMenuItem>
      <PMenuItem value="copy">Copy</PMenuItem>
      <PMenuItem value="paste">Paste</PMenuItem>
    </PMenu>
  </PDropdown>
);
```

### Submenus

To create a submenu, nest an `<p-menu slot="submenu">` in any [menu item](/components/menu-item).

```html:preview
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
```

{% raw %}

```jsx:react
import PDivider from '@shoelace-style/shoelace/dist/react/divider';
import PMenu from '@shoelace-style/shoelace/dist/react/menu';
import PMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
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
);
```

:::warning
As a UX best practice, avoid using more than one level of submenus when possible.
:::

{% endraw %}
