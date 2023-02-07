/**
 * Based on: https://github.com/kopiro/eslint-plugin-ssr-friendly
 */

const { browser: browserGlobals, node: nodeGlobals } = require('globals')

const isDOMGlobalName = (name) => {
  return name in browserGlobals && !(name in nodeGlobals)
}

const isMethodInNullstackClass = (scope, method) => {
  if (scope.block && scope.block.parent) {
    const { type, kind, key } = scope.block.parent
    return type === 'MethodDefinition' && kind === 'method' && key.name === method
  }
  return false
}

const reportReference = (context, rule) => (reference) => {
  const node = reference.identifier
  const { name, parent } = node

  // Make sure that `typeof MYVAR` is always allowed and DOM related typescript type or interface are allowed
  if (
    (parent.type === 'UnaryExpression' && parent.operator === 'typeof') ||
    parent.type === 'TSTypeReference' ||
    parent.type === 'TSInterfaceHeritage'
  ) {
    return
  }

  switch (rule) {
    case 'no-dom-globals-in-module-scope':
      if (reference.from.type === 'module' || reference.from.upper.type === 'global') {
        context.report({
          node,
          messageId: 'defaultMessage',
          data: {
            name,
          },
        })
      }
      return

    case 'no-dom-globals-in-prepare':
      if (isMethodInNullstackClass(reference.from, 'prepare')) {
        context.report({
          node,
          messageId: 'defaultMessage',
          data: {
            name,
          },
        })
      }
      return

    case 'no-dom-globals-in-initiate':
      if (isMethodInNullstackClass(reference.from, 'initiate')) {
        context.report({
          node,
          messageId: 'defaultMessage',
          data: {
            name,
          },
        })
      }
      return

    default:
      console.error(`Unexpected rule-name: ${rule}`)
      break
  }
}

const createFn = (rule) => (context) => {
  return {
    Program() {
      const filename = context.getFilename()
      if (/\.test\.(js|ts)x?$/.test(filename)) {
        return
      }

      const scope = context.getScope()

      // Report variables declared elsewhere (ex: variables defined as "global" by eslint)
      scope.variables.forEach((variable) => {
        if (!variable.defs.length && isDOMGlobalName(variable.name)) {
          variable.references.forEach(reportReference(context, rule))
        }
      })

      // Report variables not declared at all
      scope.through.forEach((reference) => {
        if (isDOMGlobalName(reference.identifier.name)) {
          reportReference(context, rule)(reference)
        }
      })
    },
  }
}

const createRule = (name, description, defaultMessage) => {
  return {
    [name]: {
      meta: {
        type: 'problem',
        docs: {
          description,
          recommended: true,
        },
        messages: {
          defaultMessage,
        },
      },
      create: createFn(name),
    },
  }
}

const rules = {
  ...createRule(
    'no-dom-globals-in-module-scope',
    'disallow use of DOM globals in module scope',
    "Use of DOM global '{{name}}' is forbidden in module scope",
  ),
  ...createRule(
    'no-dom-globals-in-prepare',
    'disallow use of DOM globals in prepare() method of a Nullstack class-component',
    "Use of DOM global '{{name}}' is forbidden in prepare(), consider moving this to hydrate()",
  ),
  ...createRule(
    'no-dom-globals-in-initiate',
    'disallow use of DOM globals in initiate() method of a Nullstack class-component',
    "Use of DOM global '{{name}}' is forbidden in initiate(), consider moving this to hydrate()",
  ),
}

module.exports = {
  rules,
}
