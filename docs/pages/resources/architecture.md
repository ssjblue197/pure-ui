---
meta:
  title: Architecture
  description: Visual overview of the PureUI project structure and how each component is organized.
layout: default
---

# Architecture

This page documents the internal structure of PureUI at two levels:

1. How the full project fits together.
2. How an individual component is organized.

## Project Overview

PureUI is a Lit-based web component library. Source code lives in `src/`, docs live in `docs/`, and build scripts generate the distributable output in `dist/`.

```mermaid
flowchart LR
  A["User / App"] --> B["src/pure-ui.ts"]
  B --> C["Component entry files"]
  C --> D["Component classes"]
  D --> E["PureElement base class"]
  D --> F["Lit templates + reactive props"]
  D --> G["LocalizeController / utilities"]
  D --> H["Styles + themes"]
  B --> I["Events + utilities exports"]
  A --> J["docs/"]
  J --> K["Markdown pages"]
  K --> L["Examples, API notes, React snippets"]
  M["scripts/"] --> N["Build / metadata / icon / theme generation"]
  N --> O["dist/"]
  O --> P["Published package"]
```

## Component Anatomy

Most components follow the same split:

- `*.component.ts` contains the Lit component implementation.
- `*.ts` registers the custom element and re-exports the class.
- `*.styles.ts` contains component styling.
- `*.test.ts` verifies behavior and accessibility.
- `docs/pages/components/*.md` describes usage and examples.

```mermaid
flowchart LR
  A["src/components/<name>/"]
  A --> B["<name>.component.ts"]
  A --> C["<name>.ts"]
  A --> D["<name>.styles.ts"]
  A --> E["<name>.test.ts"]
  A --> F["docs/pages/components/<name>.md"]

  B --> G["Extends PureElement"]
  B --> H["Defines reactive properties"]
  B --> I["Uses Lit render()"]
  B --> J["Uses controllers/utilities"]
  C --> K["Registers tag name"]
  C --> L["Exports default + types"]
  D --> M["Shadow DOM styling"]
  E --> N["Runtime + accessibility tests"]
```

## Component Lifecycle

The typical runtime flow for a component is:

```mermaid
flowchart TD
  A["Tag registered via <name>.ts"] --> B["Browser creates custom element"]
  B --> C["Constructor runs"]
  C --> D["Base class registers dependencies"]
  D --> E["Properties initialize"]
  E --> F["Lit schedules render"]
  F --> G["render() returns template"]
  G --> H["Shadow DOM updates"]
  H --> I["User interaction / property changes"]
  I --> F
```

## Key Repository Areas

- `src/components/` holds the component source.
- `src/internal/` holds shared foundation code.
- `src/utilities/` contains controllers and helpers.
- `src/events/` defines shared custom event types.
- `src/themes/` contains theme CSS.
- `docs/` contains the generated documentation site.
- `scripts/` contains build and generation tooling.

## Notes

- Components are designed to be framework-agnostic because they are standards-based custom elements.
- Localization is handled through `LocalizeController` and browser APIs such as `Intl.DateTimeFormat` and `Intl.RelativeTimeFormat`.
- The public API is assembled from `src/pure-ui.ts`, which serves as the main entry point for the package.
