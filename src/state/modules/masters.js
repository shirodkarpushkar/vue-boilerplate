// retrieves the collection of entities resources

import axios from 'axios'

const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
  entityResources: [],
}
export const getters = {
  get_resources(state) {
    return state.entityResources
  },
}

export const mutations = {
  SET_USER(state, newValue) {
    state.entityResources = newValue
  },
}
export const actions = {
  // user sign up
  async signUpUser({ commit }, { userData }) {
    try {
      const postData = await axios({
        method: 'post',
        url: `${backendURL}user/signup`,
        data: userData,
      })
      const data = postData.data

      return data
    } catch (error) {
      console.log('TCL: signUpUser -> error', error)
      throw error
    }
  },
  async confirmEmail({ commit }, { emailData }) {
    try {
      const postData = await axios({
        method: 'post',
        url: `${backendURL}user/emailVerification`,
        data: emailData,
      })
      const data = postData.data

      return data
    } catch (error) {
      console.log('TCL: confirmEmail -> error', error)

      throw error
    }
  },
  async forgotPassword({ commit }, { emailData }) {
    try {
      const postData = await axios({
        method: 'post',
        url: `${backendURL}user/forgotPassword`,
        data: emailData,
      })
      const data = postData.data

      return data
    } catch (error) {
      console.log("TCL: forgotPassword -> error", error)
   
      throw error
    }
  },
  async resetPassword({ commit }, { emailData }) {
    try {
      const postData = await axios({
        method: 'post',
        url: `${backendURL}user/resetPassword`,
        data: emailData,
      })
      const data = postData.data

      return data
    } catch (error) {
      console.log("TCL: resetPassword -> error", error)

      throw error
    }
  },
}
