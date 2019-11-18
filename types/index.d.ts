import Vue from 'vue'
import { dateFns } from './date-fns'

declare module '@nuxt/vue-app' {
  interface Context {
    readonly $dateFns: dateFns
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    readonly $dateFns: dateFns
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $dateFns: dateFns
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    readonly $dateFns: dateFns
  }
}
