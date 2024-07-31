---
meta:
  title: Option
  description: Options define the selectable items within various form controls such as select.
layout: component
---

```html:preview
<p-select label="Select one">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2">Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from '@shoelace-style/shoelace/dist/react/option';
import PSelect from '@shoelace-style/shoelace/dist/react/select';

const App = () => (
  <PSelect>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2">Option 2</POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html:preview
<p-select label="Select one">
  <p-option value="option-1">Option 1</p-option>
  <p-option value="option-2" disabled>Option 2</p-option>
  <p-option value="option-3">Option 3</p-option>
</p-select>
```

```jsx:react
import POption from '@shoelace-style/shoelace/dist/react/option';
import PSelect from '@shoelace-style/shoelace/dist/react/select';

const App = () => (
  <PSelect>
    <POption value="option-1">Option 1</POption>
    <POption value="option-2" disabled>
      Option 2
    </POption>
    <POption value="option-3">Option 3</POption>
  </PSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<p-select label="Select one">
  <p-option value="option-1">
    <p-icon slot="prefix" name="envelope"></p-icon>
    Email
    <p-icon slot="suffix" name="patch-check"></p-icon>
  </p-option>

  <p-option value="option-2">
    <p-icon slot="prefix" name="telephone"></p-icon>
    Phone
    <p-icon slot="suffix" name="patch-check"></p-icon>
  </p-option>

  <p-option value="option-3">
    <p-icon slot="prefix" name="chat-dots"></p-icon>
    Chat
    <p-icon slot="suffix" name="patch-check"></p-icon>
  </p-option>
</p-select>
```
