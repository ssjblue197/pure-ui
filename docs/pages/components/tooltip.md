---
meta:
  title: Tooltip
  description: Tooltips display additional information based on a specific action.
layout: component
---

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html:preview
<p-tooltip content="This is a tooltip">
  <p-button>Hover Me</p-button>
</p-tooltip>
```

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => (
  <PTooltip content="This is a tooltip">
    <PButton>Hover Me</PButton>
  </PTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html:preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <p-tooltip content="top-start" placement="top-start">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="top" placement="top">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="top-end" placement="top-end">
      <p-button></p-button>
    </p-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <p-tooltip content="left-start" placement="left-start">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="right-start" placement="right-start">
      <p-button></p-button>
    </p-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <p-tooltip content="left" placement="left">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="right" placement="right">
      <p-button></p-button>
    </p-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <p-tooltip content="left-end" placement="left-end">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="right-end" placement="right-end">
      <p-button></p-button>
    </p-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <p-tooltip content="bottom-start" placement="bottom-start">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="bottom" placement="bottom">
      <p-button></p-button>
    </p-tooltip>

    <p-tooltip content="bottom-end" placement="bottom-end">
      <p-button></p-button>
    </p-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example p-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) p-tooltip:first-child p-button,
  .tooltip-placement-example-row:nth-child(5) p-tooltip:first-child p-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) p-tooltip:nth-child(2) p-button,
  .tooltip-placement-example-row:nth-child(3) p-tooltip:nth-child(2) p-button,
  .tooltip-placement-example-row:nth-child(4) p-tooltip:nth-child(2) p-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example p-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) p-tooltip:first-child p-button,
  .tooltip-placement-example-row:nth-child(5) p-tooltip:first-child p-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) p-tooltip:nth-child(2) p-button,
  .tooltip-placement-example-row:nth-child(3) p-tooltip:nth-child(2) p-button,
  .tooltip-placement-example-row:nth-child(4) p-tooltip:nth-child(2) p-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <PTooltip content="top-start" placement="top-start">
          <PButton />
        </PTooltip>

        <PTooltip content="top" placement="top">
          <PButton />
        </PTooltip>

        <PTooltip content="top-end" placement="top-end">
          <PButton />
        </PTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <PTooltip content="left-start" placement="left-start">
          <PButton />
        </PTooltip>

        <PTooltip content="right-start" placement="right-start">
          <PButton />
        </PTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <PTooltip content="left" placement="left">
          <PButton />
        </PTooltip>

        <PTooltip content="right" placement="right">
          <PButton />
        </PTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <PTooltip content="left-end" placement="left-end">
          <PButton />
        </PTooltip>

        <PTooltip content="right-end" placement="right-end">
          <PButton />
        </PTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <PTooltip content="bottom-start" placement="bottom-start">
          <PButton />
        </PTooltip>

        <PTooltip content="bottom" placement="bottom">
          <PButton />
        </PTooltip>

        <PTooltip content="bottom-end" placement="bottom-end">
          <PButton />
        </PTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html:preview
<p-tooltip content="Click again to dismiss" trigger="click">
  <p-button>Click to Toggle</p-button>
</p-tooltip>
```

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => (
  <PTooltip content="Click again to dismiss" trigger="click">
    <PButton>Click to Toggle</PButton>
  </PTooltip>
);
```

### Manual Trigger

Tooltips can be controlled programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html:preview
<p-button style="margin-right: 4rem;">Toggle Manually</p-button>

<p-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <p-avatar label="User"></p-avatar>
</p-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PAvatar from '@pure-ui/core/dist/react/avatar';
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </PButton>

      <PTooltip open={open} content="This is an avatar" trigger="manual">
        <PAvatar />
      </PTooltip>
    </>
  );
};
```

{% endraw %}

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--p-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html:preview
<p-tooltip content="This is a tooltip" style="--p-tooltip-arrow-size: 0;">
  <p-button>No Arrow</p-button>
</p-tooltip>
```

{% raw %}

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => (
  <div style={{ '--p-tooltip-arrow-size': '0' }}>
    <PTooltip content="This is a tooltip">
      <PButton>Above</PButton>
    </PTooltip>

    <PTooltip content="This is a tooltip" placement="bottom">
      <PButton>Below</PButton>
    </PTooltip>
  </div>
);
```

{% endraw %}

To override it globally, set it in a root block in your stylesheet after the Pure UI stylesheet is loaded.

```css
:root {
  --p-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html:preview
<p-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <p-button>Hover me</p-button>
</p-tooltip>
```

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => (
  <PTooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <PButton>Hover Me</PButton>
  </PTooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html:preview
<p-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <p-button>Hover me</p-button>
</p-tooltip>
```

{% raw %}

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const App = () => (
  <PTooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <PButton>Hover Me</PButton>
  </PTooltip>
);
```

{% endraw %}

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="tooltip-hoist">
  <p-tooltip content="This is a tooltip">
    <p-button>No Hoist</p-button>
  </p-tooltip>

  <p-tooltip content="This is a tooltip" hoist>
    <p-button>Hoist</p-button>
  </p-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--p-panel-border-color);
    overflow: hidden;
    padding: var(--p-spacing-medium);
  }
</style>
```

```jsx:react
import PButton from '@pure-ui/core/dist/react/button';
import PTooltip from '@pure-ui/core/dist/react/tooltip';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--p-panel-border-color);
    overflow: hidden;
    padding: var(--p-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <PTooltip content="This is a tooltip">
        <PButton>No Hoist</PButton>
      </PTooltip>

      <PTooltip content="This is a tooltip" hoist>
        <PButton>Hoist</PButton>
      </PTooltip>
    </div>

    <style>{css}</style>
  </>
);
```
