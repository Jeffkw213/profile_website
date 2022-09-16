module.exports = {
  plugins: ['unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:vitest-globals/recommended',
    // This disables the formatting rules in ESLint that Prettier handles
    'eslint-config-prettier'
  ],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      // Automatically detects the version of React
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx']
      }
    }
  },
  env: {
    browser: true,
    node: true,
    'vitest-globals/env': true
  }
};
