---
meta:
  title: Badge
  description: Badges are used to draw attention and display statuses or counts.
layout: component
---

```html:preview
<p-badge>Badge</p-badge>
```

```jsx:react
import PBadge from '@pure-ui/core/dist/react/badge';

const App = () => <PBadge>Badge</PBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html:preview
<p-badge variant="primary">Primary</p-badge>
<p-badge variant="success">Success</p-badge>
<p-badge variant="neutral">Neutral</p-badge>
<p-badge variant="warning">Warning</p-badge>
<p-badge variant="danger">Danger</p-badge>
```

```jsx:react
import PBadge from '@pure-ui/core/dist/react/badge';

const App = () => (
  <>
    <PBadge variant="primary">Primary</PBadge>
    <PBadge variant="success">Success</PBadge>
    <PBadge variant="neutral">Neutral</PBadge>
    <PBadge variant="warning">Warning</PBadge>
    <PBadge variant="danger">Danger</PBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html:preview
<p-badge variant="primary" pill>Primary</p-badge>
<p-badge variant="success" pill>Success</p-badge>
<p-badge variant="neutral" pill>Neutral</p-badge>
<p-badge variant="warning" pill>Warning</p-badge>
<p-badge variant="danger" pill>Danger</p-badge>
```

```jsx:react
import PBadge from '@pure-ui/core/dist/react/badge';

const App = () => (
  <>
    <PBadge variant="primary" pill>
      Primary
    </PBadge>
    <PBadge variant="success" pill>
      Success
    </PBadge>
    <PBadge variant="neutral" pill>
      Neutral
    </PBadge>
    <PBadge variant="warning" pill>
      Warning
    </PBadge>
    <PBadge variant="danger" pill>
      Danger
    </PBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html:preview
<div class="badge-pulse">
  <p-badge variant="primary" pill pulse>1</p-badge>
  <p-badge variant="success" pill pulse>1</p-badge>
  <p-badge variant="neutral" pill pulse>1</p-badge>
  <p-badge variant="warning" pill pulse>1</p-badge>
  <p-badge variant="danger" pill pulse>1</p-badge>
</div>

<style>
  .badge-pulse p-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx:react
import PBadge from '@pure-ui/core/dist/react/badge';

const css = `
  .badge-pulse p-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <PBadge variant="primary" pill pulse>
        1
      </PBadge>
      <PBadge variant="success" pill pulse>
        1
      </PBadge>
      <PBadge variant="neutral" pill pulse>
        1
      </PBadge>
      <PBadge variant="warning" pill pulse>
        1
      </PBadge>
      <PBadge variant="danger" pill pulse>
        1
      </PBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html:preview
<p-button>
  Requests
  <p-badge pill>30</p-badge>
</p-button>

<p-button style="margin-inline-start: 1rem;">
  Warnings
  <p-badge variant="warning" pill>8</p-badge>
</p-button>

<p-button style="margin-inline-start: 1rem;">
  Errors
  <p-badge variant="danger" pill>6</p-badge>
</p-button>
```

{% raw %}

```jsx:react
import PBadge from '@pure-ui/core/dist/react/badge';
import PButton from '@pure-ui/core/dist/react/button';

const App = () => (
  <>
    <PButton>
      Requests
      <PBadge pill>30</PBadge>
    </PButton>

    <PButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <PBadge variant="warning" pill>
        8
      </PBadge>
    </PButton>

    <PButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <PBadge variant="danger" pill>
        6
      </PBadge>
    </PButton>
  </>
);
```

{% endraw %}

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html:preview
<p-menu style="max-width: 240px;">
  <p-menu-label>Messages</p-menu-label>
  <p-menu-item>Comments <p-badge slot="suffix" variant="neutral" pill>4</p-badge></p-menu-item>
  <p-menu-item>Replies <p-badge slot="suffix" variant="neutral" pill>12</p-badge></p-menu-item>
</p-menu>
```

{% raw %}

```jsx:react
import PBadge from '@pure-ui/core/dist/react/badge';
import PButton from '@pure-ui/core/dist/react/button';
import PMenu from '@pure-ui/core/dist/react/menu';
import PMenuItem from '@pure-ui/core/dist/react/menu-item';
import PMenuLabel from '@pure-ui/core/dist/react/menu-label';

const App = () => (
  <PMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--p-panel-border-color)',
      borderRadius: 'var(--p-border-radius-medium)'
    }}
  >
    <PMenuLabel>Messages</PMenuLabel>
    <PMenuItem>
      Comments
      <PBadge slot="suffix" variant="neutral" pill>
        4
      </PBadge>
    </PMenuItem>
    <PMenuItem>
      Replies
      <PBadge slot="suffix" variant="neutral" pill>
        12
      </PBadge>
    </PMenuItem>
  </PMenu>
);
```

{% endraw %}
