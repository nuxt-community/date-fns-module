module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  dateFns: {
    locales: ['es', 'ru', 'pt-BR'],
    defaultLocale: 'en-US',
    format: 'yyyy-MM-dd',
    methods: ['format', 'parseISO']
  }
}
