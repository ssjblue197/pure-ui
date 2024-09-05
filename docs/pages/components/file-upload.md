---
meta:
  title: File Upload
  description:
layout: component
---

File Upload provides an area where files can be dragged and dropped onto from the Operating System to be uploaded or to be used for other tasks. It also provides a button to open a file dialog and select files from the file system. Per default the File Dropzone shows a list of all selected files below the dropzone.

```html:preview
<p-file-upload closable multiple
  label="Support for uploading single files or in bulk, including JPG, JPEG, and PNG formats"
>
  <span slot="button">
    <p-button variant="text">
      <span style="font-weight: 600;">Click to upload</span>
      <span style="font-weight: 400; color: #475467;">or drag and drop</span>
    </p-button>
  </span>
</p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload closable multiple></PFileUpload>;
```

## Examples

### Disabled

Set the `disabled` attribute to disable the element.

```html:preview
<p-file-upload disabled></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload disabled></PFileUpload>;
```

### Hide Button

Set the `no-button` attribute to hide the button in the dropzone.

```html:preview
<p-file-upload no-button></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload no-button></PFileUpload>;
```

### Button Only

Set the `button-only` attribute to show only a file input button instead of a dropzone.

```html:preview
<p-file-upload button-only></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload button-only></PFileUpload>;
```

### Customizing Labels

Set the `label` and `button-label` attribute to override the default labels.

```html:preview
<p-file-upload
  label="Please combine all documents into one PDF file. The maximum file size is 3MB."
  button-label="Upload your CV or Resume"
></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => (
  <PFileUpload
    label="Please combine all documents into one PDF file. The maximum file size is 3MB."
    button-label="Upload your CV or Resume"
  ></PFileUpload>
);
```

### Customizing Button

Use the `button` slot to customize the button appearance.

```html:preview
<p-file-upload>
  <p-button variant="danger" slot="button"> Custom Button </p-button>
</p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => (
  <PFileUpload
    label="Please combine all documents into one PDF file. The maximum file size is 3MB."
    button-label="Upload your CV or Resume"
  ></PFileUpload>
);
```

### No File List

Set the `no-file-list` attribute to hide the file list.

```html:preview
<p-file-upload no-file-list></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload no-file-list></PFileUpload>;
```

### Maximum File Size

Set the `max-file-size` attribute to set a maximum file size limit. The user will receive a warning, when the selected file is too large.

```html:preview
<p-file-upload max-file-size="100"></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload max-file-size={100}></PFileUpload>;
```

### Maximum Number of Files

Set the `max-files` attribute to limit the number of files that can be added. Only works together with the `multiple` attribute.

```html:preview
<p-file-upload max-files="2" multiple></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload max-files={2} multiple></PFileUpload>;
```

### Accepted File Types

Set the `accept` attribute to set the accepted MIME-Type of the files. This attribute is consistent with the native file input. Visit the [MDN documentation for the accept attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) for more information.

```html:preview
<p-file-upload accept="image/*"></p-file-upload>
```

```jsx:react
import { PFileUpload } from 'pure-uikit/dist/react';

const App = () => <PFileUpload accept="image/*"></PFileUpload>;
```

### Form Usage with FormData

The FileUpload component can be used inside a form as a replacement for `<input type="file">`. The files can be accessed using FormData. See [Form Control documentation](../getting-started/form-controls.md) for more details.

```html:preview
<form class="file-upload">
  <p-file-upload name="p-file-upload" no-button multiple></p-file-upload>
  <br />
  <input type="file" name="native-input" multiple></input>
  <br />
  <p-button type="reset" variant="default">Reset</p-button>
  <p-button type="submit" variant="primary">Submit</p-button>
</form>

<script type="module">
  const form = document.querySelector('.file-upload');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.getAll('native-input'), formData.getAll('p-file-upload'));
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { PFileUpload, SlButton } from 'pure-uikit/dist/react';

const App = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData.getAll('native-input'), formData.getAll('p-file-upload'));
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <PFileUpload name="p-file-upload" no-button multiple></PFileUpload>
      <br />
      <input type="file" name="native-input" multiple></input>
      <br />
      <SlButton type="reset" variant="default">
        Reset
      </SlButton>
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Form Usage with JSON

The FileUpload component can be used inside a form as a replacement for `<input type="file">`. The files can be serialized using JSON. See [Form Control documentation](../getting-started/form-controls.md) for more details.

```html:preview
<form class="file-upload-json">
  <p-file-upload name="p-file-upload" no-button multiple></p-file-upload>
  <br />
  <input type="file" name="native-input" multiple></input>
  <br />
  <p-button type="reset" variant="default">Reset</p-button>
  <p-button type="submit" variant="primary">Submit</p-button>
</form>

<script type="module">
  import { serialize } from '../dist/utilities/form.js';
  const form = document.querySelector('.file-upload-json');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = serialize(form);
    console.log(data);
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { PFileUpload, SlButton } from 'pure-uikit/dist/react';
import { serialize } from '../dist/utilities/form.js';

const App = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data = serialize(form);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <PFileUpload name="p-file-upload" no-button multiple></PFileUpload>
      <br />
      <input type="file" name="native-input" multiple></input>
      <br />
      <SlButton type="reset" variant="default">
        Reset
      </SlButton>
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Upload Files

To upload a file, listen to the `p-change` event and handle the received file. This example uses [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but the same could be achieved with axios or the fetch API.

```html:preview
<p-file-upload class="upload-file" multiple></p-file-upload>

<script type="module">
  const fileUpload = document.querySelector('.upload-file');
  fileUpload.addEventListener('p-change', event => {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080');
    xhr.setRequestHeader('Content-Type', fileInfo.file.type);
    xhr.send(fileInfo.file);
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { PFileUpload, SlButton } from 'pure-uikit/dist/react';
import { serialize } from '../dist/utilities/form.js';

const App = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080');
    xhr.setRequestHeader('Content-Type', fileInfo.file.type);
    xhr.send(fileInfo.file);
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <PFileUpload name="p-file-upload" multiple></PFileUpload>
      <br />
      <input type="file" name="native-input" multiple></input>
      <br />
      <SlButton type="reset" variant="default">
        Reset
      </SlButton>
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Upload Files and indicate loading

Set `loading` to `true` on the FileInfo object to add a loading indicator to the FileUploadItem.

```html:preview
<p-file-upload class="upload-file-loading" multiple></p-file-upload>

<script type="module">
  const fileUpload = document.querySelector('.upload-file-loading');
  fileUpload.addEventListener('p-change', async event => {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/upload/');
    xhr.setRequestHeader('Content-Type', fileInfo.file.type);
    xhr.send(fileInfo.file);
    fileInfo.loading = true;
    setTimeout(() => {
      fileInfo.loading = false;
      fileUpload.requestUpdate();
    }, 3000);
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { PFileUpload, SlButton } from 'pure-uikit/dist/react';
import { serialize } from '../dist/utilities/form.js';

const App = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080');
    xhr.setRequestHeader('Content-Type', fileInfo.file.type);
    xhr.send(fileInfo.file);

    fileInfo.loading = true;

    setTimeout(() => {
      fileInfo.loading = false;
      fileUpload.requestUpdate();
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <PFileUpload name="p-file-upload" multiple></PFileUpload>
      <br />
      <input type="file" name="native-input" multiple></input>
      <br />
      <SlButton type="reset" variant="default">
        Reset
      </SlButton>
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Upload Files and handling Errors

To handle errors in a [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) the `upload.onerror` callback can be used.

```html:preview
<p-file-upload class="upload-file-errors" multiple></p-file-upload>

<script type="module">
  const fileUpload = document.querySelector('.upload-file-errors');
  fileUpload.addEventListener('p-change', async event => {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();
    xhr.upload.onerror = event => {
      console.error('error:', event);
      fileInfo.loading = false;
      fileInfo.warning = 'Upload Failed';
      fileInfo.accepted = false;
      fileUpload.requestUpdate();
    };
    xhr.open('POST', 'http://localhost');
    xhr.setRequestHeader('Content-Type', fileInfo.file.type);
    xhr.send(fileInfo.file);
    fileInfo.loading = true;
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { PFileUpload, SlButton } from 'pure-uikit/dist/react';
import { serialize } from '../dist/utilities/form.js';

const App = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();

    xhr.upload.onerror = event => {
      console.error('error:', event);
      fileInfo.loading = false;
      fileInfo.warning = 'Upload Failed';
      fileInfo.accepted = false;

      fileUpload.requestUpdate();
    };

    xhr.open('POST', 'http://localhost');
    xhr.setRequestHeader('Content-Type', fileInfo.file.type);
    xhr.send(fileInfo.file);

    fileInfo.loading = true;
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <PFileUpload name="p-file-upload" multiple></PFileUpload>
      <br />
      <input type="file" name="native-input" multiple></input>
      <br />
      <SlButton type="reset" variant="default">
        Reset
      </SlButton>
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Upload Files and update progress

The [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) provides an `upload.onprogress` callback that can be used to change the `progress` attribute on the FileInfo object.

```html:preview
<p-file-upload class="upload-file-progress" multiple></p-file-upload>

<script type="module">
  const fileUpload = document.querySelector('.upload-file-progress');
  fileUpload.addEventListener('p-change', async event => {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        console.log('progress: ', (event.loaded / event.total) * 100);
        fileInfo.progress = (event.loaded / event.total) * 100;
        fileUpload.requestUpdate();
      }
    };
    xhr.upload.onload = event => {
      console.log('complete: ', event);
      fileInfo.loading = false;
      fileUpload.requestUpdate();
    };
    xhr.open('POST', 'http://localhost:8080/upload');
    var formData = new FormData();
    formData.append('file', fileInfo.file);
    xhr.send(formData);
    fileInfo.loading = true;
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import { PFileUpload, SlButton } from 'pure-uikit/dist/react';
import { serialize } from '../dist/utilities/form.js';

const App = () => {
  const form = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const fileInfo = event.detail;
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        console.log('progress: ', (event.loaded / event.total) * 100);
        fileInfo.progress = (event.loaded / event.total) * 100;
        fileUpload.requestUpdate();
      }
    };

    xhr.upload.onload = event => {
      console.log('complete: ', event);
      fileInfo.loading = false;
      fileUpload.requestUpdate();
    };

    xhr.open('POST', 'http://localhost:8080/upload');
    var formData = new FormData();
    formData.append('file', fileInfo.file);
    xhr.send(formData);

    fileInfo.loading = true;
  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <PFileUpload name="p-file-upload" multiple></PFileUpload>
      <br />
      <input type="file" name="native-input" multiple></input>
      <br />
      <SlButton type="reset" variant="default">
        Reset
      </SlButton>
      <SlButton type="submit" variant="primary">
        Submit
      </SlButton>
    </form>
  );
};
```

### Custom Image

Set the `image` slot to customize the appearance of the image within the dropzone.

```html:preview
<p-file-upload>
  <p-qr-code slot="image" value="https://pureui.xyz/"></p-qr-code>
</p-file-upload>
```

```jsx:react
import { PFileUpload, SlQrCode } from 'pure-uikit/dist/react';

const App = () => (
  <PFileUpload>
    <SlQrCode slot="image" value="https://pureui.xyz/" />;
  </PFileUpload>
);
```

### Custom Content

Set the `content` slot to customize the appearance of the dropzone.

```html:preview
<p-file-upload>
  <p-card slot="label" class="card-footer">
    This card is a dropzone. You can drag all sorts of things in it!
    <div slot="footer">Footer</div>
  </p-card>
</p-file-upload>

<style>
  .card-footer {
    max-width: 300px;
  }
  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import { PFileUpload, SlCard, SlRating } from '@sda-se/ocean-design-system/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }
  .card-footer [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <PFileUpload>
      <SlCard slot="content" className="card-footer">
        This card is a dropzone. You can drag all sorts of things in it!
        <div slot="footer">
          <SlRating></SlRating>
        </div>
      </SlCard>
    </PFileUpload>

    <style>{css}</style>
  </>
);
```
