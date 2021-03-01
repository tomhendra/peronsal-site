import path from 'path';

module.exports = {
  rootDir: path.join(__dirname, '../..'),
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest', // for Next.js to support parsing via Babel for Jest.
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // do not transform modules imported from node_modules
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/legacy/',
  ],
  moduleNameMapper: {
    '@test/(.*)': '<rootDir>/test/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@types/(.*)': '<rootDir>/src/types/$1',
    '@theme/(.*)': '<rootDir>/src/theme/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '\\.css$': require.resolve('./style-mock.ts'), // mock because Jest tries to require CSS files like commonJS modules
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './file-mock.ts', // mock because Jest tries to require asset files like commonJS modules
    ),
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
