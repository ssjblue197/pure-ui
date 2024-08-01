/** @type {import("prettier").Config} */
const config = {
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: true,
  semi: true,
  experimentalTernaries: false,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  proseWrap: "preserve",
  insertPragma: false,
  printWidth: 120,
  requirePragma: false,
  tabWidth: 2,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
};

export default config;
