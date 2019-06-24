interface DateFns {
  addDays(date: Date | string | number, amount: number): Date
  addHours(date: Date | string | number, amount: number): Date
  addISOYears(date: Date | string | number, amount: number): Date
  addMilliseconds(date: Date | string | number, amount: number): Date
  addMinutes(date: Date | string | number, amount: number): Date
  addMonths(date: Date | string | number, amount: number): Date
  addQuarters(date: Date | string | number, amount: number): Date
  addSeconds(date: Date | string | number, amount: number): Date
  addWeeks(date: Date | string | number, amount: number): Date
  addYears(date: Date | string | number, amount: number): Date
  areRangesOverlapping(
    initialRangeStartDate: Date | string | number,
    initialRangeEndDate: Date | string | number,
    comparedRangeStartDate: Date | string | number,
    comparedRangeEndDate: Date | string | number
  ): boolean
  closestIndexTo(dateToCompare: Date | string | number, datesArray: (Date | string | number)[]): number
  closestTo(dateToCompare: Date | string | number, datesArray: (Date | string | number)[]): Date
  compareAsc(dateLeft: Date | string | number, dateRight: Date | string | number): number
  compareDesc(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInCalendarDays(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInCalendarISOWeeks(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInCalendarISOYears(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInCalendarMonths(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInCalendarQuarters(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInCalendarWeeks(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): number
  differenceInCalendarYears(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInDays(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInHours(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInISOYears(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInMilliseconds(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInMinutes(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInMonths(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInQuarters(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInSeconds(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInWeeks(dateLeft: Date | string | number, dateRight: Date | string | number): number
  differenceInYears(dateLeft: Date | string | number, dateRight: Date | string | number): number
  distanceInWords(
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
    }
  ): string
  distanceInWordsStrict(
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: {
      addSuffix?: boolean,
      unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
      partialMethod?: 'floor' | 'ceil' | 'round',
      locale?: Object
    }
  ): string
  distanceInWordsToNow(
    date: Date | string | number,
    options?: {
      includeSeconds?: boolean,
      addSuffix?: boolean,
      locale?: Object
    }
  ): string
  eachDay(startDate: Date | string | number, endDate: Date | string | number, step?: number): Date[]
  endOfDay(date: Date | string | number): Date
  endOfHour(date: Date | string | number): Date
  endOfISOWeek(date: Date | string | number): Date
  endOfISOYear(date: Date | string | number): Date
  endOfMinute(date: Date | string | number): Date
  endOfMonth(date: Date | string | number): Date
  endOfQuarter(date: Date | string | number): Date
  endOfSecond(date: Date | string | number): Date
  endOfToday(): Date
  endOfTomorrow(): Date
  endOfWeek(date: Date | string | number, options?: {weekStartsOn?: number}): Date
  endOfYear(date: Date | string | number): Date
  endOfYesterday(): Date
  format(date: Date | string | number, format?: string, options?: {locale?: Object}): string
  getDate(date: Date | string | number): number
  getDay(date: Date | string | number): number
  getDayOfYear(date: Date | string | number): number
  getDaysInMonth(date: Date | string | number): number
  getDaysInYear(date: Date | string | number): number
  getHours(date: Date | string | number): number
  getISODay(date: Date | string | number): number
  getISOWeek(date: Date | string | number): number
  getISOWeeksInYear(date: Date | string | number): number
  getISOYear(date: Date | string | number): number
  getMilliseconds(date: Date | string | number): number
  getMinutes(date: Date | string | number): number
  getMonth(date: Date | string | number): number
  getOverlappingDaysInRanges(
    initialRangeStartDate: Date | string | number,
    initialRangeEndDate: Date | string | number,
    comparedRangeStartDate: Date | string | number,
    comparedRangeEndDate: Date | string | number
  ): number
  getQuarter(date: Date | string | number): number
  getSeconds(date: Date | string | number): number
  getTime(date: Date | string | number): number
  getYear(date: Date | string | number): number
  isAfter(date: Date | string | number, dateToCompare: Date | string | number): boolean
  isBefore(date: Date | string | number, dateToCompare: Date | string | number): boolean
  isDate(argument: any): boolean
  isEqual(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isFirstDayOfMonth(date: Date | string | number): boolean
  isFriday(date: Date | string | number): boolean
  isFuture(date: Date | string | number): boolean
  isLastDayOfMonth(date: Date | string | number): boolean
  isLeapYear(date: Date | string | number): boolean
  isMonday(date: Date | string | number): boolean
  isPast(date: Date | string | number): boolean
  isSameDay(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameHour(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameISOWeek(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameISOYear(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameMinute(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameMonth(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameQuarter(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameSecond(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSameWeek(
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: {
      weekStartsOn?: number
    }
  ): boolean
  isSameYear(dateLeft: Date | string | number, dateRight: Date | string | number): boolean
  isSaturday(date: Date | string | number): boolean
  isSunday(date: Date | string | number): boolean
  isThisHour(date: Date | string | number): boolean
  isThisISOWeek(date: Date | string | number): boolean
  isThisISOYear(date: Date | string | number): boolean
  isThisMinute(date: Date | string | number): boolean
  isThisMonth(date: Date | string | number): boolean
  isThisQuarter(date: Date | string | number): boolean
  isThisSecond(date: Date | string | number): boolean
  isThisWeek(date: Date | string | number, options?: {weekStartsOn?: number}): boolean
  isThisYear(date: Date | string | number): boolean
  isThursday(date: Date | string | number): boolean
  isToday(date: Date | string | number): boolean
  isTomorrow(date: Date | string | number): boolean
  isTuesday(date: Date | string | number): boolea
  isValid(date: Date): boolean
  isWednesday(date: Date | string | number): boolean
  isWeekend(date: Date | string | number): boolean
  isWithinRange(
    date: Date | string | number,
    startDate: Date | string | number,
    endDate: Date | string | number
  ): boolean
  isYesterday(date: Date | string | number): boolean
  lastDayOfISOWeek(date: Date | string | number): Date
  lastDayOfISOYear(date: Date | string | number): Date
  lastDayOfMonth(date: Date | string | number): Date
  lastDayOfQuarter(date: Date | string | number): Date
  lastDayOfWeek(date: Date | string | number, options?: {weekStartsOn?: number}): Date
  lastDayOfYear(date: Date | string | number): Date
  max(...dates: (Date | string | number)[]): Date
  min(...dates: (Date | string | number)[]): Date
  parse(argument: Date | string | number, options?: {additionalDigits?: 0 | 1 | 2}): Date
  setDate(date: Date | string | number, dayOfMonth: number): Date
  setDay(date: Date | string | number, day: number, options?: {weekStartsOn?: number}): Date
  setDayOfYear(date: Date | string | number, dayOfYear: number): Date
  setHours(date: Date | string | number, hours: number): Date
  setISODay(date: Date | string | number, day: number): Date
  setISOWeek(date: Date | string | number, isoWeek: number): Date
  setISOYear(date: Date | string | number, isoYear: number): Date
  setMilliseconds(date: Date | string | number, milliseconds: number): Date
  setMinutes(date: Date | string | number, minutes: number): Date
  setMonth(date: Date | string | number, month: number): Date
  setQuarter(date: Date | string | number, quarter: number): Date
  setSeconds(date: Date | string | number, seconds: number): Date
  setYear(date: Date | string | number, year: number): Date
  startOfDay(date: Date | string | number): Date
  startOfHour(date: Date | string | number): Date
  startOfISOWeek(date: Date | string | number): Date
  startOfISOYear(date: Date | string | number): Date
  startOfMinute(date: Date | string | number): Date
  startOfMonth(date: Date | string | number): Date
  startOfQuarter(date: Date | string | number): Date
  startOfSecond(date: Date | string | number): Date
  startOfToday(): Date
  startOfTomorrow(): Date
  startOfWeek(date: Date | string | number, options?: {weekStartsOn?: number}): Date
  startOfYear(date: Date | string | number): Date
  startOfYesterday(): Date
  subDays(date: Date | string | number, amount: number): Date
  subHours(date: Date | string | number, amount: number): Date
  subISOYears(date: Date | string | number, amount: number): Date
  subMilliseconds(date: Date | string | number, amount: number): Date
  subMinutes(date: Date | string | number, amount: number): Date
  subMonths(date: Date | string | number, amount: number): Date
  subQuarters(date: Date | string | number, amount: number): Date
  subSeconds(date: Date | string | number, amount: number): Date
  subWeeks(date: Date | string | number, amount: number): Date
  subYears(date: Date | string | number, amount: number): Date
}

declare module '@nuxt/vue-app' {
  interface Context {
    readonly $dateFns: DateFns
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $dateFns: DateFns
  }
}
