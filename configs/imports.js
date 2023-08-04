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
     * Reports if a resolved path is imported more than once.
     * @see https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'warn',
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
