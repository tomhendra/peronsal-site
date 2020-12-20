module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  settings: { react: { version: 'detect' } },
  env: { node: true, browser: true, jest: true },
  plugins: [
    'prettier',
    '@typescript-eslint/eslint-plugin',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended', // disables ESLint rules that TypeScript renders unnecessary.
    'plugin:@typescript-eslint/recommended', // specific typescript-eslint plugin rules that are sometimes useful e.g. for interfaces.
    'eslint-config-prettier', // disable ESLint rules that Prettier renders unnecessary.
    'eslint-config-prettier/@typescript-eslint', // disable ESLint rules from typescript-eslint which conflict with prettier.
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/prop-types': 'off', // TypeScript handles prop types
    'react/react-in-jsx-scope': 'off', // not required for Next.js
    'jsx-a11y/anchor-is-valid': 'off', // incompatible with Next.js <Link /> (https://github.com/vercel/next.js/issues/5533)
    '@typescript-eslint/no-unused-vars': ['error'], // default is warn
    '@typescript-eslint/explicit-function-return-type': [
      // default is warn & provide options object
      'warn',
      {
        allowExpressions: true, // only functions which are part of a declaration will be checked
        allowConciseArrowFunctionExpressionsStartingWithVoid: true, // concise arrow functions that start with the void keyword will not be checked
      },
    ],
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }], // warn on unformatted code & use usePrettierrc rules
  },
};
