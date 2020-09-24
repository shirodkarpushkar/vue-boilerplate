<template>
  <div>
    <navbar></navbar>
    <description-body></description-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '@layouts/Navbar'
import AppFooter from '@layouts/footer'
import DescriptionBody from '@components/DescriptionBody.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },
  components: {
    Navbar,
    AppFooter,
    DescriptionBody,
  },
  data() {
    return {}
  },
}
</script>
