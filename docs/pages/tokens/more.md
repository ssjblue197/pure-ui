---
meta:
  title: More Design Tokens
  description: Additional design tokens can be found here.
---

# More Design Tokens

All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

:::tip
Currently, the source of design tokens is considered to be [`light.css`](https://github.com/ssjblue197/pure-ui/blob/next/src/themes/light.css). The dark theme, [dark.css](https://github.com/ssjblue197/pure-ui/blob/next/src/themes/dark.css), mirrors all of the same tokens with dark mode-specific values where appropriate. Work is planned to move all design tokens to a single file, perhaps JSON or YAML, in the near future.
:::

## Focus Rings

Focus ring tokens control the appearance of focus rings. Note that form inputs use `--p-input-focus-ring-*` tokens instead.

| Token                   | Value                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `--p-focus-ring-color`  | `var(--p-color-primary-600)` (light theme)<br>`var(--p-color-primary-700)` (dark theme) |
| `--p-focus-ring-style`  | `solid`                                                                                 |
| `--p-focus-ring-width`  | `3px`                                                                                   |
| `--p-focus-ring`        | `var(--p-focus-ring-style) var(--p-focus-ring-width) var(--p-focus-ring-color)`         |
| `--p-focus-ring-offset` | `1px`                                                                                   |

## Buttons

Button tokens control the appearance of buttons. In addition, buttons also currently use some form input tokens such as `--p-input-height-*` and `--p-input-border-*`. More button tokens may be added in the future to make it easier to style them more independently.

| Token                         | Value                        |
| ----------------------------- | ---------------------------- |
| `--p-button-font-size-small`  | `var(--p-font-size-x-small)` |
| `--p-button-font-size-medium` | `var(--p-font-size-small)`   |
| `--p-button-font-size-large`  | `var(--p-font-size-medium)`  |

## Form Inputs

Form input tokens control the appearance of form controls such as [input](/components/input), [select](/components/select), [textarea](/components/textarea), etc.

| Token                                  | Value                             |
| -------------------------------------- | --------------------------------- |
| `--p-input-height-small`               | `1.875rem` (30px @ 16px base)     |
| `--p-input-height-medium`              | `2.5rem` (40px @ 16px base)       |
| `--p-input-height-large`               | `3.125rem` (50px @ 16px base)     |
| `--p-input-background-color`           | `var(--p-color-neutral-0)`        |
| `--p-input-background-color-hover`     | `var(--p-input-background-color)` |
| `--p-input-background-color-focus`     | `var(--p-input-background-color)` |
| `--p-input-background-color-disabled`  | `var(--p-color-neutral-100)`      |
| `--p-input-border-color`               | `var(--p-color-neutral-300)`      |
| `--p-input-border-color-hover`         | `var(--p-color-neutral-400)`      |
| `--p-input-border-color-focus`         | `var(--p-color-primary-500)`      |
| `--p-input-border-color-disabled`      | `var(--p-color-neutral-300)`      |
| `--p-input-border-width`               | `1px`                             |
| `--p-input-required-content`           | `*`                               |
| `--p-input-required-content-offset`    | `-2px`                            |
| `--p-input-required-content-color`     | `var(--p-input-label-color)`      |
| `--p-input-border-radius-small`        | `var(--p-border-radius-medium)`   |
| `--p-input-border-radius-medium`       | `var(--p-border-radius-medium)`   |
| `--p-input-border-radius-large`        | `var(--p-border-radius-medium)`   |
| `--p-input-font-family`                | `var(--p-font-sans)`              |
| `--p-input-font-weight`                | `var(--p-font-weight-normal)`     |
| `--p-input-font-size-small`            | `var(--p-font-size-small)`        |
| `--p-input-font-size-medium`           | `var(--p-font-size-medium)`       |
| `--p-input-font-size-large`            | `var(--p-font-size-large)`        |
| `--p-input-letter-spacing`             | `var(--p-letter-spacing-normal)`  |
| `--p-input-color`                      | `var(--p-color-neutral-700)`      |
| `--p-input-color-hover`                | `var(--p-color-neutral-700)`      |
| `--p-input-color-focus`                | `var(--p-color-neutral-700)`      |
| `--p-input-color-disabled`             | `var(--p-color-neutral-900)`      |
| `--p-input-icon-color`                 | `var(--p-color-neutral-500)`      |
| `--p-input-icon-color-hover`           | `var(--p-color-neutral-600)`      |
| `--p-input-icon-color-focus`           | `var(--p-color-neutral-600)`      |
| `--p-input-placeholder-color`          | `var(--p-color-neutral-500)`      |
| `--p-input-placeholder-color-disabled` | `var(--p-color-neutral-600)`      |
| `--p-input-spacing-small`              | `var(--p-spacing-small)`          |
| `--p-input-spacing-medium`             | `var(--p-spacing-medium)`         |
| `--p-input-spacing-large`              | `var(--p-spacing-large)`          |
| `--p-input-focus-ring-color`           | `hsl(198.6 88.7% 48.4% / 40%)`    |
| `--p-input-focus-ring-offset`          | `0`                               |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                        | Value                        |
| -------------------------------------------- | ---------------------------- |
| `--p-input-filled-background-color`          | `var(--p-color-neutral-100)` |
| `--p-input-filled-background-color-hover`    | `var(--p-color-neutral-100)` |
| `--p-input-filled-background-color-focus`    | `var(--p-color-neutral-100)` |
| `--p-input-filled-background-color-disabled` | `var(--p-color-neutral-100)` |
| `--p-input-filled-color`                     | `var(--p-color-neutral-800)` |
| `--p-input-filled-color-hover`               | `var(--p-color-neutral-800)` |
| `--p-input-filled-color-focus`               | `var(--p-color-neutral-700)` |
| `--p-input-filled-color-disabled`            | `var(--p-color-neutral-800)` |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                              | Value                       |
| ---------------------------------- | --------------------------- |
| `--p-input-label-font-size-small`  | `var(--p-font-size-small)`  |
| `--p-input-label-font-size-medium` | `var(--p-font-size-medium`) |
| `--p-input-label-font-size-large`  | `var(--p-font-size-large)`  |
| `--p-input-label-color`            | `inherit`                   |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                  | Value                        |
| -------------------------------------- | ---------------------------- |
| `--p-input-help-text-font-size-small`  | `var(--p-font-size-x-small)` |
| `--p-input-help-text-font-size-medium` | `var(--p-font-size-small)`   |
| `--p-input-help-text-font-size-large`  | `var(--p-font-size-medium)`  |
| `--p-input-help-text-color`            | `var(--p-color-neutral-500)` |

## Toggles

Toggle tokens control the appearance of toggles such as [checkbox](/components/checkbox), [radio](/components/radio), [switch](/components/switch), etc.

| Token                    | Value                         |
| ------------------------ | ----------------------------- |
| `--p-toggle-size-small`  | `0.875rem` (14px @ 16px base) |
| `--p-toggle-size-medium` | `1.125rem` (18px @ 16px base) |
| `--p-toggle-size-large`  | `1.375rem` (22px @ 16px base) |

## Overlays

Overlay tokens control the appearance of overlays as used in [dialog](/components/dialog), [drawer](/components/drawer), etc.

| Token                          | Value                       |
| ------------------------------ | --------------------------- |
| `--p-overlay-background-color` | `hsl(240 3.8% 46.1% / 33%)` |

## Panels

Panel tokens control the appearance of panels such as those used in [dialog](/components/dialog), [drawer](/components/drawer), [menu](/components/menu), etc.

| Token                        | Value                        |
| ---------------------------- | ---------------------------- |
| `--p-panel-background-color` | `var(--p-color-neutral-0)`   |
| `--p-panel-border-color`     | `var(--p-color-neutral-200)` |
| `--p-panel-border-width`     | `1px`                        |

## Tooltips

Tooltip tokens control the appearance of tooltips. This includes the [tooltip](/components/tooltip) component as well as other implementations, such [range tooltips](/components/range).

| Token                          | Value                                                |
| ------------------------------ | ---------------------------------------------------- |
| `--p-tooltip-border-radius`    | `var(--p-border-radius-medium)`                      |
| `--p-tooltip-background-color` | `var(--p-color-neutral-800)`                         |
| `--p-tooltip-color`            | `var(--p-color-neutral-0)`                           |
| `--p-tooltip-font-family`      | `var(--p-font-sans)`                                 |
| `--p-tooltip-font-weight`      | `var(--p-font-weight-normal)`                        |
| `--p-tooltip-font-size`        | `var(--p-font-size-small)`                           |
| `--p-tooltip-line-height`      | `var(--p-line-height-dense)`                         |
| `--p-tooltip-padding`          | `var(--p-spacing-2x-small) var(--p-spacing-x-small)` |
| `--p-tooltip-arrow-size`       | `6px`                                                |
