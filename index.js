module.exports = {
  rules: {
    'no-undef': require('./rules/no-undef'),
    prettier: require('./rules/prettier'),
    'self-closing-comp': require('eslint-plugin-react/lib/rules/self-closing-comp'),
    'jsx-boolean-value': require('eslint-plugin-react/lib/rules/jsx-boolean-value'),
  },
  configs: {
    recommended: {
      env: {
        es2021: true,
        node: true,
        browser: true,
      },
      extends: [
        './configs/errors',
        './configs/best-practices',
        './configs/typescript',
        './configs/imports',
        './configs/unused-imports',
        './configs/order-imports',
        './configs/nullstack',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
};
