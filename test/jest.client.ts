module.exports = {
  ...require('./jest.common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom', // configure Jest's testing environment
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // make jestDOM expect assertion extensions available to all tests automatically.
  snapshotSerializers: ['@emotion/jest/serializer'], // include our emotion CSS styles via Theme UI in our React component snapshots.
};

export {};
