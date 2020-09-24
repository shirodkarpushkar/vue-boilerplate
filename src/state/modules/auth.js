import axios from 'axios'

let serverUrl = process.env.VUE_APP_REDIRECT_OAUTH_URL
const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
  authToken: getSavedState('authToken'), // Gets stored authtoken from the session storage
}

export const mutations = {
  SET_CURRENT_USER_AUTHTOKEN(state, newValue) {
    state.authToken = newValue
    saveState('authToken', newValue) // stores authtoken into the session storage
    setDefaultAuthHeaders(state)
  },
}

export const getters = {
  // Whether the user is currently logged in.
  loggedIn(state) {
    return !!state.authToken
  },
  getAuthenticationToken(state) {
    return state.authToken
  },
}

export const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  init({ state, dispatch }) {
    if (state.authToken !== null) {
      setDefaultAuthHeaders(state)
      // let authtoken = state.authToken.access_token
      // let exp = jwt.decode(authtoken).exp
      // if (Date.now() >= exp * 1000) {
      //   console.log('token refreshed')
      //   dispatch('refreshToken')
      // }
    }
  },

  // Logs in the current user.
  async logIn(
    { commit, dispatch, getters },
    { emailAddress, userPassword } = {}
  ) {
    if (getters.loggedIn) return dispatch('validate')

    try {
      const userData = await axios({
        method: 'post',
        url: `${backendURL}user/signin`,
        data: { emailAddress, userPassword },
      })
      const user = userData.data
      commit('SET_CURRENT_USER_AUTHTOKEN', user)

      return user
    } catch (error) {
      console.log('TCL: error', error)
      throw error
    }
  },



  // Logs out the current user.
  logOut({ commit }) {
    // commit('SET_CURRENT_USER', null)
    commit('SET_CURRENT_USER_AUTHTOKEN', null)
  },

  // Validates the current user's token and refreshes it
  // with new data from the API.
  validate({ commit, state }) {
    if (!state.authToken) return Promise.resolve(null)

    return new Promise((resolve, reject) => {
      resolve(true)
    })
  },
}

// ===
// Private helpers
// ===

function getSavedState(key) {
  return JSON.parse(window.sessionStorage.getItem(key))
}

function saveState(key, state) {
  window.sessionStorage.setItem(key, JSON.stringify(state))
}

function setDefaultAuthHeaders(state) {
  axios.defaults.headers.common['auth'] = state.authToken
    ? state.authToken.result[0].token
    : ''
}
