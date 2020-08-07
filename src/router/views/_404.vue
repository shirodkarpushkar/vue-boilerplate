<template>
  <div>
    404
  </div>
</template>

<script>
export default {
  name: 'FourOhFour',

  created() {
    this.$ssrContext && this.$ssrContext.res.status(404)
  },
}
</script>
