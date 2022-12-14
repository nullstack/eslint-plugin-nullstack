/**
 * Based on: https://github.com/eslint/eslint/blob/v8.27.0/lib/rules/no-undef.js
 */

function hasTypeOfOperator(node) {
  const parent = node.parent
  return parent.type === 'UnaryExpression' && parent.operator === 'typeof'
}

function getClassName(node) {
  if (!node) return
  if (node.upper?.type === 'class') return node.upper.block.id.name
  return getClassName(node.upper)
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow the use of undeclared variables unless mentioned in `/* global */` comments',
      recommended: true,
      url: 'https://eslint.org/docs/rules/no-undef',
    },
    schema: [
      {
        type: 'object',
        properties: {
          typeof: {
            type: 'boolean',
            default: false,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      undef: "'{{name}}' is not defined.",
    },
  },
  create(context) {
    const options = context.options[0]
    const considerTypeOf = (options && options.typeof === true) || false

    const innerComponentsMap = new Map()

    let className = null

    return {
      ClassDeclaration(node) {
        className = node.body.parent.id?.name
      },
      'FunctionExpression:exit'(node) {
        const name = node.parent.key?.name
        if (name && name !== 'render' && name.startsWith('render')) {
          const innerComponentName = `${className}.${name.replace('render', '')}`
          innerComponentsMap.set(innerComponentName, true)
        }
      },
      'Program:exit'(/* node */) {
        const globalScope = context.getScope()

        globalScope.through.forEach((ref) => {
          const identifier = ref.identifier
          const className = getClassName(ref.from)
          const innerComponentName = className ? `${className}.${identifier.name}` : null

          if ((!considerTypeOf && hasTypeOfOperator(identifier)) || innerComponentsMap.has(innerComponentName)) {
            return
          }

          context.report({
            node: identifier,
            messageId: 'undef',
            data: identifier,
          })
        })
      },
    }
  },
}
