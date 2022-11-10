module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
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
