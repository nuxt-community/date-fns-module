jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('./fixture/nuxt.config')
config.dev = false

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

const setupNuxt = async (config) => {
  const nuxt = new Nuxt(config)
  await nuxt.ready()
  await new Builder(nuxt).build()
  port = await getPort()
  await nuxt.listen(port)

  return nuxt
}

const testSuite = (month = 'Dezember') => {
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
    expect(window.document.querySelector('p').textContent).toBe(month)
  })

  test('render year', async () => {
    const html = await get('/')
    expect(html).toContain('1995')
  })
}

describe('module', () => {
  beforeAll(async () => {
    nuxt = await setupNuxt(config)
  })

  afterAll(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })

  testSuite()
})

describe('module options as array', () => {
  beforeAll(async () => {
    nuxt = await setupNuxt({
      ...config,
      modules: [
        [require('../'), ['es', 'ru']]
      ]
    })
  })

  afterAll(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })

  testSuite()
})

describe('with default locale', () => {
  beforeAll(async () => {
    nuxt = await setupNuxt({
      ...config,
      dateFns: {
        locales: ['es', 'ru']
      }
    })
  })

  afterAll(async () => {
    if (nuxt) {
      await nuxt.close()
    }
  })

  testSuite('December')
})
