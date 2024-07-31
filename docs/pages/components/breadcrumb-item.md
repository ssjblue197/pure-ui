---
meta:
  title: Breadcrumb Item
  description: Breadcrumb Items are used inside breadcrumbs to represent different links.
layout: component
---

```html:preview
<p-breadcrumb>
  <p-breadcrumb-item>
    <p-icon slot="prefix" name="house"></p-icon>
    Home
  </p-breadcrumb-item>
  <p-breadcrumb-item>Clothing</p-breadcrumb-item>
  <p-breadcrumb-item>Shirts</p-breadcrumb-item>
</p-breadcrumb>
```

```jsx:react
import PBreadcrumb from '@shoelace-style/shoelace/dist/react/breadcrumb';
import PBreadcrumbItem from '@shoelace-style/shoelace/dist/react/breadcrumb-item';
import PIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <PBreadcrumb>
    <PBreadcrumbItem>
      <PIcon slot="prefix" name="house"></PIcon>
      Home
    </PBreadcrumbItem>
    <PBreadcrumbItem>Clothing</PBreadcrumbItem>
    <PBreadcrumbItem>Shirts</PBreadcrumbItem>
  </PBreadcrumb>
);
```

:::tip
Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).
:::
