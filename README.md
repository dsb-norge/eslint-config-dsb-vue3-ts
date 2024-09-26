# eslint-config-dsb-vue3-ts

[![npm version](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue3-ts.svg)](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue3-ts)
[![GitHub license](https://img.shields.io/npm/l/@dsb-norge/eslint-config-dsb-vue3-ts)](https://github.com/dsb-norge/eslint-config-dsb-vue3-ts/blob/master/LICENSE.md)

## Installation

The default export contains all default ESLint rules for [Vue3 TypeScript](https://github.com/vuejs/eslint-config-typescript) , including
the [recommended ruleset for Vue](https://eslint.vuejs.org/), the [opinionated recommended ruleset for TypeScript](https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/CONFIGS.md)
and the ones listed in the [rules section](https://github.com/dsb-norge/eslint-config-dsb-vue3-ts/blob/master/index.js) .

Install the package with:

```sh
npm install --dev @dsb-norge/eslint-config-dsb-vue3-ts
```

## Usage

Now add the config to your`eslint.config.mjs` file:

```js
import dsbConfig from '@dsb-norge/eslint-config-dsb-vue3-ts'

export default [
  ...dsbConfig
]
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- eslint 9 and flat config
- vue.js 3 and/or node environment
- browser and/or node environment
- vite
- TypeScript

Despite some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/latest/use/configure/).


## Migrate from version 2.x to 3.x (eslint 8 to eslint 9)

### Package cleanup

- If installed, remove packages that are no longer needed in local package.json:
```sh
npm uninstall -D @rushstack/eslint-patch @stylistic/eslint-plugin @vue/eslint-config-typescript eslint-plugin-vue eslint-plugin-vuejs-accessibility
```
- The `eslint` library must be of version 9 or higher. If you are using `eslint` 8, you must upgrade to version 9 or higher.


```sh
npm install eslint@latest
```


### package.json scripts

- Update the scripts

```
 "scripts": {
    ...,
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
```

### Configuration
Configuration now lives in `eslint.config.mjs` instead of `.eslintrc.js`.

from:

```js
// .eslintrc.js
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@dsb-norge/dsb-vue3-ts'
  ],
  rules: {
    indent: [ 'error', 2, { SwitchCase: 1 } ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
```

to

```js
// eslint.config.mjs
import dsbConfig from '@dsb-norge/eslint-config-dsb-vue3-ts'

export default [
  ...dsbConfig,
  {
    rules: {
      // your custom overrides here
    }
  }
]

```

#### With cypress config
Same as over, but adding cypress for only the cypress files. Note the spread operator since we are wrapping this in a separate object,
this is different from what is described in the [cypress documentation](https://github.com/cypress-io/eslint-plugin-cypress/blob/cef4c0a8658595ede86eb8fde828f9ecb37b1bbf/FLAT-CONFIG.md).

See [eslint documentation](https://eslint.org/docs/latest/use/configure/combine-configs#apply-a-config-object-to-a-subset-of-files) for more information.

```js
// eslint.config.mjs
import dsbConfig from '@dsb-norge/eslint-config-dsb-vue3-ts'
import pluginCypress from 'eslint-plugin-cypress/flat'


export default [
  ...dsbConfig,
  {
    name: 'Cypress',
    ...pluginCypress.configs.recommended,
    files: [
      '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
    ],
    rules: {
      // your custom overrides for cypress here
    }
  },
  {
    rules: {
      // your custom overrides here
    }
  }
]
```
