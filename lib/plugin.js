import * as dateFns from 'date-fns'

<% if(options.locales) { %>
import { <%= options.locales.join(', ') %> } from 'date-fns/locale'
<% } %>

export default (ctx, inject) => {
  const dateObj = {...dateFns}

  dateObj.format = (date, format, options) => {
    const parsedDate = typeof date !== 'string' ? date : dateFns.parseISO(date)

    return dateFns.format(parsedDate, format || '<%= options.format %>', mergeOptions(options))
  }

  dateObj.parse = (dateString, formatString, backupDate, options) => {
    return dateFns.parse(dateString, formatString, backupDate, mergeOptions(options))
  }

  const threeParams = [
    'differenceInCalendarWeeks',
    'formatDistance',
    'formatDistanceStrict',
    'formatRelative',
    'isSameWeek',
    'setDay',
    'setWeek',
    'setWeekYear'
  ]

  for (const fn of threeParams) {
    dateObj[fn] = (param1, param2, options) => {
      return dateFns[fn](param1, param2, mergeOptions(options))
    }
  }

  const twoParams = [
    'eachWeekOfInterval',
    'endOfWeek',
    'formatDistanceToNow',
    'getWeek',
    'getWeekOfMonth',
    'getWeeksInMonth',
    'getWeekYear',
    'isThisWeek',
    'lastDayOfWeek',
    'startOfWeek',
    'startOfWeekYear'
  ]

  for (const fn of twoParams) {
    dateObj[fn] = (param, options) => {
      return dateFns[fn](param, mergeOptions(options))
    }
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
    const locale = options.locale.replace(/[_-]/, '')
    if (locales[locale]) {
      options.locale = locales[locale]
    } else {
      console.warn(`[date-fns] locale '${options.locale}' not found.`)
    }
  }

  return options
}
