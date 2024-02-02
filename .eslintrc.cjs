module.exports = {
  env: {
    browser: true,
    jquery: true,
    jest: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    typescript: {
      project: ['tsconfig.json'],
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules/',
    '**/node_modules/',
    '/**/node_modules/*',
    'out/',
    'dist/',
    'build/',
    'babel.config.js',
    '.eslintrc.cjs',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'prettier',
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'formatjs',
    '@tanstack/query',
  ],
  rules: {
    'react/prop-types': 'off',
    "import/prefer-default-export": "off",
    "quotes": ["error", "double"],
    'formatjs/no-offset': 'error',
    'react/function-component-definition': 'off',
    'no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
        leadingUnderscore: 'allow',
      },
    ],
  },
};
