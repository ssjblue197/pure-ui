---
meta:
  title: Breadcrumb
  description: Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
layout: component
---

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html:preview
<p-breadcrumb>
  <p-breadcrumb-item>Catalog</p-breadcrumb-item>
  <p-breadcrumb-item>Clothing</p-breadcrumb-item>
  <p-breadcrumb-item>Women's</p-breadcrumb-item>
  <p-breadcrumb-item>Shirts &amp; Tops</p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import PBreadcrumb from 'pure-uikit/dist/react/breadcrumb';
import PBreadcrumbItem from 'pure-uikit/dist/react/breadcrumb-item';

const App = () => (
  <PBreadcrumb>
    <PBreadcrumbItem>Catalog</PBreadcrumbItem>
    <PBreadcrumbItem>Clothing</PBreadcrumbItem>
    <PBreadcrumbItem>Women's</PBreadcrumbItem>
    <PBreadcrumbItem>Shirts &amp; Tops</PBreadcrumbItem>
  </PBreadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html:preview
<p-breadcrumb>
  <p-breadcrumb-item href="https://example.com/home">Homepage</p-breadcrumb-item>

  <p-breadcrumb-item href="https://example.com/home/services">Our Services</p-breadcrumb-item>

  <p-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</p-breadcrumb-item>

  <p-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import PBreadcrumb from 'pure-uikit/dist/react/breadcrumb';
import PBreadcrumbItem from 'pure-uikit/dist/react/breadcrumb-item';

const App = () => (
  <PBreadcrumb>
    <PBreadcrumbItem href="https://example.com/home">Homepage</PBreadcrumbItem>

    <PBreadcrumbItem href="https://example.com/home/services">Our Services</PBreadcrumbItem>

    <PBreadcrumbItem href="https://example.com/home/services/digital">Digital Media</PBreadcrumbItem>

    <PBreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</PBreadcrumbItem>
  </PBreadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html:preview
<p-breadcrumb>
  <p-icon name="dot" slot="separator"></p-icon>
  <p-breadcrumb-item>First</p-breadcrumb-item>
  <p-breadcrumb-item>Second</p-breadcrumb-item>
  <p-breadcrumb-item>Third</p-breadcrumb-item>
</p-breadcrumb>

<br />

<p-breadcrumb>
  <p-icon name="arrow-right" slot="separator"></p-icon>
  <p-breadcrumb-item>First</p-breadcrumb-item>
  <p-breadcrumb-item>Second</p-breadcrumb-item>
  <p-breadcrumb-item>Third</p-breadcrumb-item>
</p-breadcrumb>

<br />

<p-breadcrumb>
  <span slot="separator">/</span>
  <p-breadcrumb-item>First</p-breadcrumb-item>
  <p-breadcrumb-item>Second</p-breadcrumb-item>
  <p-breadcrumb-item>Third</p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import 'pure-uikit/dist/components/icon/icon.js';
import PBreadcrumb from 'pure-uikit/dist/react/breadcrumb';
import PBreadcrumbItem from 'pure-uikit/dist/react/breadcrumb-item';

const App = () => (
  <>
    <PBreadcrumb>
      <p-icon name="dot" slot="separator" />
      <PBreadcrumbItem>First</PBreadcrumbItem>
      <PBreadcrumbItem>Second</PBreadcrumbItem>
      <PBreadcrumbItem>Third</PBreadcrumbItem>
    </PBreadcrumb>

    <br />

    <PBreadcrumb>
      <p-icon name="arrow-right" slot="separator" />
      <PBreadcrumbItem>First</PBreadcrumbItem>
      <PBreadcrumbItem>Second</PBreadcrumbItem>
      <PBreadcrumbItem>Third</PBreadcrumbItem>
    </PBreadcrumb>

    <br />

    <PBreadcrumb>
      <span slot="separator">/</span>
      <PBreadcrumbItem>First</PBreadcrumbItem>
      <PBreadcrumbItem>Second</PBreadcrumbItem>
      <PBreadcrumbItem>Third</PBreadcrumbItem>
    </PBreadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html:preview
<p-breadcrumb>
  <p-breadcrumb-item>
    <p-icon slot="prefix" name="house"></p-icon>
    Home
  </p-breadcrumb-item>
  <p-breadcrumb-item>Articles</p-breadcrumb-item>
  <p-breadcrumb-item>Traveling</p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import PBreadcrumb from 'pure-uikit/dist/react/breadcrumb';
import PBreadcrumbItem from 'pure-uikit/dist/react/breadcrumb-item';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <PBreadcrumb>
    <PBreadcrumbItem>
      <PIcon slot="prefix" name="house" />
      Home
    </PBreadcrumbItem>
    <PBreadcrumbItem>Articles</PBreadcrumbItem>
    <PBreadcrumbItem>Traveling</PBreadcrumbItem>
  </PBreadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html:preview
<p-breadcrumb>
  <p-breadcrumb-item>Documents</p-breadcrumb-item>
  <p-breadcrumb-item>Policies</p-breadcrumb-item>
  <p-breadcrumb-item>
    Security
    <p-icon slot="suffix" name="shield-lock"></p-icon>
  </p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import PBreadcrumb from 'pure-uikit/dist/react/breadcrumb';
import PBreadcrumbItem from 'pure-uikit/dist/react/breadcrumb-item';
import PIcon from 'pure-uikit/dist/react/icon';

const App = () => (
  <PBreadcrumb>
    <PBreadcrumbItem>Documents</PBreadcrumbItem>
    <PBreadcrumbItem>Policies</PBreadcrumbItem>
    <PBreadcrumbItem>
      Security
      <PIcon slot="suffix" name="shield-lock"></PIcon>
    </PBreadcrumbItem>
  </PBreadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html:preview
<p-breadcrumb>
  <p-breadcrumb-item>Homepage</p-breadcrumb-item>
  <p-breadcrumb-item>Our Services</p-breadcrumb-item>
  <p-breadcrumb-item>Digital Media</p-breadcrumb-item>
  <p-breadcrumb-item>
    Web Design
    <p-dropdown slot="suffix">
      <p-button slot="trigger" size="small" circle>
        <p-icon label="More options" name="three-dots"></p-icon>
      </p-button>
      <p-menu>
        <p-menu-item type="checkbox" checked>Web Design</p-menu-item>
        <p-menu-item type="checkbox">Web Development</p-menu-item>
        <p-menu-item type="checkbox">Marketing</p-menu-item>
      </p-menu>
    </p-dropdown>
  </p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import {
  PBreadcrumb,
  PBreadcrumbItem,
  PButton,
  PDropdown,
  PIcon,
  PMenu,
  PMenuItem
} from 'pure-uikit/dist/react';

const App = () => (
  <PBreadcrumb>
    <PBreadcrumbItem>Homepage</PBreadcrumbItem>
    <PBreadcrumbItem>Our Services</PBreadcrumbItem>
    <PBreadcrumbItem>Digital Media</PBreadcrumbItem>
    <PBreadcrumbItem>
      Web Design
      <PDropdown slot="suffix">
        <PButton slot="trigger" size="small" circle>
          <PIcon label="More options" name="three-dots"></PIcon>
        </PButton>
        <PMenu>
          <PMenuItem type="checkbox" checked>
            Web Design
          </PMenuItem>
          <PMenuItem type="checkbox">Web Development</PMenuItem>
          <PMenuItem type="checkbox">Marketing</PMenuItem>
        </PMenu>
      </PDropdown>
    </PBreadcrumbItem>
  </PBreadcrumb>
);
```
