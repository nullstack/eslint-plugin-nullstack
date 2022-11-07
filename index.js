module.exports = {
  rules: {
    'no-undef': require('./rules/no-undef'),
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
        require.resolve('./configs/prettier'),
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
