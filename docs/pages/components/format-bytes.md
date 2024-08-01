---
meta:
  title: Format Bytes
  description: Formats a number as a human readable bytes value.
layout: component
---

```html:preview
<div class="format-bytes-overview">
  The file is <p-format-bytes value="1000"></p-format-bytes> in size. <br /><br />
  <p-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></p-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('p-format-bytes');
  const input = container.querySelector('p-input');

  input.addEventListener('p-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PButton from '@pure-ui/core/dist/react/button';
import PFormatBytes from '@pure-ui/core/dist/react/format-bytes';
import PInput from '@pure-ui/core/dist/react/input';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <PFormatBytes value={value} /> in size.
      <br />
      <br />
      <PInput
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onPInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

{% endraw %}

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html:preview
<p-format-bytes value="12"></p-format-bytes><br />
<p-format-bytes value="1200"></p-format-bytes><br />
<p-format-bytes value="1200000"></p-format-bytes><br />
<p-format-bytes value="1200000000"></p-format-bytes>
```

```jsx:react
import PFormatBytes from '@pure-ui/core/dist/react/format-bytes';

const App = () => (
  <>
    <PFormatBytes value="12" />
    <br />
    <PFormatBytes value="1200" />
    <br />
    <PFormatBytes value="1200000" />
    <br />
    <PFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html:preview
<p-format-bytes value="12" unit="bit"></p-format-bytes><br />
<p-format-bytes value="1200" unit="bit"></p-format-bytes><br />
<p-format-bytes value="1200000" unit="bit"></p-format-bytes><br />
<p-format-bytes value="1200000000" unit="bit"></p-format-bytes>
```

```jsx:react
import PFormatBytes from '@pure-ui/core/dist/react/format-bytes';

const App = () => (
  <>
    <PFormatBytes value="12" unit="bit" />
    <br />
    <PFormatBytes value="1200" unit="bit" />
    <br />
    <PFormatBytes value="1200000" unit="bit" />
    <br />
    <PFormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
<p-format-bytes value="12" lang="de"></p-format-bytes><br />
<p-format-bytes value="1200" lang="de"></p-format-bytes><br />
<p-format-bytes value="1200000" lang="de"></p-format-bytes><br />
<p-format-bytes value="1200000000" lang="de"></p-format-bytes>
```

```jsx:react
import PFormatBytes from '@pure-ui/core/dist/react/format-bytes';

const App = () => (
  <>
    <PFormatBytes value="12" lang="de" />
    <br />
    <PFormatBytes value="1200" lang="de" />
    <br />
    <PFormatBytes value="1200000" lang="de" />
    <br />
    <PFormatBytes value="1200000000" lang="de" />
  </>
);
```
