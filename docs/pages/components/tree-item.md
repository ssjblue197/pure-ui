---
meta:
  title: Tree Item
  description: A tree item serves as a hierarchical node that lives inside a tree.
layout: component
---

```html:preview
<p-tree>
  <p-tree-item>
    Item 1
    <p-tree-item>Item A</p-tree-item>
    <p-tree-item>Item B</p-tree-item>
    <p-tree-item>Item C</p-tree-item>
  </p-tree-item>
  <p-tree-item>Item 2</p-tree-item>
  <p-tree-item>Item 3</p-tree-item>
</p-tree>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from '@shoelace-style/shoelace/dist/react/tree';
import PTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <PTree>
    <PTreeItem>
      Item 1
      <PTreeItem>Item A</PTreeItem>
      <PTreeItem>Item B</PTreeItem>
      <PTreeItem>Item C</PTreeItem>
    </PTreeItem>
    <PTreeItem>Item 2</PTreeItem>
    <PTreeItem>Item 3</PTreeItem>
  </PTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html:preview
<p-tree>
  <p-tree-item>
    Item 1
    <p-tree-item>
      Item A
      <p-tree-item>Item Z</p-tree-item>
      <p-tree-item>Item Y</p-tree-item>
      <p-tree-item>Item X</p-tree-item>
    </p-tree-item>
    <p-tree-item>Item B</p-tree-item>
    <p-tree-item>Item C</p-tree-item>
  </p-tree-item>
  <p-tree-item>Item 2</p-tree-item>
  <p-tree-item>Item 3</p-tree-item>
</p-tree>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from '@shoelace-style/shoelace/dist/react/tree';
import PTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <PTree>
    <PTreeItem>
      Item 1
      <PTreeItem>
        Item A
        <PTreeItem>Item Z</PTreeItem>
        <PTreeItem>Item Y</PTreeItem>
        <PTreeItem>Item X</PTreeItem>
      </PTreeItem>
      <PTreeItem>Item B</PTreeItem>
      <PTreeItem>Item C</PTreeItem>
    </PTreeItem>
    <PTreeItem>Item 2</PTreeItem>
    <PTreeItem>Item 3</PTreeItem>
  </PTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html:preview
<p-tree>
  <p-tree-item selected>
    Item 1
    <p-tree-item>Item A</p-tree-item>
    <p-tree-item>Item B</p-tree-item>
    <p-tree-item>Item C</p-tree-item>
  </p-tree-item>
  <p-tree-item>Item 2</p-tree-item>
  <p-tree-item>Item 3</p-tree-item>
</p-tree>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from '@shoelace-style/shoelace/dist/react/tree';
import PTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <PTree>
    <PTreeItem selected>
      Item 1
      <PTreeItem>Item A</PTreeItem>
      <PTreeItem>Item B</PTreeItem>
      <PTreeItem>Item C</PTreeItem>
    </PTreeItem>
    <PTreeItem>Item 2</PTreeItem>
    <PTreeItem>Item 3</PTreeItem>
  </PTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html:preview
<p-tree>
  <p-tree-item expanded>
    Item 1
    <p-tree-item expanded>
      Item A
      <p-tree-item>Item Z</p-tree-item>
      <p-tree-item>Item Y</p-tree-item>
      <p-tree-item>Item X</p-tree-item>
    </p-tree-item>
    <p-tree-item>Item B</p-tree-item>
    <p-tree-item>Item C</p-tree-item>
  </p-tree-item>
  <p-tree-item>Item 2</p-tree-item>
  <p-tree-item>Item 3</p-tree-item>
</p-tree>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from '@shoelace-style/shoelace/dist/react/tree';
import PTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <PTree>
    <PTreeItem expanded>
      Item 1
      <PTreeItem expanded>
        Item A
        <PTreeItem>Item Z</PTreeItem>
        <PTreeItem>Item Y</PTreeItem>
        <PTreeItem>Item X</PTreeItem>
      </PTreeItem>
      <PTreeItem>Item B</PTreeItem>
      <PTreeItem>Item C</PTreeItem>
    </PTreeItem>
    <PTreeItem>Item 2</PTreeItem>
    <PTreeItem>Item 3</PTreeItem>
  </PTree>
);
```
