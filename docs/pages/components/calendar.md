---
meta:
  title: Calendar
  description: Calendar shows a monthly view of the Gregorian calendar, optionally allowing users to interact with dates.
layout: component
---

```html:preview
<p-calendar type="multiple" class="calendar-preview"
  format="YYYY-MM-DD"
>
  <div slot="footer"></div>
</p-calendar>

<script>

  const calendar = document.querySelector('.calendar-preview');
  const today = new Date();

  calendar.value = [
    '2024-09-09',
  ];


</script>
```

## Examples

### Month & Day Labels

Month and day labels can be customized using the `month-labels` and `day-labels` attributes. Note that month names are localized automatically based on the component's `lang` attribute, falling back to the document language.

```html:preview
<p-calendar month-labels="short" day-labels="narrow" 
  format="YYYY-MM-DD"
>
</p-calendar>
```

### Showing Adjacent Dates

By default, only dates in the target month are shown. You can fill the grid with adjacent dates using the `show-adjacent-dates` attribute.

```html:preview
<p-calendar show-adjacent-dates></p-calendar>
```

### Multiple Selection

One or more dates can be selected by setting the `value` property. An array of dates is accepted and the selection does not have to be continuous.

```html:preview
<p-calendar class="calendar-multiple-selection" type="multiple"></p-calendar>

<script>
  const calendar = document.querySelector('.calendar-multiple-selection');
  const today = new Date();

  calendar.value = [
    new Date(today.getFullYear(), today.getMonth(), 12),
    new Date(today.getFullYear(), today.getMonth(), 14),
    new Date(today.getFullYear(), today.getMonth(), 17),
    new Date(today.getFullYear(), today.getMonth(), 19)
  ];
</script>
```

### Range Selection

One or more dates can be selected by setting the `value` property. An array of dates is accepted and the selection does not have to be continuous. When the `type` attribute is set to `range`, the selected range of dates is highlighted on the calendar.

```html:preview
<p-calendar class="calendar-range-selection" type="range"></p-calendar>

<script>
  const calendar = document.querySelector('.calendar-range-selection');
  const today = new Date();

  calendar.value = [
    new Date(today.getFullYear(), today.getMonth(), 12),
    new Date(today.getFullYear(), today.getMonth(), 19)
  ];
</script>
```

### Mode Display

The `mode` property determines how the calendar is displayed. When set to `inline`, the calendar is displayed inline with the rest of the content, rather than in a popup (default).

```html:preview
<p-calendar class="calendar-mode-inline" mode="inline"></p-calendar>

<script>
  const calendar = document.querySelector('.calendar-mode-inline');
  const today = new Date();

  calendar.value = [
    new Date(today.getFullYear(), today.getMonth(), 12),
    new Date(today.getFullYear(), today.getMonth(), 19)
  ];
</script>
```

### With Borders

To add a border, set the `--border-width` custom property. You can further customize the border with `--border-color` and `--border-radius`.

```html:preview
<p-calendar style="--border-width: 1px;"></p-calendar>
```

### Localizing the Calendar

By default, the calendar will use the document's locale. You can use the `lang` attribute to change this.

```html:preview
<p-calendar lang="es"></p-calendar>
```

[component-metadata:p-calendar]
