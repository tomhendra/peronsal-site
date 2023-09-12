/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
