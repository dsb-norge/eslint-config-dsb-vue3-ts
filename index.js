/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: [
    'vuejs-accessibility',
    '@stylistic'
  ],
  extends: [
    'plugin:@stylistic/recommended-extends',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:@stylistic/disable-legacy'
  ],
  env: {
    'vue/setup-compiler-macros': true,
    'node': true,
    'browser': true,
    'es2021': true
  },
  ignorePatterns: [ 'dist/**' ],
  rules: {
    '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
    '@stylistic/comma-dangle': [ 'error', 'never' ],
    '@stylistic/indent': [ 'error', 2 ],
    '@stylistic/object-curly-spacing': [ 'error', 'always' ],
    '@stylistic/padded-blocks': [ 'error', 'never' ],
    '@stylistic/quotes': [ 'error', 'single', { avoidEscape: true } ],
    '@stylistic/semi': [ 'error', 'never' ],
    '@stylistic/space-before-function-paren': [ 'error', 'always' ],
    '@stylistic/quote-props': [ 'error', 'consistent-as-needed' ],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-empty-component-block': 'error',
    'vue/object-curly-spacing': [ 'error', 'always' ],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error'
  },
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 2021
  }
}
