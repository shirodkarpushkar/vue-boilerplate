---
to: "src/components/<%= h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.inflection.dasherize(name) %>.vue"
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

<style scoped>

</style>
