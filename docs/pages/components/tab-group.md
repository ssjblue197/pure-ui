---
meta:
  title: Tab Group
  description: Tab groups organize content into a container that shows one section at a time.
layout: component
---

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

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
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

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

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html:preview
<p-tab-group placement="bottom">
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
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

const App = () => (
  <PTabGroup placement="bottom">
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

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html:preview
<p-tab-group placement="start">
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
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

const App = () => (
  <PTabGroup placement="start">
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

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html:preview
<p-tab-group placement="end">
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
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

const App = () => (
  <PTabGroup placement="end">
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

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html:preview
<p-tab-group class="tabs-closable">
  <p-tab slot="nav" panel="general">General</p-tab>
  <p-tab slot="nav" panel="closable-1" closable>Closable 1</p-tab>
  <p-tab slot="nav" panel="closable-2" closable>Closable 2</p-tab>
  <p-tab slot="nav" panel="closable-3" closable>Closable 3</p-tab>

  <p-tab-panel name="general">This is the general tab panel.</p-tab-panel>
  <p-tab-panel name="closable-1">This is the first closable tab panel.</p-tab-panel>
  <p-tab-panel name="closable-2">This is the second closable tab panel.</p-tab-panel>
  <p-tab-panel name="closable-3">This is the third closable tab panel.</p-tab-panel>
</p-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('p-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`p-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx:react
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('p-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <PTabGroup className="tabs-closable" onPClose={handleClose}>
      <PTab slot="nav" panel="general">
        General
      </PTab>
      <PTab slot="nav" panel="closable-1" closable onPClose={handleClose}>
        Closable 1
      </PTab>
      <PTab slot="nav" panel="closable-2" closable onPClose={handleClose}>
        Closable 2
      </PTab>
      <PTab slot="nav" panel="closable-3" closable onPClose={handleClose}>
        Closable 3
      </PTab>

      <PTabPanel name="general">This is the general tab panel.</PTabPanel>
      <PTabPanel name="closable-1">This is the first closable tab panel.</PTabPanel>
      <PTabPanel name="closable-2">This is the second closable tab panel.</PTabPanel>
      <PTabPanel name="closable-3">This is the third closable tab panel.</PTabPanel>
    </PTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html:preview
<p-tab-group>
  <p-tab slot="nav" panel="tab-1">Tab 1</p-tab>
  <p-tab slot="nav" panel="tab-2">Tab 2</p-tab>
  <p-tab slot="nav" panel="tab-3">Tab 3</p-tab>
  <p-tab slot="nav" panel="tab-4">Tab 4</p-tab>
  <p-tab slot="nav" panel="tab-5">Tab 5</p-tab>
  <p-tab slot="nav" panel="tab-6">Tab 6</p-tab>
  <p-tab slot="nav" panel="tab-7">Tab 7</p-tab>
  <p-tab slot="nav" panel="tab-8">Tab 8</p-tab>
  <p-tab slot="nav" panel="tab-9">Tab 9</p-tab>
  <p-tab slot="nav" panel="tab-10">Tab 10</p-tab>
  <p-tab slot="nav" panel="tab-11">Tab 11</p-tab>
  <p-tab slot="nav" panel="tab-12">Tab 12</p-tab>
  <p-tab slot="nav" panel="tab-13">Tab 13</p-tab>
  <p-tab slot="nav" panel="tab-14">Tab 14</p-tab>
  <p-tab slot="nav" panel="tab-15">Tab 15</p-tab>
  <p-tab slot="nav" panel="tab-16">Tab 16</p-tab>
  <p-tab slot="nav" panel="tab-17">Tab 17</p-tab>
  <p-tab slot="nav" panel="tab-18">Tab 18</p-tab>
  <p-tab slot="nav" panel="tab-19">Tab 19</p-tab>
  <p-tab slot="nav" panel="tab-20">Tab 20</p-tab>

  <p-tab-panel name="tab-1">Tab panel 1</p-tab-panel>
  <p-tab-panel name="tab-2">Tab panel 2</p-tab-panel>
  <p-tab-panel name="tab-3">Tab panel 3</p-tab-panel>
  <p-tab-panel name="tab-4">Tab panel 4</p-tab-panel>
  <p-tab-panel name="tab-5">Tab panel 5</p-tab-panel>
  <p-tab-panel name="tab-6">Tab panel 6</p-tab-panel>
  <p-tab-panel name="tab-7">Tab panel 7</p-tab-panel>
  <p-tab-panel name="tab-8">Tab panel 8</p-tab-panel>
  <p-tab-panel name="tab-9">Tab panel 9</p-tab-panel>
  <p-tab-panel name="tab-10">Tab panel 10</p-tab-panel>
  <p-tab-panel name="tab-11">Tab panel 11</p-tab-panel>
  <p-tab-panel name="tab-12">Tab panel 12</p-tab-panel>
  <p-tab-panel name="tab-13">Tab panel 13</p-tab-panel>
  <p-tab-panel name="tab-14">Tab panel 14</p-tab-panel>
  <p-tab-panel name="tab-15">Tab panel 15</p-tab-panel>
  <p-tab-panel name="tab-16">Tab panel 16</p-tab-panel>
  <p-tab-panel name="tab-17">Tab panel 17</p-tab-panel>
  <p-tab-panel name="tab-18">Tab panel 18</p-tab-panel>
  <p-tab-panel name="tab-19">Tab panel 19</p-tab-panel>
  <p-tab-panel name="tab-20">Tab panel 20</p-tab-panel>
</p-tab-group>
```

```jsx:react
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

const App = () => (
  <PTabGroup>
    <PTab slot="nav" panel="tab-1">
      Tab 1
    </PTab>
    <PTab slot="nav" panel="tab-2">
      Tab 2
    </PTab>
    <PTab slot="nav" panel="tab-3">
      Tab 3
    </PTab>
    <PTab slot="nav" panel="tab-4">
      Tab 4
    </PTab>
    <PTab slot="nav" panel="tab-5">
      Tab 5
    </PTab>
    <PTab slot="nav" panel="tab-6">
      Tab 6
    </PTab>
    <PTab slot="nav" panel="tab-7">
      Tab 7
    </PTab>
    <PTab slot="nav" panel="tab-8">
      Tab 8
    </PTab>
    <PTab slot="nav" panel="tab-9">
      Tab 9
    </PTab>
    <PTab slot="nav" panel="tab-10">
      Tab 10
    </PTab>
    <PTab slot="nav" panel="tab-11">
      Tab 11
    </PTab>
    <PTab slot="nav" panel="tab-12">
      Tab 12
    </PTab>
    <PTab slot="nav" panel="tab-13">
      Tab 13
    </PTab>
    <PTab slot="nav" panel="tab-14">
      Tab 14
    </PTab>
    <PTab slot="nav" panel="tab-15">
      Tab 15
    </PTab>
    <PTab slot="nav" panel="tab-16">
      Tab 16
    </PTab>
    <PTab slot="nav" panel="tab-17">
      Tab 17
    </PTab>
    <PTab slot="nav" panel="tab-18">
      Tab 18
    </PTab>
    <PTab slot="nav" panel="tab-19">
      Tab 19
    </PTab>
    <PTab slot="nav" panel="tab-20">
      Tab 20
    </PTab>

    <PTabPanel name="tab-1">Tab panel 1</PTabPanel>
    <PTabPanel name="tab-2">Tab panel 2</PTabPanel>
    <PTabPanel name="tab-3">Tab panel 3</PTabPanel>
    <PTabPanel name="tab-4">Tab panel 4</PTabPanel>
    <PTabPanel name="tab-5">Tab panel 5</PTabPanel>
    <PTabPanel name="tab-6">Tab panel 6</PTabPanel>
    <PTabPanel name="tab-7">Tab panel 7</PTabPanel>
    <PTabPanel name="tab-8">Tab panel 8</PTabPanel>
    <PTabPanel name="tab-9">Tab panel 9</PTabPanel>
    <PTabPanel name="tab-10">Tab panel 10</PTabPanel>
    <PTabPanel name="tab-11">Tab panel 11</PTabPanel>
    <PTabPanel name="tab-12">Tab panel 12</PTabPanel>
    <PTabPanel name="tab-13">Tab panel 13</PTabPanel>
    <PTabPanel name="tab-14">Tab panel 14</PTabPanel>
    <PTabPanel name="tab-15">Tab panel 15</PTabPanel>
    <PTabPanel name="tab-16">Tab panel 16</PTabPanel>
    <PTabPanel name="tab-17">Tab panel 17</PTabPanel>
    <PTabPanel name="tab-18">Tab panel 18</PTabPanel>
    <PTabPanel name="tab-19">Tab panel 19</PTabPanel>
    <PTabPanel name="tab-20">Tab panel 20</PTabPanel>
  </PTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).

```html:preview
<p-tab-group activation="manual">
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
import PTab from '@pure-ui/core/dist/react/tab';
import PTabGroup from '@pure-ui/core/dist/react/tab-group';
import PTabPanel from '@pure-ui/core/dist/react/tab-panel';

const App = () => (
  <PTabGroup activation="manual">
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
