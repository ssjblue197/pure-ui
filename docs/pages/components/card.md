---
meta:
  title: Card
  description: Cards can be used to group related subjects in a container.
layout: component
---

```html:preview
<p-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <p-button variant="primary" pill>More Info</p-button>
    <p-rating></p-rating>
  </div>
</p-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--p-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PCard from 'pure-uikit/dist/react/card';
import PRating from 'pure-uikit/dist/react/rating';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--p-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <PCard className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <PButton variant="primary" pill>
          More Info
        </PButton>
        <PRating></PRating>
      </div>
    </PCard>

    <style>{css}</style>
  </>
);
```

## Examples

### Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html:preview
<p-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</p-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx:react
import PCard from 'pure-uikit/dist/react/card';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <PCard className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </PCard>

    <style>{css}</style>
  </>
);
```

### Card with Header

Headers can be used to display titles and more.

```html:preview
<p-card class="card-header">
  <div slot="header">
    Header Title
    <p-icon-button name="gear" label="Settings"></p-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</p-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header p-icon-button {
    font-size: var(--p-font-size-medium);
  }
</style>
```

```jsx:react
import PCard from 'pure-uikit/dist/react/card';
import PIconButton from 'pure-uikit/dist/react/icon-button';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header p-icon-button {
    font-size: var(--p-font-size-medium);
  }
`;

const App = () => (
  <>
    <PCard className="card-header">
      <div slot="header">
        Header Title
        <PIconButton name="gear"></PIconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </PCard>

    <style>{css}</style>
  </>
);
```

### Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html:preview
<p-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <p-rating></p-rating>
    <p-button variant="primary">Preview</p-button>
  </div>
</p-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx:react
import PButton from 'pure-uikit/dist/react/button';
import PCard from 'pure-uikit/dist/react/card';
import PRating from 'pure-uikit/dist/react/rating';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const App = () => (
  <>
    <PCard className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <PRating></PRating>
        <PButton slot="footer" variant="primary">
          Preview
        </PButton>
      </div>
    </PCard>

    <style>{css}</style>
  </>
);
```

### Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html:preview
<p-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</p-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx:react
import PCard from 'pure-uikit/dist/react/card';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <PCard className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </PCard>

    <style>{css}</style>
  </>
);
```
