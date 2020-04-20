<template>
  <Layout>
    <div> <h3 style="text-align: center; margin-top:50px">Home Page</h3> </div>
  </Layout>
</template>

<script>
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'Home' }],
  },
  components: { Layout },
  data() {
    return {
      entity: '',
    }
  },
}
</script>
