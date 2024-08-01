---
meta:
  title: Radio
  description: Radios allow the user to select a single option from a group.
layout: component
---

Radios are designed to be used with [radio groups](/components/radio-group).

```html:preview
<p-radio-group label="Select an option" name="a" value="1">
  <p-radio value="1">Option 1</p-radio>
  <p-radio value="2">Option 2</p-radio>
  <p-radio value="3">Option 3</p-radio>
</p-radio-group>
```

```jsx:react
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadio value="1">Option 1</PRadio>
    <PRadio value="2">Option 2</PRadio>
    <PRadio value="3">Option 3</PRadio>
  </PRadioGroup>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html:preview
<p-radio-group label="Select an option" name="a" value="3">
  <p-radio value="1">Option 1</p-radio>
  <p-radio value="2">Option 2</p-radio>
  <p-radio value="3">Option 3</p-radio>
</p-radio-group>
```

```jsx:react
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="3">
    <PRadio value="1">Option 1</PRadio>
    <PRadio value="2">Option 2</PRadio>
    <PRadio value="3">Option 3</PRadio>
  </PRadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html:preview
<p-radio-group label="Select an option" name="a" value="1">
  <p-radio value="1">Option 1</p-radio>
  <p-radio value="2" disabled>Option 2</p-radio>
  <p-radio value="3">Option 3</p-radio>
</p-radio-group>
```

```jsx:react
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadio value="1">Option 1</PRadio>
    <PRadio value="2" disabled>
      Option 2
    </PRadio>
    <PRadio value="3">Option 3</PRadio>
  </PRadioGroup>
);
```

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html preview
<p-radio-group size="small" value="1">
  <p-radio value="1">Small 1</p-radio>
  <p-radio value="2">Small 2</p-radio>
  <p-radio value="3">Small 3</p-radio>
</p-radio-group>

<br />

<p-radio-group size="medium" value="1">
  <p-radio value="1">Medium 1</p-radio>
  <p-radio value="2">Medium 2</p-radio>
  <p-radio value="3">Medium 3</p-radio>
</p-radio-group>

<br />

<p-radio-group size="large" value="1">
  <p-radio value="1">Large 1</p-radio>
  <p-radio value="2">Large 2</p-radio>
  <p-radio value="3">Large 3</p-radio>
</p-radio-group>
```

```jsx react
import PRadio from '@pure-ui/core/dist/react/radio';

const App = () => (
  <>
    <PRadioGroup size="small" value="1">
      <PRadio value="1">Small 1</PRadio>
      <PRadio value="2">Small 2</PRadio>
      <PRadio value="3">Small 3</PRadio>
    </PRadioGroup>

    <br />

    <PRadioGroup size="medium" value="1">
      <PRadio value="1">Medium 1</PRadio>
      <PRadio value="2">Medium 2</PRadio>
      <PRadio value="3">Medium 3</PRadio>
    </PRadioGroup>

    <br />

    <PRadioGroup size="large" value="1">
      <PRadio value="1">Large 1</PRadio>
      <PRadio value="2">Large 2</PRadio>
      <PRadio value="3">Large 3</PRadio>
    </PRadioGroup>
  </>
);
```
