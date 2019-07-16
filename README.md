# @nuxtjs/date-fns

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Modern JavaScript date utility library - [date-fns](https://date-fns.org/) for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/date-fns` dependency to your project

```bash
yarn add @nuxtjs/date-fns # or npm install @nuxtjs/date-fns
```

2. Add `@nuxtjs/date-fns` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/date-fns',

    // With options
    ['@nuxtjs/date-fns', { /* module options */ }]
  ]
}
```

### Using top level options

```js
{
  modules: [
    '@nuxtjs/date-fns'
  ],
  dateFns: {
    /* module options */
  }
}
```

## Options

### `locales`

- Default: `[]`

Locales to be imported.

### `defaultLocale`

- Default: `null`

You can preset default locale.

### `format`

- Default: `null`

You can preset default format.

## Usage

This module inject `$dateFns` to your project:

```html
<template>
  <div>
    // Using default format and locale
    {{ $dateFns.format(new Date()) }} 

    // Using custom format
    {{ $dateFns.format(new Date(), 'YYYY-MM-DDDD') }} 

    // Using custom format and locale
    {{ $dateFns.format(new Date(), 'YYYY-MM-DDDD', { locale: 'ru' }) }}

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

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

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
