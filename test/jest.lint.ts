import path from 'path';

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/legacy/',
  ],
  testMatch: ['**/?(*.)+(js|ts|tsx)'],
};
