---
meta:
  title: Spinner
  description: Spinners are used to show the progress of an indeterminate operation.
layout: component
---

```html:preview
<p-spinner></p-spinner>
```

```jsx:react
import PSpinner from 'pure-uikit/dist/react/spinner';

const App = () => <PSpinner />;
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html:preview
<p-spinner></p-spinner>
<p-spinner style="font-size: 2rem;"></p-spinner>
<p-spinner style="font-size: 3rem;"></p-spinner>
```

{% raw %}

```jsx:react
import PSpinner from 'pure-uikit/dist/react/spinner';

const App = () => (
  <>
    <PSpinner />
    <PSpinner style={{ fontSize: '2rem' }} />
    <PSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

{% endraw %}

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html:preview
<p-spinner style="font-size: 50px; --track-width: 10px;"></p-spinner>
```

{% raw %}

```jsx:react
import PSpinner from 'pure-uikit/dist/react/spinner';

const App = () => (
  <PSpinner
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }}
  />
);
```

{% endraw %}

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html:preview
<p-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></p-spinner>
```

{% raw %}

```jsx:react
import PSpinner from 'pure-uikit/dist/react/spinner';

const App = () => (
  <PSpinner
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }}
  />
);
```

{% endraw %}
