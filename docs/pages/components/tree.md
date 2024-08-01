---
meta:
  title: Tree
  description: Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
layout: component
---

```html:preview
<p-tree>
  <p-tree-item>
    Deciduous
    <p-tree-item>Birch</p-tree-item>
    <p-tree-item>
      Maple
      <p-tree-item>Field maple</p-tree-item>
      <p-tree-item>Red maple</p-tree-item>
      <p-tree-item>Sugar maple</p-tree-item>
    </p-tree-item>
    <p-tree-item>Oak</p-tree-item>
  </p-tree-item>

  <p-tree-item>
    Coniferous
    <p-tree-item>Cedar</p-tree-item>
    <p-tree-item>Pine</p-tree-item>
    <p-tree-item>Spruce</p-tree-item>
  </p-tree-item>

  <p-tree-item>
    Non-trees
    <p-tree-item>Bamboo</p-tree-item>
    <p-tree-item>Cactus</p-tree-item>
    <p-tree-item>Fern</p-tree-item>
  </p-tree-item>
</p-tree>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from 'pure-uikit/dist/react/tree';
import PTreeItem from 'pure-uikit/dist/react/tree-item';

const App = () => (
  <PTree>
    <PTreeItem>
      Deciduous
      <PTreeItem>Birch</PTreeItem>
      <PTreeItem>
        Maple
        <PTreeItem>Field maple</PTreeItem>
        <PTreeItem>Red maple</PTreeItem>
        <PTreeItem>Sugar maple</PTreeItem>
      </PTreeItem>
      <PTreeItem>Oak</PTreeItem>
    </PTreeItem>

    <PTreeItem>
      Coniferous
      <PTreeItem>Cedar</PTreeItem>
      <PTreeItem>Pine</PTreeItem>
      <PTreeItem>Spruce</PTreeItem>
    </PTreeItem>

    <PTreeItem>
      Non-trees
      <PTreeItem>Bamboo</PTreeItem>
      <PTreeItem>Cactus</PTreeItem>
      <PTreeItem>Fern</PTreeItem>
    </PTreeItem>
  </PTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html:preview
<p-select id="selection-mode" value="single" label="Selection">
  <p-option value="single">Single</p-option>
  <p-option value="multiple">Multiple</p-option>
  <p-option value="leaf">Leaf</p-option>
</p-select>

<br />

<p-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('p-change', () => {
    tree.querySelectorAll('p-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from 'pure-uikit/dist/react/tree';
import PTreeItem from 'pure-uikit/dist/react/tree-item';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <PSelect label="Selection" value={selection} onPChange={event => setSelection(event.target.value)}>
        <PMenuItem value="single">single</PMenuItem>
        <PMenuItem value="multiple">multiple</PMenuItem>
        <PMenuItem value="leaf">leaf</PMenuItem>
      </PSelect>

      <br />

      <PTree selection={selection}>
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
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html:preview
<p-tree class="tree-with-lines">
  <p-tree-item expanded>
    Deciduous
    <p-tree-item>Birch</p-tree-item>
    <p-tree-item expanded>
      Maple
      <p-tree-item>Field maple</p-tree-item>
      <p-tree-item>Red maple</p-tree-item>
      <p-tree-item>Sugar maple</p-tree-item>
    </p-tree-item>
    <p-tree-item>Oak</p-tree-item>
  </p-tree-item>

  <p-tree-item>
    Coniferous
    <p-tree-item>Cedar</p-tree-item>
    <p-tree-item>Pine</p-tree-item>
    <p-tree-item>Spruce</p-tree-item>
  </p-tree-item>

  <p-tree-item>
    Non-trees
    <p-tree-item>Bamboo</p-tree-item>
    <p-tree-item>Cactus</p-tree-item>
    <p-tree-item>Fern</p-tree-item>
  </p-tree-item>
</p-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

{% raw %}

<!-- prettier-ignore -->
```jsx:react
import PTree from 'pure-uikit/dist/react/tree';
import PTreeItem from 'pure-uikit/dist/react/tree-item';

const App = () => (
  <PTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <PTreeItem expanded>
      Deciduous
      <PTreeItem>Birch</PTreeItem>
      <PTreeItem expanded>
        Maple
        <PTreeItem>Field maple</PTreeItem>
        <PTreeItem>Red maple</PTreeItem>
        <PTreeItem>Sugar maple</PTreeItem>
      </PTreeItem>
      <PTreeItem>Oak</PTreeItem>
    </PTreeItem>

    <PTreeItem>
      Coniferous
      <PTreeItem>Cedar</PTreeItem>
      <PTreeItem>Pine</PTreeItem>
      <PTreeItem>Spruce</PTreeItem>
    </PTreeItem>

    <PTreeItem>
      Non-trees
      <PTreeItem>Bamboo</PTreeItem>
      <PTreeItem>Cactus</PTreeItem>
      <PTreeItem>Fern</PTreeItem>
    </PTreeItem>
  </PTree>
);
```

{% endraw %}

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `p-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html:preview
<p-tree>
  <p-tree-item lazy>Available Trees</p-tree-item>
</p-tree>

<script type="module">
  const lazyItem = document.querySelector('p-tree-item[lazy]');

  lazyItem.addEventListener('p-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('p-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx:react
import PTree from 'pure-uikit/dist/react/tree';
import PTreeItem from 'pure-uikit/dist/react/tree-item';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <PTree>
      <PTreeItem lazy={lazy} onPLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <PTreeItem>{item}</PTreeItem>
        ))}
      </PTreeItem>
    </PTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html:preview
<p-tree class="custom-icons">
  <p-icon name="plus-square" slot="expand-icon"></p-icon>
  <p-icon name="dash-square" slot="collapse-icon"></p-icon>

  <p-tree-item>
    Deciduous
    <p-tree-item>Birch</p-tree-item>
    <p-tree-item>
      Maple
      <p-tree-item>Field maple</p-tree-item>
      <p-tree-item>Red maple</p-tree-item>
      <p-tree-item>Sugar maple</p-tree-item>
    </p-tree-item>
    <p-tree-item>Oak</p-tree-item>
  </p-tree-item>

  <p-tree-item>
    Coniferous
    <p-tree-item>Cedar</p-tree-item>
    <p-tree-item>Pine</p-tree-item>
    <p-tree-item>Spruce</p-tree-item>
  </p-tree-item>

  <p-tree-item>
    Non-trees
    <p-tree-item>Bamboo</p-tree-item>
    <p-tree-item>Cactus</p-tree-item>
    <p-tree-item>Fern</p-tree-item>
  </p-tree-item>
</p-tree>

<style>
  .custom-icons p-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx:react
import PTree from 'pure-uikit/dist/react/tree';
import PTreeItem from 'pure-uikit/dist/react/tree-item';

const App = () => (
  <PTree>
    <PIcon name="plus-square" slot="expand-icon"></PIcon>
    <PIcon name="dash-square" slot="collapse-icon"></PIcon>

    <PTreeItem>
      Deciduous
      <PTreeItem>Birch</PTreeItem>
      <PTreeItem>
        Maple
        <PTreeItem>Field maple</PTreeItem>
        <PTreeItem>Red maple</PTreeItem>
        <PTreeItem>Sugar maple</PTreeItem>
      </PTreeItem>
      <PTreeItem>Oak</PTreeItem>
    </PTreeItem>

    <PTreeItem>
      Coniferous
      <PTreeItem>Cedar</PTreeItem>
      <PTreeItem>Pine</PTreeItem>
      <PTreeItem>Spruce</PTreeItem>
    </PTreeItem>

    <PTreeItem>
      Non-trees
      <PTreeItem>Bamboo</PTreeItem>
      <PTreeItem>Cactus</PTreeItem>
      <PTreeItem>Fern</PTreeItem>
    </PTreeItem>
  </PTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html:preview
<p-tree class="tree-with-icons">
  <p-tree-item expanded>
    <p-icon name="folder"></p-icon>
    Documents

    <p-tree-item>
      <p-icon name="folder"> </p-icon>
      Photos
      <p-tree-item>
        <p-icon name="image"></p-icon>
        birds.jpg
      </p-tree-item>
      <p-tree-item>
        <p-icon name="image"></p-icon>
        kitten.jpg
      </p-tree-item>
      <p-tree-item>
        <p-icon name="image"></p-icon>
        puppy.jpg
      </p-tree-item>
    </p-tree-item>

    <p-tree-item>
      <p-icon name="folder"></p-icon>
      Writing
      <p-tree-item>
        <p-icon name="file"></p-icon>
        draft.txt
      </p-tree-item>
      <p-tree-item>
        <p-icon name="file-pdf"></p-icon>
        final.pdf
      </p-tree-item>
      <p-tree-item>
        <p-icon name="file-bar-graph"></p-icon>
        sales.xls
      </p-tree-item>
    </p-tree-item>
  </p-tree-item>
</p-tree>
```

```jsx:react
import PIcon from 'pure-uikit/dist/react/icon';
import PTree from 'pure-uikit/dist/react/tree';
import PTreeItem from 'pure-uikit/dist/react/tree-item';

const App = () => {
  return (
    <PTree class="tree-with-icons">
      <PTreeItem expanded>
        <PIcon name="folder" />
        Root
        <PTreeItem>
          <PIcon name="folder" />
          Folder 1<PTreeItem>
            <PIcon name="files" />
            File 1 - 1
          </PTreeItem>
          <PTreeItem disabled>
            <PIcon name="files" />
            File 1 - 2
          </PTreeItem>
          <PTreeItem>
            <PIcon name="files" />
            File 1 - 3
          </PTreeItem>
        </PTreeItem>
        <PTreeItem>
          <PIcon name="files" />
          Folder 2<PTreeItem>
            <PIcon name="files" />
            File 2 - 1
          </PTreeItem>
          <PTreeItem>
            <PIcon name="files" />
            File 2 - 2
          </PTreeItem>
        </PTreeItem>
        <PTreeItem>
          <PIcon name="files" />
          File 1
        </PTreeItem>
      </PTreeItem>
    </PTree>
  );
};
```
