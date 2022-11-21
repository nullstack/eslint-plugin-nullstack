# eslint-plugin-nullstack

> ESLint [plugin](https://eslint.org/docs/latest/developer-guide/working-with-plugins) + [shareable config](https://eslint.org/docs/latest/developer-guide/shareable-configs) for the [Nullstack](https://nullstack.app) framework

## Installation

```sh
# npm
$ npm add -D eslint-plugin-nullstack

# yarn
$ yarn add -D eslint-plugin-nullstack
```

## Usage

Once the `eslint-plugin-nullstack` package is installed, you can use it by specifying `plugin:nullstack/recommended` in the [`extends`](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```json
// .eslintrc

{
  "extends": "plugin:nullstack/recommended"
}
```

```json
// .prettierrc

{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120
}
```

```json
// package.json

"scripts": {
  "lint": "eslint \"**/*.{js,jsx,ts,tsx,njs,nts}\" --fix"
}
```

## About

This plugin is based on the following plugins and configurations:

- [`eslint:recommended`](http://eslint.org/docs/rules)
- [`plugin:@typescript-eslint/recommended`](https://typescript-eslint.io/docs)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-import-helpers`](https://github.com/Tibfib/eslint-plugin-import-helpers)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react)
- [`eslint-plugin-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports)

Nullstack rules:

- `nullstack/no-undef` - A custom implementation to support [Nullstack inner components](https://nullstack.app/stateful-components#inner-components)
- `nullstack/prettier` - A custom implementation to support the rules: [lines-between-class-members](https://eslint.org/docs/latest/rules/lines-between-class-members) and [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks) (class only)
- `nullstack/jsx-boolean-value` - Based on [`react/jsx-boolean-value`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)
- `nullstack/self-closing-comp` - Based on [`react/self-closing-comp`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)
- `nullstack/no-unused-imports` - Based on [`unused-imports/no-unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports)
- `nullstack/no-unused-vars` - Based on [`unused-imports/no-unused-vars`](https://github.com/sweepline/eslint-plugin-unused-imports)
