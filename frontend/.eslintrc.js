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
    'import/prefer-default-export': ['warn'],
    'max-len': ['warn', { code: 100 }],
    'no-nested-ternary': ['off'],
    'no-return-assign': ['off'],
    'no-underscore-dangle': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['warn'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.10.2',
    },
  },
};
