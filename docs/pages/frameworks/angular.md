---
meta:
  title: Angular
  description: Tips for using Pure UI in your Angular app.
---

# Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements, so you can use Pure UI in your Angular apps with ease.

## Installation

### Download the npm package

To add Pure UI to your Angular app, install the package from npm.

```bash
npm install pure-uikit
```

### Update the Angular Configuration

Next, [include a theme](/getting-started/themes). In this example, we'll import the light theme.

Its also important to load the components by using a `<script>` tag into the index.html file. However, the Angular way to do it is by adding a script configurations into your angular.json file as follows:

```json
"architect": {
  "build": {
    ...
    "options": {
      ...
      "styles": [
        "src/styles.scss",
        "pure-uikit/dist/themes/light.css"
       ],
      "scripts": [
        "pure-uikit/dist/pure-ui.js"
      ]
      ...
```

### Setting up the base path

Next, set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets in the `main.ts`. In this example, we'll use the CDN as a base path.

```jsx
import { setBasePath } from "pure-uikit/%NPMDIR%/utilities/base-path";

setBasePath("https://cdn.jsdelivr.net/npm/pure-uikit@%VERSION%/%CDNDIR%/");
```

:::tip
If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/pure-uikit/%NPMDIR%/assets` into a public folder in your app. Then you can point the base path to that folder instead.
:::

## Configuration

Then make sure to apply the custom elements schema as shown below.

```js
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

## Reference Pure UI components in your Angular component code

```js
import { PDrawer } from 'pure-uikit';

@Component({
  selector: 'app-drawer-example',
  template: '<div id="page"><button (click)="showDrawer()">Show drawer</button><p-drawer #drawer label="Drawer" class="drawer-focus" style="--size: 50vw"><p>Drawer content</p></p-drawer></div>'
})
export class DrawerExampleComponent implements OnInit {

  // use @ViewChild to get a reference to the #drawer element within component template
  @ViewChild('drawer')
  drawer?: ElementRef<PDrawer>;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  showDrawer() {
    // use nativeElement to access Pure UI components
    this.drawer?.nativeElement.show();
  }
}
```

Now you can start using Pure UI components in your app!

:::tip
Are you using Pure UI with Angular? [Help us improve this page!](https://github.com/ssjblue197/pure-ui/blob/next/docs/frameworks/angular.md)
:::
