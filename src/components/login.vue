<script>
import { authMethods } from '@state/helpers'

export default {
  metaInfo: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in` }],
  },
  props: {
    loginName: {
      type: String,
      default: '',
    },
    // authError: {
    //   type: String,
    //   default: '',
    // },
    // tryingToLogIn: {
    //   type: Boolean,
    //   default: false,
    // },
    // snackbar: {
    //   type: Object,
    //   default: () => ({ show: false, text: '', color: '' }),
    // },
  },
  data() {
    return {
      email: '',
      password: '',
      code: '',
      publicPath: process.env.BASE_URL,
      tryingToLogIn: false,
      authError: null,
      snackbar: {
        show: false,
        text: '',
        color: '',
      },
    }
  },

  created() {
    let status = null
    if (this.$router && this.$router.history.current.fullPath) {
      const router = this.$router.history
      const routerQuery = router.current.query
      status = routerQuery.status
      console.log('TCL: created -> status', status)
      if (status === 'logout') {
        this.showLogOutSuccess()
      }
    }
  },
  methods: {
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      console.log('TCL: tryToLogIn -> event', event)
      this.tryingToLogIn = true
      // Reset the authError if it existed.
      this.authError = null
      return this.logIn({
        Email: this.email,
        Password: this.password,
      })
        .then((user) => {
          console.log('TCL: tryToLogIn -> token', user)
          this.tryingToLogIn = false
          if (user.status && user.status.code === '01') {
            this.authError = user.status.message
            console.log('TCL: tryToLogIn -> this.authError', this.authError)
            this.snackbar = {
              show: true,
              color: 'red',
              text: this.authError,
            }
          }
          // Redirect to the originally requested page, or to the home page
          if (this.loginName === 'Employee') {
            this.$router.push(
              this.$route.query.redirectFrom || { name: 'home' }
            )
          } else {
            this.$router.push(
              this.$route.query.redirectFrom || { name: 'resident' }
            )
          }
        })
        .catch((error) => {
          this.tryingToLogIn = false
          this.authError = error
        })
    },
    showLogOutSuccess() {
      // this.tryingToLogIn = false
      // Change snackbar notification text in case of logout event
      this.snackbar = {
        show: true,
        color: 'green',
        text: 'Logout successfully.',
      }
    },
  },
}
</script>

<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    :src="`${publicPath}static/logo.png`"
                    alt="Vue Material Admin"
                  />
                  <h3 class="flex my-1 primary--text">{{ loginName }} Login</h3>
                </div>
                <v-form>
                  <v-text-field
                    v-model="email"
                    append-icon="person"
                    name="email"
                    label="Email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    v-model="password"
                    append-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!--
                 @click="login"-->
                <!-- <BaseIcon v-if="tryingToLogIn" name="sync" spin /> -->
                <!-- <v-btn
                  v-if="authError"
                  :loading="tryingToLogIn"
                  block
                  color="primary"
                  style="color:white"
                  @click="resetAuthError"
                  >Retry Login</v-btn
                > -->
                <!-- v-else -->
                <v-btn
                  :loading="tryingToLogIn"
                  block
                  color="primary"
                  style="color:white"
                  @click="tryToLogIn"
                  >Login</v-btn
                >
              </v-card-actions>
              <v-snackbar
                v-model="snackbar.show"
                :timeout="3000"
                bottom
                right
                :color="snackbar.color"
              >
                {{ snackbar.text }}
                <v-btn dark flat icon @click.native="snackbar.show = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-snackbar>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" module>
@import '@design';
</style>
