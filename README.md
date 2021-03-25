# @nuxtjs/date-fns

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
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

### `fallbackLocale`

- Type: `String`
- Default: `null`

You can preset a fallback locale for when a method is called with an unsupported locale.

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
  asyncData({ $dateFns }) {
    return {
      dateFormatted: $dateFns.format(new Date())
    }
  }
}
</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/date-fns/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/date-fns

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/date-fns.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/date-fns

[github-actions-ci-src]: https://github.com/nuxt-community/date-fns-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/date-fns-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/date-fns-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/date-fns-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/date-fns.svg
[license-href]: https://npmjs.com/package/@nuxtjs/date-fns
