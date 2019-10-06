module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'react/prop-types': 0,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.10.2',
    },
  },
};
