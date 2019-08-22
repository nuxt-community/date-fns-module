jest.setTimeout(60000)

const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')

let nuxt

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
    ({ nuxt } = (await setup(loadConfig(__dirname))))
  })

  afterAll(async () => {
    await nuxt.close()
  })

  testSuite()
})

describe('module options as array', () => {
  beforeAll(async () => {
    ({ nuxt } = (await setup({
      ...loadConfig(__dirname),
      modules: [
        [require('../'), ['es', 'ru']]
      ]
    })))
  })

  afterAll(async () => {
    await nuxt.close()
  })

  testSuite()
})

describe('with default locale', () => {
  beforeAll(async () => {
    ({ nuxt } = (await setup({
      ...loadConfig(__dirname),
      dateFns: {
        locales: ['es', 'ru']
      }
    })))
  })

  afterAll(async () => {
    await nuxt.close()
  })

  testSuite('December')
})
