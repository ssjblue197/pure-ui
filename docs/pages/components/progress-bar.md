---
meta:
  title: Progress Bar
  description: Progress bars are used to show the status of an ongoing operation.
layout: component
---

```html:preview
<p-progress-bar value="50"></p-progress-bar>
```

```jsx:react
import PProgressBar from '@pure-ui/core/dist/react/progress-bar';

const App = () => <PProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html:preview
<p-progress-bar value="50" label="Upload progress"></p-progress-bar>
```

```jsx:react
import PProgressBar from '@pure-ui/core/dist/react/progress-bar';

const App = () => <PProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html:preview
<p-progress-bar value="50" style="--height: 6px;"></p-progress-bar>
```

{% raw %}

```jsx:react
import PProgressBar from '@pure-ui/core/dist/react/progress-bar';

const App = () => <PProgressBar value={50} style={{ '--height': '6px' }} />;
```

{% endraw %}

### Showing Values

Use the default slot to show a value.

```html:preview
<p-progress-bar value="50" class="progress-bar-values">50%</p-progress-bar>

<br />

<p-button circle><p-icon name="dash" label="Decrease"></p-icon></p-button>
<p-button circle><p-icon name="plus" label="Increase"></p-icon></p-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import PButton from '@pure-ui/core/dist/react/button';
import PIcon from '@pure-ui/core/dist/react/icon';
import PProgressBar from '@pure-ui/core/dist/react/progress-bar';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <PProgressBar value={value}>{value}%</PProgressBar>

      <br />

      <PButton circle onClick={() => adjustValue(-10)}>
        <PIcon name="dash" label="Decrease" />
      </PButton>

      <PButton circle onClick={() => adjustValue(10)}>
        <PIcon name="plus" label="Increase" />
      </PButton>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html:preview
<p-progress-bar indeterminate></p-progress-bar>
```

```jsx:react
import PProgressBar from '@pure-ui/core/dist/react/progress-bar';

const App = () => <PProgressBar indeterminate />;
```
