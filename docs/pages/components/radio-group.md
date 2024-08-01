---
meta:
  title: Radio Group
  description: Radio groups are used to group multiple radios or radio buttons so they function as a single form control.
layout: component
---

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

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<p-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <p-radio value="1">Option 1</p-radio>
  <p-radio value="2">Option 2</p-radio>
  <p-radio value="3">Option 3</p-radio>
</p-radio-group>
```

```jsx:react
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <PRadio value="1">Option 1</PRadio>
    <PRadio value="2">Option 2</PRadio>
    <PRadio value="3">Option 3</PRadio>
  </PRadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html:preview
<p-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
  <p-radio-button value="1">Option 1</p-radio-button>
  <p-radio-button value="2">Option 2</p-radio-button>
  <p-radio-button value="3">Option 3</p-radio-button>
</p-radio-group>
```

```jsx:react
import PRadioButton from '@pure-ui/core/dist/react/radio-button';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';

const App = () => (
  <PRadioGroup label="Select an option" name="a" value="1">
    <PRadioButton value="1">Option 1</PRadioButton>
    <PRadioButton value="2">Option 2</PRadioButton>
    <PRadioButton value="3">Option 3</PRadioButton>
  </PRadioGroup>
);
```

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

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

### Sizing Options

The size of [Radios](/components/radio) and [Radio Buttons](/components/radio-buttons) will be determined by the Radio Group's `size` attribute.

```html preview
<p-radio-group label="Select an option" size="medium" value="medium" class="radio-group-size">
  <p-radio value="small">Small</p-radio>
  <p-radio value="medium">Medium</p-radio>
  <p-radio value="large">Large</p-radio>
</p-radio-group>

<script>
  const radioGroup = document.querySelector('.radio-group-size');

  radioGroup.addEventListener('p-change', () => {
    radioGroup.size = radioGroup.value;
  });
</script>
```

```jsx react
import { useState } from 'react';
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';

const App = () => {
  const [size, setSize] = useState('medium');

  return (
    <>
      <PRadioGroup
        label="Select an option"
        size={size}
        value={size}
        class="radio-group-size"
        onPChange={event => setSize(event.target.value)}
      >
        <PRadio value="small">Small</PRadio>
        <PRadio value="medium">Medium</PRadio>
        <PRadio value="large">Large</PRadio>
      </PRadioGroup>
    </>
  );
};
```

:::tip
[Radios](/components/radio) and [Radio Buttons](/components/radio-button) also have a `size` attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.
:::

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html:preview
<form class="validation">
  <p-radio-group label="Select an option" name="a" required>
    <p-radio value="1">Option 1</p-radio>
    <p-radio value="2">Option 2</p-radio>
    <p-radio value="3">Option 3</p-radio>
  </p-radio-group>
  <br />
  <p-button type="submit" variant="primary">Submit</p-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PIcon from '@pure-ui/core/dist/react/icon';
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <PRadioGroup label="Select an option" name="a" required onPChange={handleChange}>
        <PRadio value="1">
          Option 1
        </PRadio>
        <PRadiovalue="2">
          Option 2
        </PRadio>
        <PRadio value="3">
          Option 3
        </PRadio>
      </PRadioGroup>
      <br />
      <PButton type="submit" variant="primary">
        Submit
      </PButton>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <p-radio-group label="Select an option" name="a" value="1">
    <p-radio value="1">Not me</p-radio>
    <p-radio value="2">Me neither</p-radio>
    <p-radio value="3">Choose me</p-radio>
  </p-radio-group>
  <br />
  <p-button type="submit" variant="primary">Submit</p-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('p-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('p-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('p-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx:react
import { useEffect, useRef } from 'react';
import PButton from '@pure-ui/core/dist/react/button';
import PIcon from '@pure-ui/core/dist/react/icon';
import PRadio from '@pure-ui/core/dist/react/radio';
import PRadioGroup from '@pure-ui/core/dist/react/radio-group';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <PRadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onPChange={handleChange}>
        <PRadio value="1">Not me</PRadio>
        <PRadio value="2">Me neither</PRadio>
        <PRadio value="3">Choose me</PRadio>
      </PRadioGroup>
      <br />
      <PButton type="submit" variant="primary">
        Submit
      </PButton>
    </form>
  );
};
```
