# eslint-config-dsb-vue3-ts

[![npm version](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue3-ts.svg)](https://badge.fury.io/js/%40dsb-norge%2Feslint-config-dsb-vue3-ts)
[![GitHub license](https://img.shields.io/npm/l/@dsb-norge/eslint-config-dsb-vue3-ts)](https://github.com/dsb-norge/eslint-config-dsb-vue3-ts/blob/master/LICENSE.md)

## Installation

The default export contains all default ESLint rules for [Vue3 TypeScript](https://github.com/vuejs/eslint-config-typescript) , including
the [recommended ruleset for Vue](https://eslint.vuejs.org/), the [opinionated recommended ruleset for TypeScript](https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/CONFIGS.md)
and the ones listed in the [rules section](https://github.com/dsb-norge/eslint-config-dsb-vue3-ts/blob/master/index.js) .

Note: It requires some peerDependencies as well.

Install the package with:

```sh
npx install-peerdeps --dev @dsb-norge/eslint-config-dsb-vue3-ts
```
 
Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "@dsb-norge/eslint-config-dsb-vue3-ts@latest" peerDependencies
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@dsb-norge/dsb-vue3-ts"
  }
}
```

or to your `.eslintrc`:

```json
{
  "extends": "@dsb-norge/dsb-vue3-ts"
}
```

or to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@dsb-norge/dsb-vue3-ts'
}
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- vue.js 3 and/or node environment
- browser and/or node environment
- vite
- TypeScript

Despite some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).
