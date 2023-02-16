module.exports = {
  plugins: ['import'],
  rules: {
    /**
     * Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node `require.resolve` behavior.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'error',

    /**
     * Verifies that all named imports are part of the set of named exports in the referenced module.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/named.md
     */
    'import/named': 'error',

    /**
     * Enforces names exist at the time they are dereferenced, when imported as a full namespace.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/namespace.md
     */
    'import/namespace': 'error',

    /**
     * If a default import is requested, this rule will report if there is no default export in the imported module.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/default.md
     */
    'import/default': 'error',

    /**
     * Reports funny business with exports, like repeated exports of names or defaults.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/export.md
     */
    'import/export': 'error',

    /**
     * Reports use of an exported name as the locally imported name of a default export.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'warn',

    /**
     * Reports use of an exported name as a property on the default export.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'warn',

    /**
     * Reports if a resolved path is imported more than once.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'warn',

    /**
     * Enforce a convention in the order of `require()` / `import` statements.
     * +(fixable) The `--fix` option on the [command line] automatically fixes problems reported by this rule.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md
     */
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [{ pattern: 'nullstack', group: 'builtin', position: 'before' }],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.njs', '.nts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts', '.tsx', '.nts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx', '.njs', '.nts'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.nts'],
      rules: {
        'import/named': 'off',
      },
    },
  ],
}
