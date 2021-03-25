import Vue from 'vue'
import { NuxtDateFnsInstance } from './date-fns'

declare module '@nuxt/vue-app' {
  interface Context {
    $dateFns: NuxtDateFnsInstance
  }

  interface NuxtAppOptions {
    $dateFns: NuxtDateFnsInstance
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $dateFns: NuxtDateFnsInstance
  }

  interface NuxtAppOptions {
    $dateFns: NuxtDateFnsInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $dateFns: NuxtDateFnsInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $dateFns: NuxtDateFnsInstance
  }
}
