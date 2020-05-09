import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}
// export const productComputed = {
//     ...mapState('products', {
//         singleProductData: (state) => state.singleProductData,
//     }),
//     ...mapGetters('products', ['get_single_product']),
// }

export const userMethods = mapActions('masters', [
  'signUpUser',
  'confirmEmail',
  'forgotPassword',
  'resetPassword',
])
export const authMethods = mapActions('auth', ['logIn', 'logOut'])
export const dashboardMethods = mapActions('dashboard', ['getResources'])
export const authGetters = mapGetters('auth', ['getAuthenticationToken'])
