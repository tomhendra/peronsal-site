module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    codeFrame: false
  },
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "import/prefer-default-export": ["off"],
    "max-len": ["warn", { code: 100 }],
    "no-nested-ternary": ["off"],
    "no-underscore-dangle": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/prop-types": ["off"],
    "jsx-a11y/label-has-associated-control": ["off"]
  }
};
