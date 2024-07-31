---
meta:
  title: Format Date
  description: Formats a date/time using the specified locale and options.
layout: component
---

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html:preview
<!-- Pure UI 2 release date 🎉 -->
<p-format-date date="2020-07-15T09:17:00-04:00"></p-format-date>
```

```jsx:react
import PFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => <PFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html:preview
<!-- Human-readable date -->
<p-format-date month="long" day="numeric" year="numeric"></p-format-date><br />

<!-- Time -->
<p-format-date hour="numeric" minute="numeric"></p-format-date><br />

<!-- Weekday -->
<p-format-date weekday="long"></p-format-date><br />

<!-- Month -->
<p-format-date month="long"></p-format-date><br />

<!-- Year -->
<p-format-date year="numeric"></p-format-date><br />

<!-- No formatting options -->
<p-format-date></p-format-date>
```

```jsx:react
import PFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => (
  <>
    {/* Human-readable date */}
    <PFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <PFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <PFormatDate weekday="long" />
    <br />

    {/* Month */}
    <PFormatDate month="long" />
    <br />

    {/* Year */}
    <PFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <PFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html:preview
<p-format-date hour="numeric" minute="numeric" hour-format="12"></p-format-date><br />
<p-format-date hour="numeric" minute="numeric" hour-format="24"></p-format-date>
```

```jsx:react
import PFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => (
  <>
    <PFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <PFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html:preview
English: <p-format-date lang="en"></p-format-date><br />
French: <p-format-date lang="fr"></p-format-date><br />
Russian: <p-format-date lang="ru"></p-format-date>
```

```jsx:react
import PFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => (
  <>
    English: <PFormatDate lang="en" />
    <br />
    French: <PFormatDate lang="fr" />
    <br />
    Russian: <PFormatDate lang="ru" />
  </>
);
```
