module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  coverageDirectory: '<rootDir>/coverage/server',
  testMatch: ['**/*.ssr.test.(ts|tsx)'],
};

export {};
