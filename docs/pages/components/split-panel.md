---
meta:
  title: Split Panel
  description: Split panels display two adjacent panels, allowing the user to reposition them.
layout: component
---

```html:preview
<p-split-panel>
  <div
    slot="start"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const App = () => (
  <PSplitPanel>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </PSplitPanel>
);
```

{% endraw %}

## Examples

### Initial Position

To set the initial position, use the `position` attribute. If no position is provided, it will default to 50% of the available space.

```html:preview
<p-split-panel position="75">
  <div
    slot="start"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

### Initial Position in Pixels

To set the initial position in pixels instead of a percentage, use the `position-in-pixels` attribute.

```html:preview
<p-split-panel position-in-pixels="150">
  <div
    slot="start"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const App = () => (
  <PSplitPanel position="200">
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </PSplitPanel>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.

```html:preview
<p-split-panel vertical style="height: 400px;">
  <div
    slot="start"
    style="height: 100%; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 100%; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const App = () => (
  <PSplitPanel vertical style={{ height: '400px' }}>
    <div
      slot="start"
      style={{
        height: '100%',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '100%',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </PSplitPanel>
);
```

{% endraw %}

### Snapping

To snap panels at specific positions while dragging, add the `snap` attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at `100px` and `50%`, use `snap="100px 50%"`. You can also customize how close the divider must be before snapping with the `snap-threshold` attribute.

```html:preview
<div class="split-panel-snapping">
  <p-split-panel snap="100px 50%">
    <div
      slot="start"
      style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      End
    </div>
  </p-split-panel>

  <div class="split-panel-snapping-dots"></div>
</div>

<style>
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--p-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
</style>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const css = `
  .split-panel-snapping {
    position: relative;
  }

  .split-panel-snapping-dots::before,
  .split-panel-snapping-dots::after {
    content: '';
    position: absolute;
    bottom: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--p-color-neutral-400);
    transform: translateX(-3px);
  }

  .split-panel-snapping-dots::before {
    left: 100px;
  }

  .split-panel-snapping-dots::after {
    left: 50%;
  }
`;

const App = () => (
  <>
    <div className="split-panel-snapping">
      <PSplitPanel snap="100px 50%">
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </PSplitPanel>

      <div className="split-panel-snapping-dots" />
    </div>

    <style>{css}</style>
  </>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to prevent the divider from being repositioned.

```html:preview
<p-split-panel disabled>
  <div
    slot="start"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const App = () => (
  <PSplitPanel disabled>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </PSplitPanel>
);
```

{% endraw %}

### Setting the Primary Panel

By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to `start` or `end` using the `primary` attribute.

Try resizing the example below with each option and notice how the panels respond.

```html:preview
<div class="split-panel-primary">
  <p-split-panel>
    <div
      slot="start"
      style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      End
    </div>
  </p-split-panel>

  <p-select label="Primary Panel" value="" style="max-width: 200px; margin-top: 1rem;">
    <p-option value="">None</p-option>
    <p-option value="start">Start</p-option>
    <p-option value="end">End</p-option>
  </p-select>
</div>

<script>
  const container = document.querySelector('.split-panel-primary');
  const splitPanel = container.querySelector('p-split-panel');
  const select = container.querySelector('p-select');

  select.addEventListener('p-change', () => (splitPanel.primary = select.value));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PSplitPanel from 'pure-uikit/dist/react/split-panel';
import PSelect from 'pure-uikit/dist/react/select';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => {
  const [primary, setPrimary] = useState('');

  return (
    <>
      <PSplitPanel primary={primary}>
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </PSplitPanel>

      <PSelect
        label="Primary Panel"
        value={primary}
        style={{ maxWidth: '200px', marginTop: '1rem' }}
        onPChange={event => setPrimary(event.target.value)}
      >
        <PMenuItem value="">None</PMenuItem>
        <PMenuItem value="start">Start</PMenuItem>
        <PMenuItem value="end">End</PMenuItem>
      </PSelect>
    </>
  );
};
```

{% endraw %}

### Min & Max

To set a minimum or maximum size of the primary panel, use the `--min` and `--max` custom properties. Since the secondary panel is flexible, size constraints can only be applied to the primary panel. If no primary panel is designated, these constraints will be applied to the `start` panel.

This examples demonstrates how you can ensure both panels are at least 150px using `--min`, `--max`, and the `calc()` function.

```html:preview
<p-split-panel style="--min: 150px; --max: calc(100% - 150px);">
  <div
    slot="start"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const App = () => (
  <PSplitPanel style={{ '--min': '150px', '--max': 'calc(100% - 150px)' }}>
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </PSplitPanel>
);
```

{% endraw %}

### Nested Split Panels

Create complex layouts that can be repositioned independently by nesting split panels.

```html:preview
<p-split-panel>
  <div
    slot="start"
    style="height: 400px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
  >
    Start
  </div>
  <div slot="end">
    <p-split-panel vertical style="height: 400px;">
      <div
        slot="start"
        style="height: 100%; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        Top
      </div>
      <div
        slot="end"
        style="height: 100%; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        Bottom
      </div>
    </p-split-panel>
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';

const App = () => (
  <PSplitPanel>
    <div
      slot="start"
      style={{
        height: '400px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div slot="end">
      <PSplitPanel vertical style={{ height: '400px' }}>
        <div
          slot="start"
          style={{
            height: '100%',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '100%',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </PSplitPanel>
    </div>
  </PSplitPanel>
);
```

{% endraw %}

### Customizing the Divider

You can target the `divider` part to apply CSS properties to the divider. To add a custom handle, slot an icon into the `divider` slot. When customizing the divider, make sure to think about focus styles for keyboard users.

```html:preview
<p-split-panel style="--divider-width: 20px;">
  <p-icon slot="divider" name="grip-vertical"></p-icon>
  <div
    slot="start"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</p-split-panel>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <PSplitPanel style={{ '--divider-width': '20px' }}>
    <PIcon slot="divider" name="grip-vertical" />
    <div
      slot="start"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Start
    </div>
    <div
      slot="end"
      style={{
        height: '200px',
        background: 'var(--p-color-neutral-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      End
    </div>
  </PSplitPanel>
);
```

{% endraw %}

Here's a more elaborate example that changes the divider's color and width and adds a styled handle.

```html:preview
<div class="split-panel-divider">
  <p-split-panel>
    <p-icon slot="divider" name="grip-vertical"></p-icon>
    <div
      slot="start"
      style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      Start
    </div>
    <div
      slot="end"
      style="height: 200px; background: var(--p-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
    >
      End
    </div>
  </p-split-panel>
</div>

<style>
  .split-panel-divider p-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider p-split-panel::part(divider) {
    background-color: var(--p-color-pink-600);
  }

  .split-panel-divider p-icon {
    position: absolute;
    border-radius: var(--p-border-radius-small);
    background: var(--p-color-pink-600);
    color: var(--p-color-neutral-0);
    padding: 0.5rem 0.125rem;
  }

  .split-panel-divider p-split-panel::part(divider):focus-visible {
    background-color: var(--p-color-primary-600);
  }

  .split-panel-divider p-split-panel:focus-within p-icon {
    background-color: var(--p-color-primary-600);
    color: var(--p-color-neutral-0);
  }
</style>
```

{% raw %}

```jsx:react
import PSplitPanel from 'pure-uikit/dist/react/split-panel';
import PIcon from 'pure-uikit/dist/react/icon';

const css = `
  .split-panel-divider p-split-panel {
    --divider-width: 2px;
  }

  .split-panel-divider p-split-panel::part(divider) {
    background-color: var(--p-color-pink-600);
  }

  .split-panel-divider p-icon {
    position: absolute;
    border-radius: var(--p-border-radius-small);
    background: var(--p-color-pink-600);
    color: var(--p-color-neutral-0);
    padding: .5rem .125rem;
  }

  .split-panel-divider p-split-panel::part(divider):focus-visible {
    background-color: var(--p-color-primary-600);
  }

  .split-panel-divider p-split-panel:focus-within p-icon {
    background-color: var(--p-color-primary-600);
    color: var(--p-color-neutral-0);
  }
`;

const App = () => (
  <>
    <div className="split-panel-divider">
      <PSplitPanel>
        <PIcon slot="divider" name="grip-vertical" />
        <div
          slot="start"
          style={{
            height: '200px',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Start
        </div>
        <div
          slot="end"
          style={{
            height: '200px',
            background: 'var(--p-color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          End
        </div>
      </PSplitPanel>
    </div>

    <style>{css}</style>
  </>
);
```

{% endraw %}
