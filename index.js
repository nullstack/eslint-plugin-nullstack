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
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./configs/imports'),
        require.resolve('./configs/unused-imports'),
        require.resolve('./configs/order-imports'),
        require.resolve('./configs/nullstack'),
      ],
      parser: '@typescript-eslint/parser',
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
