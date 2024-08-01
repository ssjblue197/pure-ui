---
meta:
  title: Alert
  description: Alerts are used to display important messages inline or as toast notifications.
layout: component
---

```html:preview
<p-alert open>
  <p-icon slot="icon" name="info-circle"></p-icon>
  This is a standard alert. You can customize its content and even the icon.
</p-alert>
```

```jsx:react
import PAlert from 'pure-uikit/dist/react/alert';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <PAlert open>
    <PIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </PAlert>
);
```

:::tip
Alerts will not be visible if the `open` attribute is not present.
:::

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html:preview
<p-alert variant="primary" open>
  <p-icon slot="icon" name="info-circle"></p-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</p-alert>

<br />

<p-alert variant="success" open>
  <p-icon slot="icon" name="check2-circle"></p-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</p-alert>

<br />

<p-alert variant="neutral" open>
  <p-icon slot="icon" name="gear"></p-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take effect on next login.
</p-alert>

<br />

<p-alert variant="warning" open>
  <p-icon slot="icon" name="exclamation-triangle"></p-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</p-alert>

<br />

<p-alert variant="danger" open>
  <p-icon slot="icon" name="exclamation-octagon"></p-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</p-alert>
```

```jsx:react
import PAlert from 'pure-uikit/dist/react/alert';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <>
    <PAlert variant="primary" open>
      <PIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </PAlert>

    <br />

    <PAlert variant="success" open>
      <PIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </PAlert>

    <br />

    <PAlert variant="neutral" open>
      <PIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take effect on next login.
    </PAlert>

    <br />

    <PAlert variant="warning" open>
      <PIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </PAlert>

    <br />

    <PAlert variant="danger" open>
      <PIcon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </PAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html:preview
<p-alert variant="primary" open closable class="alert-closable">
  <p-icon slot="icon" name="info-circle"></p-icon>
  You can close this alert any time!
</p-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('p-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx:react
import { useState } from 'react';
import PAlert from 'pure-uikit/dist/react/alert';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <PAlert open={open} closable onPAfterHide={handleHide}>
      <PIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </PAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html:preview
<p-alert variant="primary" open> Nothing fancy here, just a simple alert. </p-alert>
```

```jsx:react
import PAlert from 'pure-uikit/dist/react/alert';

const App = () => (
  <PAlert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </PAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html:preview
<div class="alert-duration">
  <p-button variant="primary">Show Alert</p-button>

  <p-alert variant="primary" duration="3000" closable>
    <p-icon slot="icon" name="info-circle"></p-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </p-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('p-button');
  const alert = container.querySelector('p-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration p-alert {
    margin-top: var(--p-spacing-medium);
  }
</style>
```

```jsx:react
import { useState } from 'react';
import PAlert from 'pure-uikit/dist/react/alert';
import PButton from 'pure-uikit/dist/react/button';
import PIcon from 'pure-uikit/dist/react/icon';

const css = `
  .alert-duration p-alert {
    margin-top: var(--p-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <PButton variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </PButton>

        <PAlert variant="primary" duration="3000" open={open} closable onPAfterHide={() => setOpen(false)}>
          <PIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </PAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html:preview
<div class="alert-toast">
  <p-button variant="primary">Primary</p-button>
  <p-button variant="success">Success</p-button>
  <p-button variant="neutral">Neutral</p-button>
  <p-button variant="warning">Warning</p-button>
  <p-button variant="danger">Danger</p-button>

  <p-alert variant="primary" duration="3000" closable>
    <p-icon slot="icon" name="info-circle"></p-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </p-alert>

  <p-alert variant="success" duration="3000" closable>
    <p-icon slot="icon" name="check2-circle"></p-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </p-alert>

  <p-alert variant="neutral" duration="3000" closable>
    <p-icon slot="icon" name="gear"></p-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
  </p-alert>

  <p-alert variant="warning" duration="3000" closable>
    <p-icon slot="icon" name="exclamation-triangle"></p-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </p-alert>

  <p-alert variant="danger" duration="3000" closable>
    <p-icon slot="icon" name="exclamation-octagon"></p-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </p-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`p-button[variant="${variant}"]`);
    const alert = container.querySelector(`p-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx:react
import { useRef } from 'react';
import PAlert from 'pure-uikit/dist/react/alert';
import PButton from 'pure-uikit/dist/react/button';
import PIcon from 'pure-uikit/dist/react/icon';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <PButton variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </PButton>

      <PButton variant="success" onClick={() => success.current.toast()}>
        Success
      </PButton>

      <PButton variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </PButton>

      <PButton variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </PButton>

      <PButton variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </PButton>

      <PAlert ref={primary} variant="primary" duration="3000" closable>
        <PIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </PAlert>

      <PAlert ref={success} variant="success" duration="3000" closable>
        <PIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </PAlert>

      <PAlert ref={neutral} variant="neutral" duration="3000" closable>
        <PIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take effect on next login.
      </PAlert>

      <PAlert ref={warning} variant="warning" duration="3000" closable>
        <PIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </PAlert>

      <PAlert ref={danger} variant="danger" duration="3000" closable>
        <PIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </PAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html:preview
<div class="alert-toast-wrapper">
  <p-button variant="primary">Create Toast</p-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('p-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('p-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <p-icon name="${icon}" slot="icon"></p-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.p-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.p-toast-stack {
  left: 0;
  right: auto;
}
```

:::tip
By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.
:::
