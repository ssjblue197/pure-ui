---
meta:
  title: Combobox
  description: Combobox combine select with input to filter option for advance select.
layout: component
---

```html preview
<p-combobox autofilter class="language-autocomplete">
  <p-input slot="trigger" class="language-input"></p-input>

  <p-menu-item value="english">English</p-menu-item>
  <p-menu-item value="mandarin">Mandarin</p-menu-item>
  <p-menu-item value="hindi">Hindi</p-menu-item>
  <p-menu-item value="spanish">Spanish</p-menu-item>
  <p-menu-item value="french">French</p-menu-item>
</p-combobox>

<script>
  const autocomplete = document.querySelector('.language-autocomplete');
  const input = document.querySelector('.language-input');
  autocomplete.addEventListener('p-select', event => {
    input.value = event.detail.item.textContent;
  });
</script>
```

```jsx:react
import PInput from 'pure-uikit/dist/react/input';
import PMenuItem from 'pure-uikit/dist/react/menu-item';
import PCombobox from 'pure-uikit/dist/react/combobox';

const App = () => (
  <PCombobox>
    <PInput slot="trigger" class="language-input"></PInput>
    <PMenuItem value="option-1">Option 1</PMenuItem>
    <PMenuItem value="option-2">Option 2</PMenuItem>
    <PMenuItem value="option-3">Option 3</PMenuItem>
    <PMenuItem value="option-4">Option 4</PMenuItem>
    <PMenuItem value="option-5">Option 5</PMenuItem>
    <PMenuItem value="option-6">Option 6</PMenuItem>
  </PCombobox>
);
```

### Async

```html preview
<p-combobox class="async-autocomplete">
  <p-input slot="trigger" class="async-input"></p-input>
</p-combobox>

<script>
  const autocomplete = document.querySelector('.async-autocomplete');
  const input = document.querySelector('.async-input');
  input.addEventListener('p-input', event => {
    autocomplete.loading = true;
    setTimeout(() => {
      const menuItemTags = ['English', 'Mandarin', 'Spanish']
        .filter(option => new RegExp(event.target.value, 'ig').test(option))
        .map(option => `<p-menu-item value="${option}">${option}</p-menu-item>`)
        .join('');
      autocomplete.querySelectorAll('p-menu-item').forEach(el => el.remove());
      autocomplete.insertAdjacentHTML('beforeend', menuItemTags);
      autocomplete.loading = false;
    }, 1000);
  });
  autocomplete.addEventListener('p-select', event => {
    input.value = event.detail.item.textContent;
  });
</script>
```

### Loading State

```html preview
<p-combobox class="loading-autocomplete">
  <p-input slot="trigger" class="loading-input"></p-input>

  <div slot="loading-text" style="margin: 1rem;">
    <p-skeleton effect="pulse"></p-skeleton>
    <p-skeleton effect="pulse"></p-skeleton>
    <p-skeleton effect="pulse"></p-skeleton>
  </div>
</p-combobox>

<script>
  const autocomplete = document.querySelector('.loading-autocomplete');
  const input = document.querySelector('.loading-input');
  input.addEventListener('p-input', event => {
    autocomplete.loading = true;
    setTimeout(() => {
      const menuItemTags = ['English', 'Mandarin', 'Spanish']
        .map(option => `<p-menu-item value="${option}">${option}</p-menu-item>`)
        .join('');
      autocomplete.querySelectorAll('p-menu-item').forEach(el => el.remove());
      autocomplete.insertAdjacentHTML('beforeend', menuItemTags);
      autocomplete.loading = false;
    }, 1000);
  });
  autocomplete.addEventListener('p-select', event => {
    input.value = event.detail.item.textContent;
  });
</script>

<style>
  p-combobox p-skeleton:not(:first-child) {
    margin-top: 1rem;
  }
</style>
```

### Empty State

```html preview
<p-combobox autofilter>
  <p-input slot="trigger"></p-input>
  <p-menu-item value="option-1">Option 1</p-menu-item>
  <p-menu-item value="option-2">Option 2</p-menu-item>
  <p-menu-item value="option-3">Option 3</p-menu-item>
  <div slot="empty-text" style="text-align: center; margin: var(--p-spacing-small); color: var(--p-color-neutral-500);">
    We could not find any matches. Please try again.
  </div>
</p-combobox>
```
[component-metadata:p-combobox]