---
meta:
  title: Format Number
  description: Formats a number using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html:preview
<div class="format-number-overview">
  <p-format-number value="1000"></p-format-number>
  <br /><br />
  <p-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></p-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('p-format-number');
  const input = container.querySelector('p-input');

  input.addEventListener('p-input', () => (formatter.value = input.value || 0));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import PFormatNumber from 'pure-uikit/dist/react/format-number';
import PInput from 'pure-uikit/dist/react/input';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <PFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html:preview
<p-format-number type="percent" value="0"></p-format-number><br />
<p-format-number type="percent" value="0.25"></p-format-number><br />
<p-format-number type="percent" value="0.50"></p-format-number><br />
<p-format-number type="percent" value="0.75"></p-format-number><br />
<p-format-number type="percent" value="1"></p-format-number>
```

```jsx:react
import PFormatNumber from 'pure-uikit/dist/react/format-number';

const App = () => (
  <>
    <PFormatNumber type="percent" value={0} />
    <br />
    <PFormatNumber type="percent" value={0.25} />
    <br />
    <PFormatNumber type="percent" value={0.5} />
    <br />
    <PFormatNumber type="percent" value={0.75} />
    <br />
    <PFormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html:preview
English: <p-format-number value="2000" lang="en" minimum-fraction-digits="2"></p-format-number><br />
German: <p-format-number value="2000" lang="de" minimum-fraction-digits="2"></p-format-number><br />
Russian: <p-format-number value="2000" lang="ru" minimum-fraction-digits="2"></p-format-number>
```

```jsx:react
import PFormatNumber from 'pure-uikit/dist/react/format-number';

const App = () => (
  <>
    English: <PFormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <PFormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <PFormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html:preview
<p-format-number type="currency" currency="USD" value="2000" lang="en-US"></p-format-number><br />
<p-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></p-format-number><br />
<p-format-number type="currency" currency="EUR" value="2000" lang="de"></p-format-number><br />
<p-format-number type="currency" currency="RUB" value="2000" lang="ru"></p-format-number><br />
<p-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></p-format-number>
```

```jsx:react
import PFormatNumber from 'pure-uikit/dist/react/format-number';

const App = () => (
  <>
    <PFormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <PFormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <PFormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <PFormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <PFormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```
