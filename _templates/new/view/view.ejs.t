---
to: "src/router/views/<%= h.inflection.dasherize(name) %>.vue"
---

<template>
  <div>
    <%= h.inflection.titleize(name.replace(/-/g, '_')) %>
  </div>
</template>
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%><script>

export default {
  page: {
    title: '<%= importName %>',
    meta: [{ name: 'description', content: '<%= importName %>' }],
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>

<%

if (useStyles) { %>
<style scoped>

</style>
<% } %>
