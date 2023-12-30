module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./packages/*/build.mjs'],
      },
    ],
    '@typescript-eslint/naming-convention': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: '18',
    },
  },
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.js'],
}
