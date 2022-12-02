module.exports = {
  rules: {
    /**
     * Enforce default clauses in switch statements to be last
     * @see https://eslint.org/docs/latest/rules/default-case-last
     */
    'default-case-last': 'warn',

    /**
     * Enforce default parameters to be last
     * @see https://eslint.org/docs/latest/rules/default-param-last
     */
    'default-param-last': 'warn',

    /**
     * Enforce dot notation whenever possible
     * @see https://eslint.org/docs/latest/rules/dot-notation
     */
    'dot-notation': 'warn',

    /**
     * Require the use of `===` and `!==`
     * @see https://eslint.org/docs/latest/rules/eqeqeq
     */
    eqeqeq: 'warn',

    /**
     * Disallow lexical declarations in case clauses
     * @see https://eslint.org/docs/latest/rules/no-case-declarations
     */
    'no-case-declarations': 'warn',

    /**
     * Disallow arrow functions where they could be confused with comparisons
     * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
     */
    'no-confusing-arrow': 'warn',

    /**
     * Disallow the use of `console`
     * @see https://eslint.org/docs/latest/rules/no-console
     */
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],

    /**
     * Disallow deleting variables
     * @see https://eslint.org/docs/latest/rules/no-delete-var
     */
    'no-delete-var': 'warn',

    /**
     * Disallow `else` blocks after `return` statements in `if` statements
     * @see https://eslint.org/docs/latest/rules/no-else-return
     */
    'no-else-return': 'warn',

    /**
     * Disallow empty block statements
     * @see https://eslint.org/docs/latest/rules/no-empty
     */
    'no-empty': 'warn',

    /**
     * Disallow unnecessary calls to `.bind()`
     * @see https://eslint.org/docs/latest/rules/no-extra-bind
     */
    'no-extra-bind': 'warn',

    /**
     * Disallow unnecessary boolean casts
     * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'warn',

    /**
     * Disallow unnecessary semicolons
     * @see https://eslint.org/docs/latest/rules/no-extra-semi
     */
    'no-extra-semi': 'warn',

    /**
     * Disallow leading or trailing decimal points in numeric literals
     * @see https://eslint.org/docs/latest/rules/no-floating-decimal
     */
    'no-floating-decimal': 'warn',

    /**
     * Disallow assignments to native objects or read-only global variables
     * @see https://eslint.org/docs/latest/rules/no-global-assign
     */
    'no-global-assign': 'warn',

    /**
     * Disallow unnecessary nested blocks
     * @see https://eslint.org/docs/latest/rules/no-lone-blocks
     */
    'no-lone-blocks': 'warn',

    /**
     * Disallow `if` statements as the only statement in `else` blocks
     * @see https://eslint.org/docs/latest/rules/no-lonely-if
     */
    'no-lonely-if': 'warn',

    /**
     * Disallow nested ternary expressions
     * @see https://eslint.org/docs/latest/rules/no-nested-ternary
     */
    'no-nested-ternary': 'warn',

    /**
     * Disallow `\8` and `\9` escape sequences in string literals
     * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': 'warn',

    /**
     * Disallow octal literals
     * @see https://eslint.org/docs/latest/rules/no-octal
     */
    'no-octal': 'warn',

    /**
     * Disallow variable redeclaration
     * @see https://eslint.org/docs/latest/rules/no-redeclare
     */
    'no-redeclare': 'warn',

    /**
     * Disallow multiple spaces in regular expressions
     * @see https://eslint.org/docs/latest/rules/no-regex-spaces
     */
    'no-regex-spaces': 'warn',

    /**
     * Disallow unnecessary `return await`
     * @see https://eslint.org/docs/latest/rules/no-return-await
     */
    'no-return-await': 'warn',

    /**
     * Disallow comma operators
     * @see https://eslint.org/docs/latest/rules/no-sequences
     */
    'no-sequences': 'warn',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     * @see https://eslint.org/docs/latest/rules/no-shadow
     */
    'no-shadow': 'warn',

    /**
     * Disallow identifiers from shadowing restricted names
     * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': 'warn',

    /**
     * Disallow throwing literals as exceptions
     * @see https://eslint.org/docs/latest/rules/no-throw-literal
     */
    'no-throw-literal': 'warn',

    /**
     * Disallow initializing variables to `undefined`
     * @see https://eslint.org/docs/latest/rules/no-undef-init
     */
    'no-undef-init': 'warn',

    /**
     * Disallow ternary operators when simpler alternatives exist
     * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'warn',

    /**
     * Disallow unused labels
     * @see https://eslint.org/docs/latest/rules/no-unused-labels
     */
    'no-unused-labels': 'warn',

    /**
     * Disallow unnecessary `catch` clauses
     * @see https://eslint.org/docs/latest/rules/no-useless-catch
     */
    'no-useless-catch': 'warn',

    /**
     * Disallow unnecessary computed property keys in objects and classes
     * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'warn',

    /**
     * Disallow unnecessary concatenation of literals or template literals
     * @see https://eslint.org/docs/latest/rules/no-useless-concat
     */
    'no-useless-concat': 'warn',

    /**
     * Disallow unnecessary constructors
     * @see https://eslint.org/docs/latest/rules/no-useless-constructor
     */
    'no-useless-constructor': 'warn',

    /**
     * Disallow unnecessary escape characters
     * @see https://eslint.org/docs/latest/rules/no-useless-escape
     */
    'no-useless-escape': 'warn',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     * @see https://eslint.org/docs/latest/rules/no-useless-rename
     */
    'no-useless-rename': 'warn',

    /**
     * Require `let` or `const` instead of `var`
     * @see https://eslint.org/docs/latest/rules/no-var
     */
    'no-var': 'warn',

    /**
     * Disallow `with` statements
     * @see https://eslint.org/docs/latest/rules/no-with
     */
    'no-with': 'warn',

    /**
     * Require or disallow method and property shorthand syntax for object literals
     * @see https://eslint.org/docs/latest/rules/object-shorthand
     */
    'object-shorthand': 'warn',

    /**
     * Require `const` declarations for variables that are never reassigned after declared
     * @see https://eslint.org/docs/latest/rules/prefer-const
     */
    'prefer-const': 'warn',

    /**
     * Require using Error objects as Promise rejection reasons
     * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'warn',

    /**
     * Require rest parameters instead of `arguments`
     * @see https://eslint.org/docs/latest/rules/prefer-rest-params
     */
    'prefer-rest-params': 'warn',

    /**
     * Require spread operators instead of `.apply()`
     * @see https://eslint.org/docs/latest/rules/prefer-spread
     */
    'prefer-spread': 'warn',

    /**
     * Require template literals instead of string concatenation
     * @see https://eslint.org/docs/latest/rules/prefer-template
     */
    'prefer-template': 'warn',

    /**
     * Enforce consistent spacing after the `//` or `/*` in a comment
     * @see https://eslint.org/docs/latest/rules/spaced-comment
     */
    'spaced-comment': 'warn',

    /**
     * Require or disallow "Yoda" conditions
     * @see https://eslint.org/docs/latest/rules/yoda
     */
    yoda: 'warn',
  },
}
