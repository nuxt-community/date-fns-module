import dateFns from 'date-fns'

<%= options.locales.map(l => `import ${l} from 'date-fns/locale/${l}'`).join('\n') %>

export default (ctx, inject) => {
  const dateObj = {...dateFns}

  dateObj.distanceInWords = (date, baseDate, options) => {
    return dateFns.distanceInWords(date, baseDate, mergeOptions(options))
  }

  dateObj.distanceInWordsStrict = (date, baseDate, options) => {
    return dateFns.distanceInWordsStrict(date, baseDate, mergeOptions(options))
  }

  dateObj.distanceInWordsToNow = (date, options) => {
    return dateFns.distanceInWordsToNow(date, mergeOptions(options))
  }

  dateObj.format = (date, format, options) => {
    return dateFns.format(date, format || '<%= options.format %>', mergeOptions(options))
  }

  dateObj.formatDistance = (date, baseDate, options) => {
    return dateFns.formatDistance(date, baseDate, mergeOptions(options))
  }

  dateObj.formatDistanceStrict = (date, baseDate, options) => {
    return dateFns.formatDistanceStrict(date, baseDate, mergeOptions(options))
  }

  dateObj.formatRelative = (date, baseDate, options) => {
    return dateFns.formatRelative(date, baseDate, mergeOptions(options))
  }

  ctx.$dateFns = dateObj
  inject('dateFns', dateObj)
}

function mergeOptions(options) {
  const locales = []

  <%= options.locales.map(l => `locales['${l}'] = ${l}` ).join('\n') %>

  <% if(options.defaultLocale) { %>
  options = { locale: '<%= options.defaultLocale %>', ...options }
  <% } %>

  if (options && typeof options.locale === 'string') {
    if (locales[options.locale]) {
      options.locale = locales[options.locale]
    } else {
      console.warn(`[date-fns] locale '${options.locale}' not found.`)
    }
  }

  return options
}
