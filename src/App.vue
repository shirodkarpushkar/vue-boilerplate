<script>
import appConfig from '@src/app.config'

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
}
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <transition name="fade" mode="out-in">
      <RouterView :key="$route.fullPath" />
    </transition>
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
@import '~nprogress/nprogress.css';
@import '@design';
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
body {
  font-family: 'Jost', sans-serif;
}

#nprogress .bar {
  background: $color-link-text;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
