---
meta:
  title: Menu Label
  description: Menu labels are used to describe a group of menu items.
layout: component
---

```html:preview
<p-menu style="max-width: 200px;">
  <p-menu-label>Fruits</p-menu-label>
  <p-menu-item value="apple">Apple</p-menu-item>
  <p-menu-item value="banana">Banana</p-menu-item>
  <p-menu-item value="orange">Orange</p-menu-item>
  <p-divider></p-divider>
  <p-menu-label>Vegetables</p-menu-label>
  <p-menu-item value="broccoli">Broccoli</p-menu-item>
  <p-menu-item value="carrot">Carrot</p-menu-item>
  <p-menu-item value="zucchini">Zucchini</p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PDivider from '@pure-ui/core/dist/react/divider';
import PMenu from '@pure-ui/core/dist/react/menu';
import PMenuLabel from '@pure-ui/core/dist/react/menu-label';
import PMenuItem from '@pure-ui/core/dist/react/menu-item';

const App = () => (
  <PMenu style={{ maxWidth: '200px' }}>
    <PMenuLabel>Fruits</PMenuLabel>
    <PMenuItem value="apple">Apple</PMenuItem>
    <PMenuItem value="banana">Banana</PMenuItem>
    <PMenuItem value="orange">Orange</PMenuItem>
    <PDivider />
    <PMenuLabel>Vegetables</PMenuLabel>
    <PMenuItem value="broccoli">Broccoli</PMenuItem>
    <PMenuItem value="carrot">Carrot</PMenuItem>
    <PMenuItem value="zucchini">Zucchini</PMenuItem>
  </PMenu>
);
```

{% endraw %}
