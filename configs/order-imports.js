module.exports = {
  plugins: ['import-helpers'],
  rules: {
    /**
     * Enforce sorted import declarations within modules
     * @see https://eslint.org/docs/latest/rules/sort-imports
     */
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],

    /**
     * Enforce a convention in the order of require() / import statements
     * @see https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
     */
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
