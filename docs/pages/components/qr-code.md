---
meta:
  title: QR Code
  description: Generates a QR code and renders it using the Canvas API.
layout: component
---

QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.

```html:preview
<div class="qr-overview">
  <p-qr-code value="https://pureui.online/" label="Scan this code to visit Pure UI on the web!"></p-qr-code>
  <br />

  <p-input maxlength="255" clearable label="Value"></p-input>
</div>

<script>
  const container = document.querySelector('.qr-overview');
  const qrCode = container.querySelector('p-qr-code');
  const input = container.querySelector('p-input');

  customElements.whenDefined('p-qr-code').then(() => {
    input.value = qrCode.value;
    input.addEventListener('p-input', () => (qrCode.value = input.value));
  });
</script>

<style>
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview p-input {
    margin-top: 1rem;
  }
</style>
```

```jsx:react
import { useState } from 'react';
import PQrCode from 'pure-uikit/dist/react/qr-code';
import PInput from 'pure-uikit/dist/react/input';

const css = `
  .qr-overview {
    max-width: 256px;
  }

  .qr-overview p-input {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [value, setValue] = useState('https://pureui.online/');

  return (
    <>
      <div className="qr-overview">
        <PQrCode value={value} label="Scan this code to visit Pure UI on the web!" />
        <br />

        <PInput maxlength="255" clearable onInput={event => setValue(event.target.value)} />
      </div>

      <style>{css}</style>
    </>
  );
};
```

## Examples

### Colors

Use the `fill` and `background` attributes to modify the QR code's colors. You should always ensure good contrast for optimal compatibility with QR code scanners.

```html:preview
<p-qr-code value="https://pureui.online/" fill="deeppink" background="white"></p-qr-code>
```

```jsx:react
import PQrCode from 'pure-uikit/dist/react/qr-code';

const App = () => <PQrCode value="https://pureui.online/" fill="deeppink" background="white" />;
```

### Size

Use the `size` attribute to change the size of the QR code.

```html:preview
<p-qr-code value="https://pureui.online/" size="64"></p-qr-code>
```

```jsx:react
import PQrCode from 'pure-uikit/dist/react/qr-code';

const App = () => <PQrCode value="https://pureui.online/" size="64" />;
```

### Radius

Create a rounded effect with the `radius` attribute.

```html:preview
<p-qr-code value="https://pureui.online/" radius="0.5"></p-qr-code>
```

```jsx:react
import PQrCode from 'pure-uikit/dist/react/qr-code';

const App = () => <PQrCode value="https://pureui.online/" radius="0.5" />;
```

### Error Correction

QR codes can be rendered with various levels of [error correction](https://www.qrcode.com/en/about/error_correction.html) that can be set using the `error-correction` attribute. This example generates four codes with the same value using different error correction levels.

```html:preview
<div class="qr-error-correction">
  <p-qr-code value="https://pureui.online/" error-correction="L"></p-qr-code>
  <p-qr-code value="https://pureui.online/" error-correction="M"></p-qr-code>
  <p-qr-code value="https://pureui.online/" error-correction="Q"></p-qr-code>
  <p-qr-code value="https://pureui.online/" error-correction="H"></p-qr-code>
</div>

<style>
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```

```jsx:react
import PQrCode from 'pure-uikit/dist/react/qr-code';

const css = `
  .qr-error-correction {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <>
      <div className="qr-error-correction">
        <PQrCode value="https://pureui.online/" error-correction="L" />
        <PQrCode value="https://pureui.online/" error-correction="M" />
        <PQrCode value="https://pureui.online/" error-correction="Q" />
        <PQrCode value="https://pureui.online/" error-correction="H" />
      </div>

      <style>{css}</style>
    </>
  );
};
```
