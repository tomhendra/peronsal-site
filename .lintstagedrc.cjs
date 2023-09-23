module.exports = {
  // type check TS|TSX files
  '**/*.+(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',
  // type check Astro files with @astrojs/check
  '**/*.astro': () => 'astro check',
  // lint & format
  '**/*.(ts|tsx|js|astro|mdx)': (filenames) => [
    `eslint ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')} --plugin=prettier-plugin-astro`,
  ],
  // format only
  '**/*.+(json|md)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
