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



<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
@import '~nprogress/nprogress.css';
@import '@design';
@import '@assets/scss/bootstrap.scss';


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
