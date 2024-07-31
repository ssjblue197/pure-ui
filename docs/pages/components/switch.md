---
meta:
  title: Switch
  description: Switches allow the user to toggle an option on or off.
layout: component
---

```html:preview
<p-switch>Switch</p-switch>
```

```jsx:react
import PSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => <PSwitch>Switch</PSwitch>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html:preview
<p-switch checked>Checked</p-switch>
```

```jsx:react
import PSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => <PSwitch checked>Checked</PSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html:preview
<p-switch disabled>Disabled</p-switch>
```

```jsx:react
import PSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => <PSwitch disabled>Disabled</PSwitch>;
```

### Sizes

Use the `size` attribute to change a switch's size.

```html:preview
<p-switch size="small">Small</p-switch>
<br />
<p-switch size="medium">Medium</p-switch>
<br />
<p-switch size="large">Large</p-switch>
```

```jsx:react
import PSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => (
  <>
    <PSwitch size="small">Small</PSwitch>
    <br />
    <PSwitch size="medium">Medium</PSwitch>
    <br />
    <PSwitch size="large">Large</PSwitch>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<p-switch help-text="What should the user know about the switch?">Label</p-switch>
```

```jsx:react
import PSwitch from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <PSwitch help-text="What should the user know about the switch?">Label</PSwitch>;
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html:preview
<p-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</p-switch>
```

{% raw %}

```jsx:react
import PSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => (
  <PSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

{% endraw %}
