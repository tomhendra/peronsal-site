module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': 'yarn type:check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
  // Run prettier on config files
  './*.(js|json|md)': 'prettier --write',
  // Run prettier on pages
  'pages/**/*.(ts|js)?(x)': 'prettier --write',
  // Run prettier on src
  'src/**/*.(ts|js)?(x)': 'prettier --write',
  // Run prettier on content
  'content/**/*.md?(x)': 'prettier --write',
};
