---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<p-checkbox>Checkbox</p-checkbox>
```

```jsx:react
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => <PCheckbox>Checkbox</PCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<p-checkbox checked>Checked</p-checkbox>
```

```jsx:react
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => <PCheckbox checked>Checked</PCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html:preview
<p-checkbox indeterminate>Indeterminate</p-checkbox>
```

```jsx:react
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => <PCheckbox indeterminate>Indeterminate</PCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<p-checkbox disabled>Disabled</p-checkbox>
```

```jsx:react
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => <PCheckbox disabled>Disabled</PCheckbox>;
```

### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<p-checkbox size="small">Small</p-checkbox>
<br />
<p-checkbox size="medium">Medium</p-checkbox>
<br />
<p-checkbox size="large">Large</p-checkbox>
```

```jsx:react
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => (
  <>
    <PCheckbox size="small">Small</PCheckbox>
    <br />
    <PCheckbox size="medium">Medium</PCheckbox>
    <br />
    <PCheckbox size="large">Large</PCheckbox>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<p-checkbox help-text="What should the user know about the checkbox?">Label</p-checkbox>
```

```jsx:react
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => <PCheckbox help-text="What should the user know about the switch?">Label</PCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <p-checkbox>Check me</p-checkbox>
  <br />
  <p-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</p-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('p-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('p-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('p-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import PButton from 'pure-uikit/dist/react/button';
import PCheckbox from 'pure-uikit/dist/react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <PCheckbox ref={checkbox} onPChange={handleChange}>
        Check me
      </PCheckbox>
      <br />
      <PButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </PButton>
    </form>
  );
};
```

{% endraw %}
