---
meta:
  title: Tab Panel
  description: Tab panels are used inside tab groups to display tabbed content.
layout: component
---

```html:preview
<p-tab-group>
  <p-tab slot="nav" panel="general">General</p-tab>
  <p-tab slot="nav" panel="custom">Custom</p-tab>
  <p-tab slot="nav" panel="advanced">Advanced</p-tab>
  <p-tab slot="nav" panel="disabled" disabled>Disabled</p-tab>

  <p-tab-panel name="general">This is the general tab panel.</p-tab-panel>
  <p-tab-panel name="custom">This is the custom tab panel.</p-tab-panel>
  <p-tab-panel name="advanced">This is the advanced tab panel.</p-tab-panel>
  <p-tab-panel name="disabled">This is a disabled tab panel.</p-tab-panel>
</p-tab-group>
```

```jsx:react
import PTab from 'pure-uikit/dist/react/tab';
import PTabGroup from 'pure-uikit/dist/react/tab-group';
import PTabPanel from 'pure-uikit/dist/react/tab-panel';

const App = () => (
  <PTabGroup>
    <PTab slot="nav" panel="general">
      General
    </PTab>
    <PTab slot="nav" panel="custom">
      Custom
    </PTab>
    <PTab slot="nav" panel="advanced">
      Advanced
    </PTab>
    <PTab slot="nav" panel="disabled" disabled>
      Disabled
    </PTab>

    <PTabPanel name="general">This is the general tab panel.</PTabPanel>
    <PTabPanel name="custom">This is the custom tab panel.</PTabPanel>
    <PTabPanel name="advanced">This is the advanced tab panel.</PTabPanel>
    <PTabPanel name="disabled">This is a disabled tab panel.</PTabPanel>
  </PTabGroup>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
