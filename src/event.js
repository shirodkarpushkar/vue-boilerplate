// Custom Events to listen and callback action
export default [
  {
    name: 'APP_LOGOUT',
    callback: function(e) {
      this.snackbar = {
        show: true,
        color: 'green',
        text: 'Logout successfully.',
      }
      this.$router.replace({ path: '/logout' })
    },
  },
  {
    name: 'APP_AUTH_FAILED',
    callback: function(e) {
      this.snackbar = {
        show: true,
        color: 'red',
        text: 'Retry login.',
      }
      // this.$router.push('/login')
    },
  },
  {
    name: 'SURVEY_SAVED',
    callback: function(e) {
      console.log('TCL: e', e)
      this.snackbar = {
        show: true,
        color: 'green',
        text: 'Form Saved.',
      }
      // this.$router.push('/login')
    },
  },
]
