import pluginVue from 'eslint-plugin-vue'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import stylistic from '@stylistic/eslint-plugin'

export default [
  ...pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
  ...vueTsEslintConfig().map(config => ({
    ...config,
    files: [ '**/*.ts', '**/*.mts', '**/*.vue' ],
    ignores: [ '**/dist/**' ]
  })),
  stylistic.configs['recommended-flat'],
  stylistic.configs['disable-legacy'],
  {
    name: 'Overrides',
    rules: {
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
      '@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: true } ],
      '@stylistic/comma-dangle': [ 'error', 'never' ],
      '@stylistic/indent': [ 'error', 2, { SwitchCase: 1 } ],
      '@stylistic/member-delimiter-style': [ 'error', {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      } ],
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/padded-blocks': [ 'error', 'never' ],
      '@stylistic/quote-props': [ 'error', 'consistent-as-needed' ],
      '@stylistic/quotes': [ 'error', 'single', { avoidEscape: true } ],
      '@stylistic/semi': [ 'error', 'never' ],
      '@stylistic/space-before-function-paren': [ 'error', 'always' ],
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
      'vue/space-unary-ops': 'error'
    }
  },
  {
    name: 'Ignore',
    ignores: [ '**/dist/' ]
  }
]
