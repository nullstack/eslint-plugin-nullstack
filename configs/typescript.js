module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.nts'],
      rules: {
        /**
         * Disables rules which are already handled by TypeScript.
         * Based on: https://github.com/typescript-eslint/typescript-eslint/blob/v5.42.0/packages/eslint-plugin/src/configs/eslint-recommended.ts
         */

        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-new-symbol': 'off', // ts(2588)
        'no-obj-calls': 'off', // ts(2349)
        'no-redeclare': 'off', // ts(2451)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376)
        'no-undef': 'off', // ts(2304)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'valid-typeof': 'off', // ts(2367)

        /**
         * Based on: https://github.com/typescript-eslint/typescript-eslint/blob/v5.42.0/packages/eslint-plugin/src/configs/recommended.ts
         */

        /**
         * Require that function overload signatures be consecutive.
         * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
         */
        '@typescript-eslint/adjacent-overload-signatures': 'warn',

        /**
         * Disallow `@ts-<directive>` comments or require descriptions after directives.
         * @see https://typescript-eslint.io/rules/ban-ts-comment
         */
        '@typescript-eslint/ban-ts-comment': 'error',

        /**
         * Disallow certain types.
         * @see https://typescript-eslint.io/rules/ban-types
         */
        '@typescript-eslint/ban-types': 'error',

        /**
         * Disallow the declaration of empty interfaces.
         * @see https://typescript-eslint.io/rules/no-empty-interface
         */
        '@typescript-eslint/no-empty-interface': 'warn',

        /**
         * Disallow extra non-null assertions.
         * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'warn',

        /**
         * Disallow unnecessary semicolons.
         * @see https://typescript-eslint.io/rules/no-extra-semi
         */
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'warn',

        /**
         * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
         * @see https://typescript-eslint.io/rules/no-inferrable-types
         */
        '@typescript-eslint/no-inferrable-types': 'warn',

        /**
         * Disallow literal numbers that lose precision.
         * @see https://typescript-eslint.io/rules/no-loss-of-precision
         */
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',

        /**
         * Enforce valid definition of `new` and `constructor`.
         * @see https://typescript-eslint.io/rules/no-misused-new
         */
        '@typescript-eslint/no-misused-new': 'error',

        /**
         * Disallow TypeScript namespaces.
         * @see https://typescript-eslint.io/rules/no-namespace
         */
        '@typescript-eslint/no-namespace': 'error',

        /**
         * Disallow non-null assertions after an optional chain expression.
         * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        /**
         * Disallow non-null assertions using the `!` postfix operator.
         * @see https://typescript-eslint.io/rules/no-non-null-assertion
         */
        '@typescript-eslint/no-non-null-assertion': 'error',

        /**
         * Disallow aliasing `this`.
         * @see https://typescript-eslint.io/rules/no-this-alias
         */
        '@typescript-eslint/no-this-alias': 'error',

        /**
         * Disallow unnecessary constraints on generic types.
         * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
         */
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        /**
         * Disallow unused variables.
         * @see https://typescript-eslint.io/rules/no-unused-vars
         */
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',

        /**
         * Enforce the use of `as const` over literal type.
         * @see https://typescript-eslint.io/rules/prefer-as-const
         */
        '@typescript-eslint/prefer-as-const': 'error',

        /**
         * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
         * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        /**
         * Disallow certain triple slash directives in favor of ES6-style import declarations.
         * @see https://typescript-eslint.io/rules/triple-slash-reference
         */
        '@typescript-eslint/triple-slash-reference': 'error',
      },
    },
  ],
}
