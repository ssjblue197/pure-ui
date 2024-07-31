---
meta:
  title: Rating
  description: Ratings give users a way to quickly view and provide feedback.
layout: component
---

```html:preview
<p-rating label="Rating"></p-rating>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rating" />;
```

## Examples

### Labels

Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the `label` attribute.

```html:preview
<p-rating label="Rate this component"></p-rating>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rate this component" />;
```

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html:preview
<p-rating label="Rating" max="3"></p-rating>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rating" max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html:preview
<p-rating label="Rating" precision="0.5" value="2.5"></p-rating>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rating" precision={0.5} value={2.5} />;
```

### Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html:preview
<p-rating label="Rating" style="--symbol-size: 2rem;"></p-rating>
```

{% raw %}

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rating" style={{ '--symbol-size': '2rem' }} />;
```

{% endraw %}

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html:preview
<p-rating label="Rating" readonly value="3"></p-rating>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rating" readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html:preview
<p-rating label="Rating" disabled value="3"></p-rating>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => <PRating label="Rating" disabled value={3} />;
```

### Detecting Hover

Use the `p-hover` event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.

The event has a payload with `phase` and `value` properties. The `phase` property tells when hovering starts, moves to a new value, and ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.

```html:preview
<div class="detect-hover">
  <p-rating label="Rating"></p-rating>
  <span></span>
</div>

<script>
  const rating = document.querySelector('.detect-hover > p-rating');
  const span = rating.nextElementSibling;
  const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];

  rating.addEventListener('p-hover', event => {
    span.textContent = terms[event.detail.value];

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      span.textContent = '';
    }
  });
</script>

<style>
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--p-border-radius-small);
    background: var(--p-color-neutral-900);
    color: var(--p-color-neutral-0);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];
const css = `
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--p-border-radius-small);
    background: var(--p-color-neutral-900);
    color: var(--p-color-neutral-0);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
`;

function handleHover(event) {
  rating.addEventListener('p-hover', event => {
    setFeedback(terms[event.detail.value]);

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      setFeedback('');
    }
  });
}

const App = () => {
  const [feedback, setFeedback] = useState(true);

  return (
    <>
      <div class="detect-hover">
        <PRating label="Rating" onPHover={handleHover} />
        <span>{feedback}</span>
      </div>
      <style>{css}</style>
    </>
  );
};
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html:preview
<p-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></p-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<p-icon name="heart-fill"></p-icon>';
</script>
```

{% raw %}

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

const App = () => (
  <PRating
    label="Rating"
    getSymbol={() => '<p-icon name="heart-fill"></p-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }}
  />
);
```

{% endraw %}

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html:preview
<p-rating label="Rating" class="rating-emojis"></p-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<p-icon name="${icons[value - 1]}"></p-icon>`;
  };
</script>
```

```jsx:react
import PRating from '@shoelace-style/shoelace/dist/react/rating';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<p-icon name="${icons[value - 1]}"></p-icon>`;
}

const App = () => <PRating label="Rating" getSymbol={getSymbol} />;
```
