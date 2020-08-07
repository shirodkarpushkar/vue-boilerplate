import axios from 'axios'

const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
  dashboardData: {},
}
export const getters = {
  getDashboardResources() {
    return state.dashboardData
  },
}
export const mutations = {
  SET_RESOURCES(state, newValue) {
    state.dashboardData = newValue
  },
}
export const actions = {
  async getResources({ commit }) {
    try {
      const getData = await axios({
        method: 'get',
        url: `${backendURL}openInfo`,
      })
      const entityData = getData.data
      // console.log('TCL: getResources -> entityData', entityData)
      commit('SET_RESOURCES', entityData)
      return entityData
    } catch (error) {
      console.log('TCL: getResources -> error', error)
      throw error
    }
  },
}
