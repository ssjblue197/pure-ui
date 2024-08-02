---
meta:
  title: Typography
  description: Typography tokens are used to maintain a consistent set of font styles throughout your app.
---

# Typography Tokens

Typography tokens are used to maintain a consistent set of font styles throughout your app.

## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token            | Value                                                                                                                                         | Example                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `--p-font-sans`  | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--p-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--p-font-serif` | Georgia, 'Times New Roman', serif                                                                                                             | <span style="font-family: var(--p-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--p-font-mono`  | SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;                                                                                | <span style="font-family: var(--p-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font size.

| Token                    | Value           | Example                                                        |
| ------------------------ | --------------- | -------------------------------------------------------------- |
| `--p-font-size-2x-small` | 0.625rem (10px) | <span style="font-size: var(--p-font-size-2x-small)">Aa</span> |
| `--p-font-size-x-small`  | 0.75rem (12px)  | <span style="font-size: var(--p-font-size-x-small)">Aa</span>  |
| `--p-font-size-small`    | 0.875rem (14px) | <span style="font-size: var(--p-font-size-small)">Aa</span>    |
| `--p-font-size-medium`   | 1rem (16px)     | <span style="font-size: var(--p-font-size-medium)">Aa</span>   |
| `--p-font-size-large`    | 1.25rem (20px)  | <span style="font-size: var(--p-font-size-large)">Aa</span>    |
| `--p-font-size-x-large`  | 1.5rem (24px)   | <span style="font-size: var(--p-font-size-x-large)">Aa</span>  |
| `--p-font-size-2x-large` | 2.25rem (36px)  | <span style="font-size: var(--p-font-size-2x-large)">Aa</span> |
| `--p-font-size-3x-large` | 3rem (48px)     | <span style="font-size: var(--p-font-size-3x-large)">Aa</span> |
| `--p-font-size-4x-large` | 4.5rem (72px)   | <span style="font-size: var(--p-font-size-4x-large)">Aa</span> |

## Font Weight

| Token                      | Value | Example                                                                                                        |
| -------------------------- | ----- | -------------------------------------------------------------------------------------------------------------- |
| `--p-font-weight-light`    | 300   | <span style="font-weight: var(--p-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>    |
| `--p-font-weight-normal`   | 400   | <span style="font-weight: var(--p-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>   |
| `--p-font-weight-semibold` | 500   | <span style="font-weight: var(--p-font-weight-medium);">The quick brown fox jumped over the lazy dog.</span> |
| `--p-font-weight-semibold` | 600   | <span style="font-weight: var(--p-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span> |
| `--p-font-weight-bold`     | 700   | <span style="font-weight: var(--p-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>     |

## Letter Spacing

| Token                       | Value    | Example                                                                                                            |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `--p-letter-spacing-denser` | -0.03em  | <span style="letter-spacing: var(--p-letter-spacing-denser);">The quick brown fox jumped over the lazy dog.</span> |
| `--p-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--p-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--p-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--p-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--p-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--p-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |
| `--p-letter-spacing-looser` | 0.15em   | <span style="letter-spacing: var(--p-letter-spacing-looser);">The quick brown fox jumped over the lazy dog.</span> |

## Line Height

| Token                    | Value | Example                                                                                                                                                                                                      |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--p-line-height-denser` | 1     | <div style="line-height: var(--p-line-height-denser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--p-line-height-dense`  | 1.4   | <div style="line-height: var(--p-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--p-line-height-normal` | 1.8   | <div style="line-height: var(--p-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--p-line-height-loose`  | 2.2   | <div style="line-height: var(--p-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--p-line-height-looser` | 2.6   | <div style="line-height: var(--p-line-height-looser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
