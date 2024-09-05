---
meta:
  title: File Upload Item
  description:
layout: component
---

File items represent an uploaded file and provides information about file type, file size etc.

```html:preview
<p-file-upload-item>
  filename_lorem_ipsum.jpg
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>
```

```jsx:react
import { SlFileUploadItem } from '@sda-se/ocean-design-system/dist/react';
const App = () => <SlFileUploadItem></SlFileUploadItem>;
```

## Examples

### Closable

Add the `closable` attribute to show a close button that will hide the element.

```html:preview
<p-file-upload-item closable>
  filename_lorem_ipsum.jpg
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>
```

### File size

Set the `size` attribute to display the file size of the item. The [Format Byte Component](/components/format-bytes) is used to convert the given bytes to a human-readable format.

```html:preview
<p-file-upload-item size="120000">
  filename_lorem_ipsum.jpg
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>
```

### Custom close button

The close button can be customized by using the `close-button` slot and by styling the `base` part.

```html:preview
<p-file-upload-item closable>
  filename_lorem_ipsum.jpg
  <p-icon-button name="trash" slot="close-button" class="icon-button-color"></p-icon-button>
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>

<style>
  .icon-button-color::part(base) {
    color: var(--p-color-danger-500);
  }
  .icon-button-color::part(base):hover,
  .icon-button-color::part(base):focus {
    color: var(--p-color-danger-600);
  }
  .icon-button-color::part(base):active {
    color: var(--p-color-danger-400);
  }
</style>
```

### Loading

Show a loading bar by setting the `loading` attribute. Per default this will display a loading bar in an indeterminate state. The height of the element will be determined by whether the `size` attributes is set. This will ensure that the height of the item does not change when the file has finished loading.

```html:preview
<p-file-upload-item loading closable size="120000">
  filename_lorem_ipsum.jpg
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>
```

### Loading progress

Set the `progress` attribute to show the loading progress between `0` and `100`.

```html:preview
<p-file-upload-item loading progress="40" closable size="120000" class="file-item">
  filename_lorem_ipsum.jpg
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>

<br />

<p-button circle class="subtract-button"><p-icon name="dash" label="Decrease"></p-icon></p-button>
<p-button circle class="add-button"><p-icon name="plus" label="Increase"></p-icon></p-button>

<script>
  const fileItem = document.querySelector('.file-item');
  const subtractButton = document.querySelector('.subtract-button');
  const addButton = document.querySelector('.add-button');
  addButton.addEventListener('click', () => {
    const value = Math.min(100, fileItem.progress + 10);
    fileItem.progress = value;
    if (fileItem.progress === 100) {
      fileItem.loading = false;
    }
  });
  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, fileItem.progress - 10);
    fileItem.progress = value;
    if (fileItem.progress < 100) {
      fileItem.loading = true;
    }
  });
</script>
```

### Loading label

Use the `label` attribute to label the loading bar and tell assistive devices how to announce it.

```html:preview
<p-file-upload-item loading progress="20" label="Uploading File" closable>
  filename_lorem_ipsum.jpg
  <p-icon name="file-earmark" slot="image"></p-icon>
</p-file-upload-item>
```

### Warning

Set the `warning` attribute to change the color of the element.

```html:preview
<p-file-upload-item warning closable>
  File size exceeds 5MB limit
  <p-icon name="exclamation-triangle" slot="image"></p-icon>
</p-file-upload-item>
```
