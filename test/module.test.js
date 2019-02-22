jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('./fixture/nuxt.config')

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('dateFns should be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns).toBeDefined()
  })

  test('render monday with es locale', async () => {
    const html = await get('/')
    expect(html).toContain('lunes')
  })

  test('render month', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    const month = window.document.querySelector('p').textContent
    expect(month).toBe('Dezember')
  })

  test('render year', async () => {
    const html = await get('/')
    expect(html).toContain('1995')
  })
})
