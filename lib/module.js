const { resolve } = require('path')

const defaults = {
  locales: [],
  defaultLocale: null,
  format: null
}

function dateFnsModule(moduleOptions) {
  if (Array.isArray(moduleOptions)) {
    moduleOptions = { locales: moduleOptions }
  }

  const options = {
    ...defaults,
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

module.exports = dateFnsModule
module.exports.meta = require('../package.json')
