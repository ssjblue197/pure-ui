# PureUI Documentation

Welcome to **PureUI**, a lightweight, customizable web component library based on **Shoelace Style**. PureUI extends Shoelace with advanced components designed for building responsive and interactive user interfaces with minimal effort.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Components Overview](#components-overview)
5. [Customization](#customization)
6. [Examples](#examples)
7. [API Documentation](#api-documentation)
8. [Contributing](#contributing)
9. [License](#license)

## 1. Introduction

**PureUI** is a collection of web components designed to streamline the process of building modern UIs. It enhances **Shoelace** by adding more advanced components while maintaining simplicity and performance. With PureUI, you can easily integrate responsive, accessible, and themeable elements into your web applications.

### Key Features:
- **Customizable**: Built with customization in mind, PureUI components can be easily themed and adjusted to fit your design needs.
- **Responsive**: PureUI provides components that adapt seamlessly to different screen sizes.
- **Lightweight**: Focused on performance and efficiency, PureUI is designed to stay lightweight and fast.
- **Localization**: Components can be easily localized using the `lang` attribute. This attribute allows you to specify a custom translation for any component.
- **Advanced Components**: Includes a wide range of UI components like **Calendar**, **Data Table**, **Select Combobox**, **Pagination**, **Smart Container**, **File Upload**, and more.

## 2. Installation

PureUI can be easily installed using **npm**, **yarn**, or a CDN.

### npm
```bash
npm install pure-uikit
```

### yarn
```bash
yarn add pure-uikit
```

### CDN
Include the following script tag in your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pure-uikit@1.3.9/cdn/themes/light.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/pure-uikit@1.3.9/cdn/pure-ui-autoloader.js"></script>
```

## 3. Usage

Once installed, you can start using PureUI components in your HTML or JavaScript files. Here's an example of using a **SmartContainer** component.

```html
<p-smart-container>
  <p>This is a responsive container.</p>
</p-smart-container>
```

## 4. Components Overview

Here’s a brief overview of some of the most common and advanced PureUI components:

- **SmartContainer**: A responsive container that adjusts its layout dynamically.
- **Calendar**: An interactive calendar component with support for date selection and events.
- **Data Table**: A powerful data table with sorting, filtering, and pagination features.
- **Select Combobox**: A customizable dropdown with search functionality.
- **Paginate**: A pagination component to navigate large datasets easily.
- **File Upload**: A flexible file upload component with drag-and-drop support.

## 5. Customization

PureUI is designed to be highly customizable. You can override default styles using CSS variables or modify component behavior via attributes and methods.

### Example:
To customize a **Button**, you can use the following CSS variables:

```css
p-button {
  --button-background-color: #3498db;
  --button-text-color: #ffffff;
}
```

## 6. Examples

### Basic SmartContainer Example
```html
<p-smart-container>
  <h1>Welcome to PureUI</h1>
  <p>This container adjusts its layout based on the screen size.</p>
</p-smart-container>
```

### Calendar Example
```html
<p-calendar></p-calendar>
```

### Data Table Example
```html
<p-table>
  <!-- table data here -->
</p-table>
```

### File Upload Example
```html
<p-file-upload></p-file-upload>
```

## 7. API Documentation

Each component in PureUI comes with its own set of attributes, properties, and events.

For full API details, visit the [API documentation page](https://pureui.xyz/).

## 8. Contributing

We welcome contributions to PureUI! If you'd like to contribute, please follow the steps below:

1. Fork the repository.
2. Create a new branch.
3. Submit a pull request.

For detailed guidelines, check out our [contribution guide](https://pureui.xyz/resources/contributing/).

## 9. License

PureUI is licensed under the **MIT License**. See the [LICENSE](https://github.com/ssjblue197/pure-ui/blob/main/LICENSE.md) file for more details.

---

Thank you for choosing PureUI! We hope this library helps you build amazing user interfaces quickly and easily. For more information, visit our [official website](https://pureui.xuz).

---

Develop in Hanoi, Vietnam by [Mr.P](https://www.facebook.com/ssjblue197).

---

<!-- Documentation: [Pure UI](https://pureui.xyz) -->

Source: [https://github.com/ssjblue197/pure-ui](https://github.com/ssjblue197/pure-ui)

---

## Pure UI makers :arrow_double_up:

Pure UI maker, or "Pure UI developers," can use this documentation to learn how to build Pure UI from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use Pure UI!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of Pure UI.

If that's not what you're trying to do, the [documentation website](https://pureui.xyz) is where you want to be.

### What are you using to build Pure UI?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

## Support Me

If you like this project, please consider buying me a coffee. Your support helps me to keep the project alive and improving it.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/ssjblue1979)
