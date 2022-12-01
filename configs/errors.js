module.exports = {
  rules: {
    /**
     * Enforce `return` statements in callbacks of array methods
     * @see https://eslint.org/docs/latest/rules/array-callback-return
     */
    'array-callback-return': 'error',

    /**
     * Require `super()` calls in constructors
     * @see https://eslint.org/docs/latest/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * Enforce "for" loop update clause moving the counter in the right direction.
     * @see https://eslint.org/docs/latest/rules/for-direction
     */
    'for-direction': 'error',

    /**
     * Enforce `return` statements in getters
     * @see https://eslint.org/docs/latest/rules/getter-return
     */
    'getter-return': 'error',

    /**
     * Disallow using an async function as a Promise executor
     * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'error',

    /**
     * Disallow reassigning class members
     * @see https://eslint.org/docs/latest/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * Disallow comparing against -0
     * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'error',

    /**
     * Disallow assignment operators in conditional expressions
     * @see https://eslint.org/docs/latest/rules/no-cond-assign
     */
    'no-cond-assign': 'error',

    /**
     * Disallow reassigning `const` variables
     * @see https://eslint.org/docs/latest/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * Disallow constant expressions in conditions
     * @see https://eslint.org/docs/latest/rules/no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * Disallow control characters in regular expressions
     * @see https://eslint.org/docs/latest/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * Disallow the use of `debugger`
     * @see https://eslint.org/docs/latest/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * Disallow duplicate arguments in `function` definitions
     * @see https://eslint.org/docs/latest/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate class members
     * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow duplicate conditions in if-else-if chains
     * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'error',

    /**
     * Disallow duplicate keys in object literals
     * @see https://eslint.org/docs/latest/rules/no-dupe-keys
     */
    'no-dupe-keys': 'error',

    /**
     * Disallow duplicate case labels
     * @see https://eslint.org/docs/latest/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * Disallow duplicate module imports
     * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
     */
    'no-duplicate-imports': 'error',

    /**
     * Disallow empty character classes in regular expressions
     * @see https://eslint.org/docs/latest/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * Disallow empty destructuring patterns
     * @see https://eslint.org/docs/latest/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * Disallow reassigning exceptions in `catch` clauses
     * @see https://eslint.org/docs/latest/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * Disallow fallthrough of `case` statements
     * @see https://eslint.org/docs/latest/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow reassigning `function` declarations
     * @see https://eslint.org/docs/latest/rules/no-func-assign
     */
    'no-func-assign': 'error',

    /**
     * Disallow assigning to imported bindings
     * @see https://eslint.org/docs/latest/rules/no-import-assign
     */
    'no-import-assign': 'error',

    /**
     * Disallow variable or `function` declarations in nested blocks
     * @see https://eslint.org/docs/latest/rules/no-inner-declarations
     */
    'no-inner-declarations': 'error',

    /**
     * Disallow invalid regular expression strings in `RegExp` constructors
     * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'error',

    /**
     * Disallow irregular whitespace
     * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'error',

    /**
     * Disallow literal numbers that lose precision
     * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
     */
    'no-loss-of-precision': 'error',

    /**
     * Disallow characters which are made with multiple code points in character class syntax
     * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
     */
    'no-misleading-character-class': 'error',

    /**
     * Disallow `new` operators with the `Symbol` object
     * @see https://eslint.org/docs/latest/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow calling global object properties as functions
     * @see https://eslint.org/docs/latest/rules/no-obj-calls
     */
    'no-obj-calls': 'error',

    /**
     * Disallow returning values from Promise executor functions
     * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'error',

    /**
     * Disallow calling some `Object.prototype` methods directly on objects
     * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
     */
    'no-prototype-builtins': 'error',

    /**
     * Disallow assignments where both sides are exactly the same
     * @see https://eslint.org/docs/latest/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * Disallow comparisons where both sides are exactly the same
     * @see https://eslint.org/docs/latest/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * Disallow returning values from setters
     * @see https://eslint.org/docs/latest/rules/no-setter-return
     */
    'no-setter-return': 'error',

    /**
     * Disallow sparse arrays
     * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'error',

    /**
     * Disallow `this`/`super` before calling `super()` in constructors
     * @see https://eslint.org/docs/latest/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
     * @see https://eslint.org/docs/latest/rules/no-unreachable
     */
    'no-unreachable': 'error',

    /**
     * Disallow control flow statements in `finally` blocks
     * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'error',

    /**
     * Disallow negating the left operand of relational operators
     * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
     */
    'no-unsafe-negation': 'error',

    /**
     * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
     * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': 'error',

    /**
     * Disallow unused private class members
     * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
     */
    'no-unused-private-class-members': 'error',

    /**
     * Disallow unused variables
     * @see https://eslint.org/docs/latest/rules/no-unused-vars
     */
    'no-unused-vars': 'error',

    /**
     * Disallow useless backreferences in regular expressions
     * @see https://eslint.org/docs/latest/rules/no-useless-backreference
     */
    'no-useless-backreference': 'error',

    /**
     * Require calls to `isNaN()` when checking for `NaN`
     * @see https://eslint.org/docs/latest/rules/use-isnan
     */
    'use-isnan': 'error',

    /**
     * Enforce comparing `typeof` expressions against valid strings
     * @see https://eslint.org/docs/latest/rules/valid-typeof
     */
    'valid-typeof': 'error',
  },
}
