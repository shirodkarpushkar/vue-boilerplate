<template>
  <div>
    <navbar></navbar>
    <description-body></description-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import DescriptionBody from '@components/DescriptionBody.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },
  components: {
    DescriptionBody,
  },
  data() {
    return {}
  },
}
</script>
