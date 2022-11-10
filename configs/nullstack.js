module.exports = {
  plugins: ['nullstack'],
  rules: {
    /**
     * Require or disallow an empty line between class members
     * @see https://eslint.org/docs/latest/rules/lines-between-class-members
     */
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],

    /**
     * Require or disallow padding within blocks
     * @see https://eslint.org/docs/latest/rules/padded-blocks
     */
    'padded-blocks': ['warn', { classes: 'always' }],

    /**
     * Disallow the use of undeclared variables unless mentioned in `global` comments
     * @see https://eslint.org/docs/latest/rules/no-undef
     */
    'no-undef': 'off',
    'nullstack/no-undef': 'error',

    /**
     * When using a boolean attribute in JSX, you can set the attribute value to `true` or omit the value.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'nullstack/jsx-boolean-value': 'warn',

    /**
     * Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
     * @see https://github.com/prettier/eslint-plugin-prettier
     */
    'nullstack/prettier': 'warn',

    /**
     * Components without children can be self-closed to avoid unnecessary extra closing tag.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'nullstack/self-closing-comp': 'warn',

    /**
     * Filter out the things caught by the no-unused-imports rule without double warnings.
     * As well as being able to set them at different warning levels.
     * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-vars.md
     */
    'no-unused-vars': 'off',
    'nullstack/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],

    /**
     * A rule to find unused-imports only, as well as an autofixer.
     * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
     */
    'nullstack/no-unused-imports': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.nts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'nullstack/no-undef': 'off',
      },
    },
  ],
};
