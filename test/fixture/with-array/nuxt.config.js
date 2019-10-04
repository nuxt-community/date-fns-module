module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    [require('../../../'), ['es', 'ru']]
  ]
}
