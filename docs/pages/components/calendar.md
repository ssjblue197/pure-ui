---
meta:
  title: Calendar
  description: Calendar shows a monthly view of the Gregorian calendar, optionally allowing users to interact with dates.
layout: component
---

```html:preview
<p-calendar type="single" class="calendar-preview"
  format="YYYY-MM-DD"
>
  <div slot="footer"></div>
</p-calendar>

<script>

  const calendar = document.querySelector('.calendar-preview');
  const today = new Date();

  calendar.value = [
    '2025-03-20',
  ];

  calendar.addEventListener('p-change', (e) => {
    calendar.value = e.target.value;
  })


</script>
```
