module.exports = {
  plugins: ['react', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /** jsx-a11y */
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-quotes': 'error',

    /** react */
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'off',
  },
}