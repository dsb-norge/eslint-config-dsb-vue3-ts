/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
    browser: true,
    es2021: true
  },
  ignorePatterns: ['dist/**'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    indent: ['error', 2],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/multi-word-component-names': 'off'
  },
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 2021
  }
}
