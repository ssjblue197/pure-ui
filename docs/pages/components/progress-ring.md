---
meta:
  title: Progress Ring
  description: Progress rings are used to show the progress of a determinate operation in a circular fashion.
layout: component
---

```html:preview
<p-progress-ring value="25"></p-progress-ring>
```

```jsx:react
import PProgressRing from 'pure-uikit/dist/react/progress-ring';

const App = () => <PProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html:preview
<p-progress-ring value="50" style="--size: 200px;"></p-progress-ring>
```

{% raw %}

```jsx:react
import PProgressRing from 'pure-uikit/dist/react/progress-ring';

const App = () => <PProgressRing value="50" style={{ '--size': '200px' }} />;
```

{% endraw %}

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html:preview
<p-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></p-progress-ring>
```

{% raw %}

```jsx:react
import PProgressRing from 'pure-uikit/dist/react/progress-ring';

const App = () => <PProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

{% endraw %}

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html:preview
<p-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></p-progress-ring>
```

{% raw %}

```jsx:react
import PProgressRing from 'pure-uikit/dist/react/progress-ring';

const App = () => (
  <PProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

{% endraw %}

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html:preview
<p-progress-ring value="50" label="Upload progress"></p-progress-ring>
```

```jsx:react
import PProgressRing from 'pure-uikit/dist/react/progress-ring';

const App = () => <PProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html:preview
<p-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</p-progress-ring>

<br />

<p-button circle><p-icon name="dash" label="Decrease"></p-icon></p-button>
<p-button circle><p-icon name="plus" label="Increase"></p-icon></p-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PButton from 'pure-uikit/dist/react/button';
import PIcon from 'pure-uikit/dist/react/icon';
import PProgressRing from 'pure-uikit/dist/react/progress-ring';

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
      <PProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </PProgressRing>

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

{% endraw %}
