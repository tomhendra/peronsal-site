module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: false,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  /** Astro language tools throws the following error when using shorthand:
   * Type 'string' is not assignable to type 'AstroBuiltinProps & Props'.
   * see: https://github.com/withastro/prettier-plugin-astro/pull/59
   */
  astroAllowShorthand: false,
};
