---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
---

```html:preview
<p-input></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<p-input label="What is your name?"></p-input>
```

```jsx:react
import PIcon from '@pure-ui/core/dist/react/icon';
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<p-input label="Nickname" help-text="What would you like people to call you?"></p-input>
```

```jsx:react
import PIcon from '@pure-ui/core/dist/react/icon';
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<p-input placeholder="Type something"></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<p-input placeholder="Clearable" clearable></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<p-input type="password" placeholder="Password Toggle" password-toggle></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<p-input placeholder="Type something" filled></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<p-input placeholder="Disabled" disabled></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => <PInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html:preview
<p-input placeholder="Small" size="small"></p-input>
<br />
<p-input placeholder="Medium" size="medium"></p-input>
<br />
<p-input placeholder="Large" size="large"></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => (
  <>
    <PInput placeholder="Small" size="small" />
    <br />
    <PInput placeholder="Medium" size="medium" />
    <br />
    <PInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html:preview
<p-input placeholder="Small" size="small" pill></p-input>
<br />
<p-input placeholder="Medium" size="medium" pill></p-input>
<br />
<p-input placeholder="Large" size="large" pill></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => (
  <>
    <PInput placeholder="Small" size="small" pill />
    <br />
    <PInput placeholder="Medium" size="medium" pill />
    <br />
    <PInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html:preview
<p-input type="email" placeholder="Email"></p-input>
<br />
<p-input type="number" placeholder="Number"></p-input>
<br />
<p-input type="date" placeholder="Date"></p-input>
```

```jsx:react
import PInput from '@pure-ui/core/dist/react/input';

const App = () => (
  <>
    <PInput type="email" placeholder="Email" />
    <br />
    <PInput type="number" placeholder="Number" />
    <br />
    <PInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<p-input placeholder="Small" size="small">
  <p-icon name="house" slot="prefix"></p-icon>
  <p-icon name="chat" slot="suffix"></p-icon>
</p-input>
<br />
<p-input placeholder="Medium" size="medium">
  <p-icon name="house" slot="prefix"></p-icon>
  <p-icon name="chat" slot="suffix"></p-icon>
</p-input>
<br />
<p-input placeholder="Large" size="large">
  <p-icon name="house" slot="prefix"></p-icon>
  <p-icon name="chat" slot="suffix"></p-icon>
</p-input>
```

```jsx:react
import PIcon from '@pure-ui/core/dist/react/icon';
import PInput from '@pure-ui/core/dist/react/input';

const App = () => (
  <>
    <PInput placeholder="Small" size="small">
      <PIcon name="house" slot="prefix"></PIcon>
      <PIcon name="chat" slot="suffix"></PIcon>
    </PInput>
    <br />
    <PInput placeholder="Medium" size="medium">
      <PIcon name="house" slot="prefix"></PIcon>
      <PIcon name="chat" slot="suffix"></PIcon>
    </PInput>
    <br />
    <PInput placeholder="Large" size="large">
      <PIcon name="house" slot="prefix"></PIcon>
      <PIcon name="chat" slot="suffix"></PIcon>
    </PInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html:preview
<p-input class="label-on-left" label="Name" help-text="Enter your name"></p-input>
<p-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></p-input>
<p-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></p-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--p-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--p-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```
