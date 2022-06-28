module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['import', 'unused-imports'],
  rules: {
    // unused-imports
    'unused-imports/no-unused-imports': 'error',

    // import
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
  },
}