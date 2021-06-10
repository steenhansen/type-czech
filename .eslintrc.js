module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "camelcase": "off",
 "no-underscore-dangle": 0,
 "no-nested-ternary": 0,
  "max-len":  ["error", { "code":120, "ignoreComments": true }] ,
  },



};
