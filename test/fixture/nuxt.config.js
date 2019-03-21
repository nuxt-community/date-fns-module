const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../') }
  ],
  dateFns: {
    locales: ['es', 'ru'],
    defaultLocale: 'de',
    format: 'YYYY-MM-DD'
  }
}
