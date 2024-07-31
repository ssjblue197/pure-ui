---
meta:
  title: Tag
  description: Tags are used as labels to organize things or to indicate a selection.
layout: component
---

```html:preview
<p-tag variant="primary">Primary</p-tag>
<p-tag variant="success">Success</p-tag>
<p-tag variant="neutral">Neutral</p-tag>
<p-tag variant="warning">Warning</p-tag>
<p-tag variant="danger">Danger</p-tag>
```

```jsx:react
import PTag from '@shoelace-style/shoelace/dist/react/tag';

const App = () => (
  <>
    <PTag variant="primary">Primary</PTag>
    <PTag variant="success">Success</PTag>
    <PTag variant="neutral">Neutral</PTag>
    <PTag variant="warning">Warning</PTag>
    <PTag variant="danger">Danger</PTag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html:preview
<p-tag size="small">Small</p-tag>
<p-tag size="medium">Medium</p-tag>
<p-tag size="large">Large</p-tag>
```

```jsx:react
import PTag from '@shoelace-style/shoelace/dist/react/tag';

const App = () => (
  <>
    <PTag size="small">Small</PTag>
    <PTag size="medium">Medium</PTag>
    <PTag size="large">Large</PTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html:preview
<p-tag size="small" pill>Small</p-tag>
<p-tag size="medium" pill>Medium</p-tag>
<p-tag size="large" pill>Large</p-tag>
```

```jsx:react
import PTag from '@shoelace-style/shoelace/dist/react/tag';

const App = () => (
  <>
    <PTag size="small" pill>
      Small
    </PTag>
    <PTag size="medium" pill>
      Medium
    </PTag>
    <PTag size="large" pill>
      Large
    </PTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html:preview
<div class="tags-removable">
  <p-tag size="small" removable>Small</p-tag>
  <p-tag size="medium" removable>Medium</p-tag>
  <p-tag size="large" removable>Large</p-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('p-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable p-tag {
    transition: var(--p-transition-medium) opacity;
  }
</style>
```

```jsx:react
import PTag from '@shoelace-style/shoelace/dist/react/tag';

const css = `
  .tags-removable p-tag {
    transition: var(--p-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <PTag size="small" removable onPRemove={handleRemove}>
          Small
        </PTag>

        <PTag size="medium" removable onPRemove={handleRemove}>
          Medium
        </PTag>

        <PTag size="large" removable onPRemove={handleRemove}>
          Large
        </PTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
