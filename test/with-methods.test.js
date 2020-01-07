const { setup, loadConfig, url } = require('@nuxtjs/module-test-utils')

describe('with methods', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'with-methods'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('dateFns should be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns).toBeDefined()
  })

  test('dateFns format should be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns.format).toBeDefined()
  })

  test('dateFns parseISO should be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns.parseISO).toBeDefined()
  })

  test('dateFns parse should NOT be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns.parse).toBeUndefined()
  })

  test('dateFns formatDistanceToNow should NOT be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns.formatDistanceToNow).toBeUndefined()
  })

  test('dateFns setWeekYear should NOT be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns.setWeekYear).toBeUndefined()
  })

  test('dateFns formatISO should NOT be defined', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))
    expect(window.$nuxt.$dateFns.formatISO).toBeUndefined()
  })
})
