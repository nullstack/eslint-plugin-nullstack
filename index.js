module.exports = {
  rules: {
    'no-undef': require('./rules/no-undef'),
    prettier: require('./rules/prettier'),
    ...require('./rules/no-dom-globals').rules,
    'jsx-boolean-value': require('eslint-plugin-react/lib/rules/jsx-boolean-value'),
    'self-closing-comp': require('eslint-plugin-react/lib/rules/self-closing-comp'),
    'no-unused-imports': require('eslint-plugin-unused-imports/lib/rules/no-unused-imports'),
    'no-unused-vars': require('eslint-plugin-unused-imports/lib/rules/no-unused-vars'),
    'sort-class-members': require('eslint-plugin-sort-class-members/dist/rules/sort-class-members')
      .sortClassMembersRule,
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
}
