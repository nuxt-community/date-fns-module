# @nuxtjs/date-fns

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Modern JavaScript date utility library - date-fns for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/date-fns` dependency to your project

```bash
yarn add --dev @nuxtjs/date-fns # or npm install --save-dev @nuxtjs/date-fns
```

2. Add `@nuxtjs/date-fns` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/date-fns',

    // With options
    ['@nuxtjs/date-fns', { /* module options */ }]
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

### Using top level options

```js
export default {
  buildModules: [
    '@nuxtjs/date-fns'
  ],
  dateFns: {
    /* module options */
  }
}
```

### Typescript setup

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9.

#### tsconfig.json

```json
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxtjs/date-fns"
    ]
  }
}
```

> **Why?**
>
> For typescript to be aware of the additions to the `nuxt Context`, the `vue instance` and the `vuex store`, the types need to be merged via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) by adding `@nuxtjs/date-fns` to your types.

## Options

### `locales`

- Type: `Array[String]`
- Default: `[]`

Locales to be imported.

### `defaultLocale`

- Type: `String`
- Default: `null`

You can preset default locale.

### `format`

- Type: `String`
- Default: `null`

You can preset default format.

### `methods`

- Type: `Array`
- Default: `null`

Methods to be imported. If not defined all methods are imported.

## Usage

This module inject `$dateFns` to your project:

```html
<template>
  <div>
    // Using default format and locale
    {{ $dateFns.format(new Date()) }}

    // Using custom format
    {{ $dateFns.format(new Date(), 'yyyy-MM-dd') }}

    // Using custom format and locale
    {{ $dateFns.format(new Date(), 'yyyy-MM-dd', { locale: 'ru' }) }}

    // Using asyncData
    {{ dateFormatted }}
  </div>
</template>

<script>
export default {
  asyncData(ctx) {
    return {
      // $dateFns is available in context
      dateFormatted: ctx.app.$dateFns.format(new Date())
    }
  }
}
</script>
```

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/date-fns/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/date-fns

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/date-fns.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/date-fns

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/date-fns-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/date-fns-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/date-fns-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/date-fns-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/date-fns.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/date-fns
