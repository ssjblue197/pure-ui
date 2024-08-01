---
meta:
  title: Radio Button
  description: Radios buttons allow the user to select a single option from a group using a button-like control.
layout: component
---

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html:preview
<p-radio-group label="Select an option" name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2">Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>
```

```jsx:react
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2">Option 2</PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<p-radio-group label="Select an option" name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2">Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>
```

```jsx:react
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2">Option 2</PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html:preview
<p-radio-group label="Select an option" name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2" disabled>Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>
```

```jsx:react
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2" disabled>
      Option 2
    </PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html:preview
<p-radio-group size="small" label="Select an option" name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2">Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>

<br />

<p-radio-group size="medium" label="Select an option" name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2">Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>

<br />

<p-radio-group size="large" label="Select an option" name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2">Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>
```

```jsx:react
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup size="small" label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2">Option 2</PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>

  <br />

  <PRadioGroup size="medium" label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2">Option 2</PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>

  <br />

  <PRadioGroup size="large" label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2">Option 2</PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html:preview
<p-radio-group size="small" label="Select an option" name="a" value="1">
  <p-radio-button pill value="1">Option 1</p-radio-button>
  <p-radio-button pill value="2">Option 2</p-radio-button>
  <p-radio-button pill value="3">Option 3</p-radio-button>
</p-radio-group>

<br />

<p-radio-group size="medium" label="Select an option" name="a" value="1">
  <p-radio-button pill value="1">Option 1</p-radio-button>
  <p-radio-button pill value="2">Option 2</p-radio-button>
  <p-radio-button pill value="3">Option 3</p-radio-button>
</p-radio-group>

<br />

<p-radio-group size="large" label="Select an option" name="a" value="1">
  <p-radio-button pill value="1">Option 1</p-radio-button>
  <p-radio-button pill value="2">Option 2</p-radio-button>
  <p-radio-button pill value="3">Option 3</p-radio-button>
</p-radio-group>
```

```jsx:react
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup size="small" label="Select an option" name="a" value="1">
    <PRadioButton pill value="1">Option 1</PRadioButton>
    <PRadioButton pill value="2">Option 2</PRadioButton>
    <PRadioButton pill value="3">Option 3</PRadioButton>
  </PRadioGroup>

  <br />

  <PRadioGroup size="medium" label="Select an option" name="a" value="1">
    <PRadioButton pill value="1">Option 1</PRadioButton>
    <PRadioButton pill value="2">Option 2</PRadioButton>
    <PRadioButton pill value="3">Option 3</PRadioButton>
  </PRadioGroup>

  <br />

  <PRadioGroup size="large" label="Select an option" name="a" value="1">
    <PRadioButton pill value="1">Option 1</PRadioButton>
    <PRadioButton pill value="2">Option 2</PRadioButton>
    <PRadioButton pill value="3">Option 3</PRadioButton>
  </PRadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<p-radio-group label="Select an option" name="a" value="1">
  <p-radio-button value="1">
    <p-icon slot="prefix" name="archive"></p-icon>
    Option 1
  </p-radio-button>

  <p-radio-button value="2">
    <p-icon slot="suffix" name="bag"></p-icon>
    Option 2
  </p-radio-button>

  <p-radio-button value="3">
    <p-icon slot="prefix" name="gift"></p-icon>
    <p-icon slot="suffix" name="cart"></p-icon>
    Option 3
  </p-radio-button>
</p-radio-group>
```

```jsx:react
import PIcon from 'pure-uikit/dist/react/icon';
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadioButton value="1">
      <PIcon slot="prefix" name="archive" />
      Option 1
    </PRadioButton>

    <PRadioButton value="2">
      <PIcon slot="suffix" name="bag" />
      Option 2
    </PRadioButton>

    <PRadioButton value="3">
      <PIcon slot="prefix" name="gift" />
      <PIcon slot="suffix" name="cart" />
      Option 3
    </PRadioButton>
  </PRadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html:preview
<p-radio-group label="Select an option" name="a" value="neutral">
  <p-radio-button value="angry">
    <p-icon name="emoji-angry" label="Angry"></p-icon>
  </p-radio-button>

  <p-radio-button value="sad">
    <p-icon name="emoji-frown" label="Sad"></p-icon>
  </p-radio-button>

  <p-radio-button value="neutral">
    <p-icon name="emoji-neutral" label="Neutral"></p-icon>
  </p-radio-button>

  <p-radio-button value="happy">
    <p-icon name="emoji-smile" label="Happy"></p-icon>
  </p-radio-button>

  <p-radio-button value="laughing">
    <p-icon name="emoji-laughing" label="Laughing"></p-icon>
  </p-radio-button>
</p-radio-group>
```

```jsx:react
import PIcon from 'pure-uikit/dist/react/icon';
import PRadioButton from 'pure-uikit/dist/react/radio-button';
import PRadioGroup from 'pure-uikit/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="neutral">
    <PRadioButton value="angry">
      <PIcon name="emoji-angry" label="Angry" />
    </PRadioButton>

    <PRadioButton value="sad">
      <PIcon name="emoji-frown" label="Sad" />
    </PRadioButton>

    <PRadioButton value="neutral">
      <PIcon name="emoji-neutral" label="Neutral" />
    </PRadioButton>

    <PRadioButton value="happy">
      <PIcon name="emoji-smile" label="Happy" />
    </PRadioButton>

    <PRadioButton value="laughing">
      <PIcon name="emoji-laughing" label="Laughing" />
    </PRadioButton>
  </PRadioGroup>
);
```
