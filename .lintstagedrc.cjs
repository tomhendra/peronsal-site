module.exports = {
  // Type check TypeScript files
  '**/*.+(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',
  // Lint & Prettify TS and JS files
  '**/*.(js|ts|tsx|astro)': filenames => [
    `eslint ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  // Prettify other files
  '**/*.+(json|md|mdx)': filenames =>
    `prettier --write ${filenames.join(' ')}`,
};