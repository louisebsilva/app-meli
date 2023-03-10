/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    // suppress errors for missing 'import React' in files
   'react/react-in-jsx-scope': 'off'
  }
};
