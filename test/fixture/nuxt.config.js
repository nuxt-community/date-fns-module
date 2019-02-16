const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    [require('../../'), ['es', 'ru']]
  ],
  dateFns: {
    defaultLocale: 'de',
    format: 'YYYY-MM-DD'
  }
}
