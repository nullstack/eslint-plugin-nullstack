module.exports = {
  extends: ['prettier'],
  plugins: ['nullstack'],
  rules: {
    'no-undef': 'off',
    'nullstack/no-undef': 'error',
    'nullstack/self-closing-comp': 'warn',
    'nullstack/jsx-boolean-value': 'warn',
    'nullstack/prettier': 'warn',
    'padded-blocks': ['warn', { classes: 'always' }],
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
  },
};
