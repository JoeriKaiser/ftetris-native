module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-line-length-legacy',
  ],
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    'react-native/react-native': true,
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'react-native', 'perfectionist', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
};
