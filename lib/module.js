const { resolve } = require('path')

module.exports = function (moduleOptions) {
  if (Array.isArray(moduleOptions)) {
    moduleOptions = { locales: moduleOptions }
  }

  const options = {
    locales: [],
    defaultLocale: null,
    fallbackLocale: null,
    format: null,
    methods: null,
    ...this.options['date-fns'],
    ...this.options.dateFns,
    ...moduleOptions
  }

  if (!Array.isArray(options.locales)) {
    options.locales = [options.locales]
  }

  if (options.defaultLocale && !options.locales.includes(options.defaultLocale)) {
    options.locales.push(options.defaultLocale)
  }

  if (options.fallbackLocale && !options.locales.includes(options.fallbackLocale)) {
    options.locales.push(options.fallbackLocale)
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'date-fns.js',
    options: {
      ...options,
      locales: options.locales.map(l => l.replace(/[_-]/, ''))
    }
  })
}

module.exports.meta = require('../package.json')
