<script>
import { authComputed } from '@state/helpers'
import NavBarRoutes from './nav-bar-routes'

export default {
  components: { NavBarRoutes },
  data() {
    return {
      persistentNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
        {
          name: 'profile',
          title: () => 'Logged in as ' + this.currentUser.name,
        },
        {
          name: 'survey',
          title: 'Survey',
        },
        {
          name: 'add-survey',
          title: 'Add Survey',
        },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <VList dense>
    <NavBarRoutes :routes="persistentNavRoutes" />
    <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
    <NavBarRoutes v-else :routes="loggedOutNavRoutes" />
  </VList>
  <!-- <ul :class="$style.container"> -->
  <!-- <ul class="nav nav-pills"> -->
  <!-- <div> -->
  <!-- <VList dense> -->
  <!-- <NavBarRoutes :routes="persistentNavRoutes" />
  <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
  <NavBarRoutes v-else :routes="loggedOutNavRoutes" /> -->
  <!-- </VList> -->
  <!-- </div> -->
  <!-- </ul> -->
</template>

<style lang="scss" module>
@import '@design';

.container {
  padding: 0;
  margin: 0 0 $size-grid-padding;
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    margin-right: $size-grid-padding;
    border: 1px solid red;
  }
}
</style>
