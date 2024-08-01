---
meta:
  title: Vue (version 2)
  description: Tips for using Pure UI in your Vue 2 app.
---

# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Pure UI in your Vue apps with ease.

:::tip
These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).
:::

## Installation

To add Pure UI to your Vue app, install the package from npm.

```bash
npm install @pure-ui/core
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import '@pure-ui/core/%NPMDIR%/themes/light.css';
import { setBasePath } from '@pure-ui/core/%NPMDIR%/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@pure-ui/core@%VERSION%/%CDNDIR%/');
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/@pure-ui/core/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

You'll need to tell Vue to ignore Pure UI components. This is pretty easy because they all start with `p-`.

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/p-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can start using Pure UI components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<p-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<p-input v-model="name"></p-input>
<!-- This works, but it's a bit longer -->
<p-input :value="name" @input="name = $event.target.value"></p-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-p-model) adds a custom directive that will work just like `v-model` but for Pure UI components. To install it, use this command.

```bash
npm install @shoelace-style/vue-p-model@1
```

Next, import the directive and enable it like this.

```js
import Vue from 'vue';
import Pure UIModelDirective from '@shoelace-style/vue-p-model';
import App from './App.vue';

Vue.use(Pure UIModelDirective);
Vue.config.ignoredElements = [/p-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can use the `v-p-model` directive to keep your data in sync!

```html
<p-input v-p-model="name"></p-input>
```

:::tip
Are you using Pure UI with Vue? [Help us improve this page!](https://github.com/ssjblue197/pure-ui/blob/next/docs/frameworks/vue-2.md)
:::
