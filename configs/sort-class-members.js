module.exports = {
  plugins: ['sort-class-members'],
  rules: {
    'sort-class-members/sort-class-members': [
      'error',
      {
        order: [
          '[static-methods]',
          'prepare',
          'initiate',
          'launch',
          'hydrate',
          'update',
          'terminate',
          '[methods]',
          'render',
        ],
      },
    ],
  }
};