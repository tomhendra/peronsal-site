module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'max-len': ['warn', { code: 100 }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-underscore-dangle': ['off'],
    'no-return-assign': ['off'],
    'no-nested-ternary': ['off'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.10.2',
    },
  },
};
