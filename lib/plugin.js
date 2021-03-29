<% if (options.methods && options.methods.length) { %>import { <%= options.methods.join(', ') %> } from 'date-fns'
<% } else { %>import * as dateFns from 'date-fns'<% } %>

const locales = []

const importLocale = async (locale) => {
  try {
    locales[locale] = await import(`date-fns/locale/${locale}/index.js`)
  } catch (e) {
    //
  }
}

export default async (ctx, inject) => {
  <% if (options.methods && options.methods.length) { %>
  const dateFns = { <%= options.methods.join(', ') %> }
  <% } %>
  const dateObj = {...dateFns}

  <% if (options.locales && options.locales.length) { %>
  <%= options.locales.map(l => `await importLocale('${l}')`).join('\n') %>
  <% } %>

  function parsedDate(date) {
    if (dateFns.parseISO) {
      return typeof date !== 'string' ? date : dateFns.parseISO(date)
    }
    return date
  }

  if (dateFns.format) {
    dateObj.format = (date, format, options) => {
      return dateFns.format(parsedDate(date), format || '<%= options.format %>', mergeOptions(options))
    }
  }

  if (dateFns.parse) {
    dateObj.parse = (dateString, formatString, backupDate, options) => {
      return dateFns.parse(dateString, formatString, backupDate, mergeOptions(options))
    }
  }

  const threeParams = [
    'differenceInCalendarWeeks',
    'formatDistance',
    'formatDistanceStrict',
    'formatRelative',
    'isMatch',
    'isSameWeek',
    'setDay',
    'setWeek',
    'setWeekYear'
  ].filter(value => Object.keys(dateFns).includes(value))

  for (const fn of threeParams) {
    dateObj[fn] = (param1, param2, options) => {
      return dateFns[fn](param1, param2, mergeOptions(options))
    }
  }

  const twoParams = [
    'eachWeekOfInterval',
    'endOfWeek',
    'formatDistanceToNow',
    'formatDistanceToNowStrict',
    'formatDuration',
    'getWeek',
    'getWeekOfMonth',
    'getWeeksInMonth',
    'getWeekYear',
    'isThisWeek',
    'lastDayOfWeek',
    'startOfWeek',
    'startOfWeekYear'
  ].filter(value => Object.keys(dateFns).includes(value))

  for (const fn of twoParams) {
    dateObj[fn] = (param, options) => {
      return dateFns[fn](param, mergeOptions(options))
    }
  }

  ctx.$dateFns = dateObj
  inject('dateFns', dateObj)
}

function mergeOptions(options) {
  <% if (options.defaultLocale) { %>
  options = { locale: '<%= options.defaultLocale %>', ...options }
  <% } %>

  <% if (options.fallbackLocale) { %>
  options = { fallbackLocale: '<%= options.fallbackLocale %>', ...options }
  <% } %>

  if (options && typeof options.locale === 'string') {
    if (locales[options.locale]) {
      options.locale = locales[options.locale]
    } else if (options.fallbackLocale && locales[options.fallbackLocale]) {
      console.warn(`[date-fns] locale '${options.locale}' not found, using fallback locale '${options.fallbackLocale}'`)
      options.locale = locales[options.fallbackLocale]
    } else {
      console.warn(`[date-fns] locale '${options.locale}' not found.`)
    }
  }

  return options
}
