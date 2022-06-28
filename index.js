module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    './configs/eslint.js',
    './configs/prettier.js',
    './configs/react.js',
    './configs/typescript.js',
  ],
};
