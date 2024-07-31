---
meta:
  title: Textarea
  description: Textareas collect data from the user and allow multiple lines of text.
layout: component
---

```html:preview
<p-textarea></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<p-textarea label="Comments"></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<p-textarea label="Feedback" help-text="Please tell us what you think."> </p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html:preview
<p-textarea rows="2"></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<p-textarea placeholder="Type something"></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html:preview
<p-textarea placeholder="Type something" filled></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html:preview
<p-textarea placeholder="Textarea" disabled></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html:preview
<p-textarea placeholder="Small" size="small"></p-textarea>
<br />
<p-textarea placeholder="Medium" size="medium"></p-textarea>
<br />
<p-textarea placeholder="Large" size="large"></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => (
  <>
    <PTextarea placeholder="Small" size="small"></PTextarea>
    <br />
    <PTextarea placeholder="Medium" size="medium"></PTextarea>
    <br />
    <PTextarea placeholder="Large" size="large"></PTextarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html:preview
<p-textarea resize="none"></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html:preview
<p-textarea resize="auto"></p-textarea>
```

```jsx:react
import PTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <PTextarea resize="auto" />;
```
