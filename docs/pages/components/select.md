---
meta:
  title: Select
  description: Selects allow you to choose items from a menu of predefined options.
layout: component
---

```html:preview
<p-select show-search clearable multiple placeholder="Select">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
  <p-option value="option-4">Option 4</p-option>
  <p-option value="option-5">Option 5</p-option>
  <p-option value="option-6">Option 6</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
    <POption value="option-4">Option 4</POption>
    <POption value="option-5">Option 5</POption>
    <POption value="option-6">Option 6</POption>
  </PSelect>
);
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<p-select label="Select one">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect label="Select one">
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<p-select label="Experience" help-text="Please tell us your skill level.">
  <p-option value="1">Novice</p-option>
  <p-option value="2">Intermediate</p-option>
  <p-option value="3">Advanced</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect label="Experience" help-text="Please tell us your skill level.">
    <POption value="1">Novice</POption>
    <POption value="2">Intermediate</POption>
    <POption value="3">Advanced</POption>
  </PSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<p-select placeholder="Select one">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect placeholder="Select one">
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Show search

The `show-search` attribute is a boolean attribute that enables the search functionality within the `<p-select>` component. When set to `true`, users can type to filter the options.

```html:preview
<p-select placeholder="Select one" show-search>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect placeholder="Select one">
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html:preview
<p-select clearable value="option-1">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect placeholder="Clearable" clearable>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html:preview
<p-select filled>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect filled>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html:preview
<p-select pill>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect pill>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html:preview
<p-select placeholder="Disabled" disabled>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect placeholder="Disabled" disabled>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html:preview
<p-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable max-options-visible="4" show-search>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
  <p-option value="option-4">Option 4</p-option>
  <p-option value="option-5">Option 5</p-option>
  <p-option value="option-6">Option 6</p-option>
  <p-option value="option-7">Option 7</p-option>
  <p-option value="option-8">Option 8</p-option>
  <p-option value="option-9">Option 9</p-option>
  <p-option value="option-10">Option 10</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect label="Select a Few" value={["option-1", "option-2", "option-3"]} multiple clearable>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
    <POption value="option-4">Option 4</POption>
    <POption value="option-5">Option 5</POption>
    <POption value="option-6">Option 6</POption>
  </PSelect>
);
```

:::tip
Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.
:::

### Tag mode

- Enable tag mode:

  - The `tag-mode` attribute enables users to add new tags by pressing the "Enter" key after typing a new tag.
  - This feature is useful when you want to allow users to add new items that are not already included in the list of options.
  - Note that in tag mode, the component will not validate whether the user's input matches any of the available options.

- Good practice to use `clearable`:

  - The `clearable` attribute is a good practice to use when the `multiple` attribute is enabled.
  - This allows users to remove all selected options at once by clicking the clear icon.

- Set multiple values at once:
  - To set multiple values at once, set the `value` attribute to a space-delimited list of values.

```html:preview
<p-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable max-options-visible="4" tag-mode show-search>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
  <p-option value="option-4">Option 4</p-option>
  <p-option value="option-5">Option 5</p-option>
  <p-option value="option-6">Option 6</p-option>
  <p-option value="option-7">Option 7</p-option>
  <p-option value="option-8">Option 8</p-option>
  <p-option value="option-9">Option 9</p-option>
  <p-option value="option-10">Option 10</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect label="Select a Few" value={["option-1", "option-2", "option-3"]} multiple clearable>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
    <POption value="option-4">Option 4</POption>
    <POption value="option-5">Option 5</POption>
    <POption value="option-6">Option 6</POption>
  </PSelect>
);
```

### Setting Initial Values

Use the `value` attribute to set the initial selection.

When using `multiple`, the `value` _attribute_ uses space-delimited values to select more than one option. Because of this, `<p-option>` values cannot contain spaces. If you're accessing the `value` _property_ through Javascript, it will be an array.

```html:preview
<p-select value="option-1 option-2" multiple clearable>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
  <p-option value="option-4">Option 4</p-option>
</p-select>
```

```jsx:react
import PDivider from 'pure-uikit/dist/react/divider';
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect value={["option-1", "option-2"]} multiple clearable>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Grouping Options

Use `<p-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html:preview
<p-select>
  <small>Section 1</small>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
  <p-divider></p-divider>
  <small>Section 2</small>
  <p-option value="option-4">Option 4</p-option>
  <p-option value="option-5">Option 5</p-option>
  <p-option value="option-6">Option 6</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
    <POption value="option-4">Option 4</POption>
    <POption value="option-5">Option 5</POption>
    <POption value="option-6">Option 6</POption>
  </PSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html:preview
<p-select placeholder="Small" size="small">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>

<br />

<p-select placeholder="Medium" size="medium">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>

<br />

<p-select placeholder="Large" size="large">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <>
    <PSelect placeholder="Small" size="small">
      <POption value="option-1">Option 1</POption>
      <POption value="option-2">Option 2</POption>
      <POption value="option-3">Option 3</POption>
    </PSelect>

    <br />

    <PSelect placeholder="Medium" size="medium">
      <POption value="option-1">Option 1</POption>
      <POption value="option-2">Option 2</POption>
      <POption value="option-3">Option 3</POption>
    </PSelect>

    <br />

    <PSelect placeholder="Large" size="large">
      <POption value="option-1">Option 1</POption>
      <POption value="option-2">Option 2</POption>
      <POption value="option-3">Option 3</POption>
    </PSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html:preview
<p-select placement="top">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <PSelect placement="top">
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PDropdown>
);
```

### Prefix & Suffix

Use the `prefix` and `suffix` slots to add presentational icons and text. Avoid slotting in interactive elements, such as buttons, links, etc.

```html:preview
<p-select placeholder="Small" size="small" clearable>
  <p-icon name="house" slot="prefix"></p-icon>
  <p-badge slot="suffix">New</p-badge>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
<br />
<p-select placeholder="Medium" size="medium" clearable>
  <p-icon name="house" slot="prefix"></p-icon>
  <p-badge slot="suffix">New</p-badge>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
<br />
<p-select placeholder="Large" size="large" clearable>
  <p-icon name="house" slot="prefix"></p-icon>
  <p-badge slot="suffix">New</p-badge>
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import PIcon from 'pure-uikit/dist/react/icon';
import POption from 'pure-uikit/dist/react/option';
import PSelect from 'pure-uikit/dist/react/select';

const App = () => (
  <>
    <PSelect placeholder="Small" size="small">
      <PIcon name="house" slot="prefix"></PIcon>
      <POption value="option-1">Option 1</POption>
      <POption value="option-2">Option 2</POption>
      <POption value="option-3">Option 3</POption>
    </PSelect>
    <br />
    <PSelect placeholder="Medium" size="medium">
      <PIcon name="house" slot="prefix"></PIcon>
      <POption value="option-1">Option 1</POption>
      <POption value="option-2">Option 2</POption>
      <POption value="option-3">Option 3</POption>
    </PSelect>
    <br />
    <PSelect placeholder="Large" size="large">
      <PIcon name="house" slot="prefix"></PIcon>
      <POption value="option-1">Option 1</POption>
      <POption value="option-2">Option 2</POption>
      <POption value="option-3">Option 3</POption>
    </PSelect>
  </>
);
```

### Custom Tags

When multiple options can be selected, you can provide custom tags by passing a function to the `getTag` property. Your function can return a string of HTML, a <a href="https://lit.dev/docs/templates/overview/">Lit Template</a>, or an [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The `getTag()` function will be called for each option. The first argument is an `<p-option>` element and the second argument is the tag's index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the `style` attribute in your template or you can add your own [parts](/getting-started/customizing/#css-parts) and target them with the [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.

```html:preview
<p-select
  placeholder="Select one"
  value="email phone"
  multiple
  clearable
  class="custom-tag"
>
  <p-option value="email">
    <p-icon slot="prefix" name="envelope"></p-icon>
    Email
  </p-option>
  <p-option value="phone">
    <p-icon slot="prefix" name="telephone"></p-icon>
    Phone
  </p-option>
  <p-option value="chat">
    <p-icon slot="prefix" name="chat-dots"></p-icon>
    Chat
  </p-option>
</p-select>

<script type="module">
  const select = document.querySelector('.custom-tag');

  select.getTag = (option, index) => {
    // Use the same icon used in the <p-option>
    const name = option.querySelector('p-icon[slot="prefix"]').name;

    // You can return a string, a Lit Template, or an HTMLElement here
    return `
      <p-tag removable>
        <p-icon name="${name}" style="padding-inline-end: .5rem;"></p-icon>
        ${option.getTextLabel()}
      </p-tag>
    `;
  };
</script>
```

:::warning
Be sure you trust the content you are outputting! Passing unsanitized user input to `getTag()` can result in XSS vulnerabilities.
:::
