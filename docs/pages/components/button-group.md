---
meta:
  title: Button Group
  description: Button groups can be used to group related buttons into sections.
layout: component
---

```html:preview
<p-button-group label="Alignment">
  <p-button>Left</p-button>
  <p-button>Center</p-button>
  <p-button>Right</p-button>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';

const App = () => (
  <PButtonGroup label="Alignment">
    <PButton>Left</PButton>
    <PButton>Center</PButton>
    <PButton>Right</PButton>
  </PButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html:preview
<p-button-group label="Alignment">
  <p-button size="small">Left</p-button>
  <p-button size="small">Center</p-button>
  <p-button size="small">Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button size="medium">Left</p-button>
  <p-button size="medium">Center</p-button>
  <p-button size="medium">Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button size="large">Left</p-button>
  <p-button size="large">Center</p-button>
  <p-button size="large">Right</p-button>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';

const App = () => (
  <>
    <PButtonGroup label="Alignment">
      <PButton size="small">Left</PButton>
      <PButton size="small">Center</PButton>
      <PButton size="small">Right</PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton size="medium">Left</PButton>
      <PButton size="medium">Center</PButton>
      <PButton size="medium">Right</PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton size="large">Left</PButton>
      <PButton size="large">Center</PButton>
      <PButton size="large">Right</PButton>
    </PButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html:preview
<p-button-group label="Alignment">
  <p-button variant="primary">Left</p-button>
  <p-button variant="primary">Center</p-button>
  <p-button variant="primary">Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button variant="success">Left</p-button>
  <p-button variant="success">Center</p-button>
  <p-button variant="success">Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button variant="neutral">Left</p-button>
  <p-button variant="neutral">Center</p-button>
  <p-button variant="neutral">Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button variant="warning">Left</p-button>
  <p-button variant="warning">Center</p-button>
  <p-button variant="warning">Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button variant="danger">Left</p-button>
  <p-button variant="danger">Center</p-button>
  <p-button variant="danger">Right</p-button>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';

const App = () => (
  <>
    <PButtonGroup label="Alignment">
      <PButton variant="primary">Left</PButton>
      <PButton variant="primary">Center</PButton>
      <PButton variant="primary">Right</PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton variant="success">Left</PButton>
      <PButton variant="success">Center</PButton>
      <PButton variant="success">Right</PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton variant="neutral">Left</PButton>
      <PButton variant="neutral">Center</PButton>
      <PButton variant="neutral">Right</PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton variant="warning">Left</PButton>
      <PButton variant="warning">Center</PButton>
      <PButton variant="warning">Right</PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton variant="danger">Left</PButton>
      <PButton variant="danger">Center</PButton>
      <PButton variant="danger">Right</PButton>
    </PButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html:preview
<p-button-group label="Alignment">
  <p-button size="small" pill>Left</p-button>
  <p-button size="small" pill>Center</p-button>
  <p-button size="small" pill>Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button size="medium" pill>Left</p-button>
  <p-button size="medium" pill>Center</p-button>
  <p-button size="medium" pill>Right</p-button>
</p-button-group>

<br /><br />

<p-button-group label="Alignment">
  <p-button size="large" pill>Left</p-button>
  <p-button size="large" pill>Center</p-button>
  <p-button size="large" pill>Right</p-button>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';

const App = () => (
  <>
    <PButtonGroup label="Alignment">
      <PButton size="small" pill>
        Left
      </PButton>
      <PButton size="small" pill>
        Center
      </PButton>
      <PButton size="small" pill>
        Right
      </PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton size="medium" pill>
        Left
      </PButton>
      <PButton size="medium" pill>
        Center
      </PButton>
      <PButton size="medium" pill>
        Right
      </PButton>
    </PButtonGroup>

    <br />
    <br />

    <PButtonGroup label="Alignment">
      <PButton size="large" pill>
        Left
      </PButton>
      <PButton size="large" pill>
        Center
      </PButton>
      <PButton size="large" pill>
        Right
      </PButton>
    </PButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<p-button>` element.

```html:preview
<p-button-group label="Example Button Group">
  <p-button>Button</p-button>
  <p-button>Button</p-button>
  <p-dropdown>
    <p-button slot="trigger" caret>Dropdown</p-button>
    <p-menu>
      <p-menu-item>Item 1</p-menu-item>
      <p-menu-item>Item 2</p-menu-item>
      <p-menu-item>Item 3</p-menu-item>
    </p-menu>
  </p-dropdown>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';
import PDropdown from 'pure-uikit/dist/react/dropdown';
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PButtonGroup label="Example Button Group">
    <PButton>Button</PButton>
    <PButton>Button</PButton>
    <PDropdown>
      <PButton slot="trigger" caret>
        Dropdown
      </PButton>
      <PMenu>
        <PMenuItem>Item 1</PMenuItem>
        <PMenuItem>Item 2</PMenuItem>
        <PMenuItem>Item 3</PMenuItem>
      </PMenu>
    </PDropdown>
  </PButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html:preview
<p-button-group label="Example Button Group">
  <p-button variant="primary">Save</p-button>
  <p-dropdown placement="bottom-end">
    <p-button slot="trigger" variant="primary" caret>
      <p-visually-hidden>More options</p-visually-hidden>
    </p-button>
    <p-menu>
      <p-menu-item>Save</p-menu-item>
      <p-menu-item>Save as&hellip;</p-menu-item>
      <p-menu-item>Save all</p-menu-item>
    </p-menu>
  </p-dropdown>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';
import PDropdown from 'pure-uikit/dist/react/dropdown';
import PMenu from 'pure-uikit/dist/react/menu';
import PMenuItem from 'pure-uikit/dist/react/menu-item';

const App = () => (
  <PButtonGroup label="Example Button Group">
    <PButton variant="primary">Save</PButton>
    <PDropdown placement="bottom-end">
      <PButton slot="trigger" variant="primary" caret></PButton>
      <PMenu>
        <PMenuItem>Save</PMenuItem>
        <PMenuItem>Save as&hellip;</PMenuItem>
        <PMenuItem>Save all</PMenuItem>
      </PMenu>
    </PDropdown>
  </PButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html:preview
<p-button-group label="Alignment">
  <p-tooltip content="I'm on the left">
    <p-button>Left</p-button>
  </p-tooltip>

  <p-tooltip content="I'm in the middle">
    <p-button>Center</p-button>
  </p-tooltip>

  <p-tooltip content="I'm on the right">
    <p-button>Right</p-button>
  </p-tooltip>
</p-button-group>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';
import PTooltip from 'pure-uikit/dist/react/tooltip';

const App = () => (
  <>
    <PButtonGroup label="Alignment">
      <PTooltip content="I'm on the left">
        <PButton>Left</PButton>
      </PTooltip>

      <PTooltip content="I'm in the middle">
        <PButton>Center</PButton>
      </PTooltip>

      <PTooltip content="I'm on the right">
        <PButton>Right</PButton>
      </PTooltip>
    </PButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html:preview
<div class="button-group-toolbar">
  <p-button-group label="History">
    <p-tooltip content="Undo">
      <p-button><p-icon name="arrow-counterclockwise" label="Undo"></p-icon></p-button>
    </p-tooltip>
    <p-tooltip content="Redo">
      <p-button><p-icon name="arrow-clockwise" label="Redo"></p-icon></p-button>
    </p-tooltip>
  </p-button-group>

  <p-button-group label="Formatting">
    <p-tooltip content="Bold">
      <p-button><p-icon name="type-bold" label="Bold"></p-icon></p-button>
    </p-tooltip>
    <p-tooltip content="Italic">
      <p-button><p-icon name="type-italic" label="Italic"></p-icon></p-button>
    </p-tooltip>
    <p-tooltip content="Underline">
      <p-button><p-icon name="type-underline" label="Underline"></p-icon></p-button>
    </p-tooltip>
  </p-button-group>

  <p-button-group label="Alignment">
    <p-tooltip content="Align Left">
      <p-button><p-icon name="justify-left" label="Align Left"></p-icon></p-button>
    </p-tooltip>
    <p-tooltip content="Align Center">
      <p-button><p-icon name="justify" label="Align Center"></p-icon></p-button>
    </p-tooltip>
    <p-tooltip content="Align Right">
      <p-button><p-icon name="justify-right" label="Align Right"></p-icon></p-button>
    </p-tooltip>
  </p-button-group>
</div>

<style>
  .button-group-toolbar p-button-group:not(:last-of-type) {
    margin-right: var(--p-spacing-x-small);
  }
</style>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PButtonGroup from 'pure-uikit/dist/react/button-group';
import PIcon from 'pure-uikit/dist/react/icon';
import PTooltip from 'pure-uikit/dist/react/tooltip';

const css = `
  .button-group-toolbar p-button-group:not(:last-of-type) {
    margin-right: var(--p-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <PButtonGroup label="History">
        <PTooltip content="Undo">
          <PButton>
            <PIcon name="arrow-counterclockwise"></PIcon>
          </PButton>
        </PTooltip>
        <PTooltip content="Redo">
          <PButton>
            <PIcon name="arrow-clockwise"></PIcon>
          </PButton>
        </PTooltip>
      </PButtonGroup>

      <PButtonGroup label="Formatting">
        <PTooltip content="Bold">
          <PButton>
            <PIcon name="type-bold"></PIcon>
          </PButton>
        </PTooltip>
        <PTooltip content="Italic">
          <PButton>
            <PIcon name="type-italic"></PIcon>
          </PButton>
        </PTooltip>
        <PTooltip content="Underline">
          <PButton>
            <PIcon name="type-underline"></PIcon>
          </PButton>
        </PTooltip>
      </PButtonGroup>

      <PButtonGroup label="Alignment">
        <PTooltip content="Align Left">
          <PButton>
            <PIcon name="justify-left"></PIcon>
          </PButton>
        </PTooltip>
        <PTooltip content="Align Center">
          <PButton>
            <PIcon name="justify"></PIcon>
          </PButton>
        </PTooltip>
        <PTooltip content="Align Right">
          <PButton>
            <PIcon name="justify-right"></PIcon>
          </PButton>
        </PTooltip>
      </PButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```
