module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  coverageDirectory: '<rootDir>/coverage/server',
  testMatch: [
    '**/__server_tests__/**/*.[jt]s?(x)',
    '**/?(*.)ssr.+(spec|test).[jt]s?(x)',
  ],
};

export {};
