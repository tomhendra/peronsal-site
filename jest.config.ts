module.exports = {
  ...require('./src/test/jest.common'),
  collectCoverageFrom: ['<rootDir>/src/**/*.+(ts|tsx)'], // only collected coverage report data from src
  coverageThreshold: {
    // set thresholds for test coverage 2% below the current level to allow for some flexibility
    global: {
      statements: 1,
      branches: 1,
      functions: 1,
      lines: 1,
    },
    '<rootDir>/src/utils/get-mdx-content.ts': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: [
    '<rootDir>/src/test/jest.client.ts',
    '<rootDir>/src/test/jest.server.ts',
    '<rootDir>/src/test/jest.lint.ts',
  ],
};

export {};
