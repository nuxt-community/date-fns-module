const { resolve } = require('path')

module.exports = function (moduleOptions) {
  if (Array.isArray(moduleOptions)) {
    moduleOptions = { locales: moduleOptions }
  }

  const options = {
    locales: [],
    defaultLocale: null,
    format: null,
    ...this.options['date-fns'],
    ...this.options.dateFns,
    ...moduleOptions
  }

  if (options.defaultLocale && !options.locales.includes(options.defaultLocale)) {
    options.locales.push(options.defaultLocale)
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'date-fns.js',
    options
  })
}

module.exports.meta = require('../package.json')
