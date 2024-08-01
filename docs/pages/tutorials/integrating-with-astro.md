---
meta:
  title: Integrating with Astro
  description: This page explains how to integrate Pure UI with an Astro app.
---

# Integrating with Astro

This page explains how to integrate Pure UI with an Astro app.

:::tip
This is a community-maintained document. Please [ask the community](/resources/community) if you have questions about this integration. You can also [suggest improvements](https://github.com/ssjblue197/pure-ui/blob/next/docs/tutorials/integrating-with-astro.md) to make it better.
:::

## SSR and client scripts

In the following tutorial you will notice that Pure UI cannot be imported in the frontmatter of Astro files. This is because Pure UI relies on globals from the DOM to be present.

There is a [Lit + Astro integration for SSR](https://docs.astro.build/en/guides/integrations-guide/lit/) , however it will not work with Pure UI in its current state due to some reliance on DOM APIs that aren't shimmed. We are working to resolve this.

## Instructions - Astro 4.11.3

- Node: v18.17.1 or v20.3.0 or higher. ( v19 is not supported.)
- Astro: 4.11.3
- Pure UI: 2.15.1

To get started using Pure UI with Astro, the following packages must be installed.

```bash
npm install pure-uikit rollup-plugin-copy
```

### Importing components

In `/src/pages/index.astro`, set the base path and import Pure UI.

```html
---
// import default stylesheet
import "pure-uikit/dist/themes/light.css";
---

<html>
  <body>
    <p-button>Button</p-button>
  </body>
</html>

<script>
  // setBasePath to tell Pure UI where to load icons from.
  import { setBasePath } from "pure-uikit/dist/utilities/base-path.js";
  setBasePath("/pure-ui-assets/");

  // Load all components.
  import "pure-uikit";
</script>
```

:::tip
If you want to cherry pick components, replace the main Pure UI import with 'import "pure-uikit/dist/components/button/button.js";' for whichever component you would like.
:::

You only have to import in the main `index.astro` file. The components can be used anywhere throughout the project.

### Customizing animations

In `/src/pages/index.astro`, set custom animations after the Pure UI import.

```html
---
import { setBasePath } from "pure-uikit/dist/utilities/base-path.js";
setBasePath("dist/assets");
---

<html>
  <body>
    <p-tooltip content="This is a tooltip">
      <p-button>Hover Me</p-button>
    </p-tooltip>
  </body>
</html>

<script>
  // setBasePath to tell Pure UI where to load icons from.
  import { setBasePath } from "pure-uikit/dist/utilities/base-path.js";
  setBasePath("/pure-ui-assets/");

  // Load all components.
  import "pure-uikit";

  const duration = 3000;
  import { setDefaultAnimation } from "pure-uikit/dist/utilities/animation-registry.js";

  setDefaultAnimation("tooltip.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 },
    ],
    options: { duration: duration, easing: "ease" },
  });
</script>
```

## Modifying Astro Config

You'll notice the above steps never added our icons into our `/public` directory. To solve this, we can install `rollup-plugin-copy` to copy Pure UI's assets into your public directory.

Here's what your Astro config should look like:

```js
// astro.config.mjs

import { defineConfig } from "astro/config";
import copy from "rollup-plugin-copy";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      copy({
        // Copy only on first build. We dont want to trigger additional server reloads.
        copyOnce: true,
        hook: "buildStart",
        targets: [
          {
            src: "node_modules/pure-uikit/dist/assets/*",
            dest: "public/pure-ui-assets/assets/",
          },
        ],
      }),
    ],
  },
});
```
