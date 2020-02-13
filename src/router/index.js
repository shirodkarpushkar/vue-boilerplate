import Vue from "vue";
import VueRouter from "vue-router";
// https://github.com/declandewet/vue-meta
import VueMeta from "vue-meta";
// Adds a loading bar at the top during page loads.
import NProgress from "nprogress/nprogress";
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueMeta, {
  /*The component option name that vue-meta looks for meta info on.
    keyName: 'page',
    Changed keyname to metaInfo to fix the issue with vuetify styling and theme options
   */
  keyName: "metaInfo"
});

const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: "history",
  /* Simulate native- like scroll behavior when navigating to a new
    route and using back / forward buttons. */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((routeTo, routeFrom, next) => {
  /* If this isn't an initial page load... */
  if (routeFrom.name !== null) {
    /*  Start the route progress bar. */
    NProgress.start();
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  /*  Create a `beforeResolve` hook, which fires whenever
    `beforeRouteEnter` and `beforeRouteUpdate` would. This
    allows us to ensure data is fetched even when params change,
    but the resolved route does not. We put it in `meta` to
    indicate that it's a hook we created, rather than part of
    Vue Router (yet?). */
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        /*  If a `beforeResolve` hook is defined, call it with
         the same arguments as the `beforeEnter` hook. */
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              if (routeFrom.name === args[0].name) {
                // Complete the animation of the route progress bar.
                NProgress.done();
              }
              // Complete the redirect.
              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          // Otherwise, continue resolving the route.
          resolve();
        }
      });
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (err) {
    return;
  }
  // If we reach this point, continue resolving the route.
  next();
});

/*  When each route is finished evaluating... */
router.afterEach((routeTo, routeFrom) => {
  /* Complete the animation of the route progress bar. */
  NProgress.done();
});

export default router;