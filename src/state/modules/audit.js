import axios from 'axios'
const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
    auditResources: [],
    auditResourcesByID: [],
}

export const getters = {
    get_resources(state) {
        return state.auditResources
    },
    get_resources_by_ID(state) {
        return state.auditResourcesByID
    },
}

export const mutations = {
    SET_RESOURCES(state, newValue) {
        state.auditResources = newValue
    },
    SET_RESOURCES_BY_ID(state, newValue) {
        state.auditResourcesByID = newValue
    },
}

export const actions = {
    async getAuditResources({ commit }, { page, columnName, order }) {
        try {
            const getData = await axios({
                method: 'get',
                url: `your_url`,
            })
            const entityData = getData.data
                // console.log('TCL: getAuditResources -> entityData', entityData)
            commit('SET_RESOURCES', entityData)
            return entityData
        } catch (error) {
            console.log('TCL: getResources -> error', error)
            throw error
        }
    },
    async getAuditResourcesBySearch({ commit }, { page, columnName, order, tableName, blameLabel }) {
        try {
            const getData = await axios({
              method: 'get',
              url: `your_url`,
            })
            const entityData = getData.data
                // console.log('TCL: getAuditResourcesBySearch -> entityData', entityData)
                // commit('SET_RESOURCES', entityData)
            return entityData
        } catch (error) {
            console.log('TCL: getAuditResourcesBySearch -> error', error)
            throw error
        }
    },
    async getAuditResourcesByID({ commit }, { id }) {
        try {
            const getData = await axios({
                method: 'get',
                url: `your url`,
              
            })
            const entityData = getData.data
                // console.log('TCL: getAuditResourcesByID -> entityData', entityData)
            commit('SET_RESOURCES_BY_ID', entityData)
            return entityData
        } catch (error) {
            console.log('TCL: getResources -> error', error)
            throw error
        }
    },
}