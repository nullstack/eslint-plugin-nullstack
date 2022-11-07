module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  rules: {
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    // 'import/order': [
    //   'warn',
    //   {
    //     groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
    //     pathGroups: [{ pattern: 'nullstack{,/**}', group: 'builtin', position: 'before' }],
    //     pathGroupsExcludedImportTypes: [],
    //     'newlines-between': 'always',
    //     alphabetize: { order: 'asc', caseInsensitive: true },
    //     warnOnUnassignedImports: true,
    //   },
    // ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.njs', '.nts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.nts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.njs', '.nts'],
      },
    },
  },
};
