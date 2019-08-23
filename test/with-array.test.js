const { setup, loadConfig, get, url } = require('@nuxtjs/module-test-utils')

describe('with array', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'with-array'))))
  }, 60000)

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
    expect(window.document.querySelector('p').textContent).toBe('December')
  })

  test('render year', async () => {
    const html = await get('/')
    expect(html).toContain('1995')
  })
})
