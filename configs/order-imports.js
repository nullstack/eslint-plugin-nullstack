module.exports = {
  plugins: ['import-helpers'],
  rules: {
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^nullstack/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
