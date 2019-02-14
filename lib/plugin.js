import dateFns from 'date-fns'

<%= options.locales.map(l => `import ${l} from 'date-fns/locale/${l}'`).join('\n') %>

export default (ctx, inject) => {
  const dateObj = {...dateFns}

  const locales = []
  <%= options.locales.map(l => `locales['${l}'] = ${l}` ).join('\n') %>

  const fnsToOverride = [
    'distanceInWords',
    'distanceInWordsStrict',
    'distanceInWordsToNow',
    'format',
    'formatDistance',
    'formatDistanceStrict',
    'formatRelative'
  ]

  fnsToOverride.forEach(value => {
    dateObj[value] = (date, baseDate, options) => {
      <% if(options.defaultLocale) { %>
      options = { ...{ locale: '<%= options.defaultLocale %>' }, ...options }
      <% } %>

      if (typeof options.locale === 'string') {
        if (locales[options.locale]) {
          options.locale = locales[options.locale]
        } else {
          console.warn(`[date-fns] locale '${options.locale}' not found.`)
        }
      }

      <% if(options.format) { %>
      if (value === 'format') {
        baseDate = baseDate || '<%= options.format %>'
      }
      <% } %>

      return dateFns[value](date, baseDate, options)
    }
  })

  ctx.$dateFns = dateObj
  inject('dateFns', dateObj)
}
