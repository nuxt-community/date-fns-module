module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    [require('../../../'), ['es', 'ru']]
  ]
}
