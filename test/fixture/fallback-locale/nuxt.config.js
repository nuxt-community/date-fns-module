module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  dateFns: {
    locales: 'unsupportedLocale',
    fallbackLocale: 'es'
  }
}
