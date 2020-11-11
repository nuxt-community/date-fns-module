<template>
  <div>
    <p v-text="str" />
    {{ $dateFns.format('1995-12-25', 'yyyy') }}
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    return {
      str: ctx.app.$dateFns.format('1995-12-25', 'MMMM')
    }
  }
}
</script>
