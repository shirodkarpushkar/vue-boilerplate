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
    SET_RESOURCES(state, newValue) {
        state.entityResources = newValue
    },
}
export const actions = {
    // Retrieves the collection of entities resources.
    async getCatalogResources({ commit }) {
        try {
            const getData = await axios({
                method: 'get',
                // url: `${backendURL}${entityName}/${pagination}`,
                url: `${backendURL}catalogs`,
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

    // Creates a entities resource.
    async postCatalogResources({ commit }, { data }) {
        try {
            const postData = await axios({
                method: 'post',
                url: `${backendURL}catalogs`,
                data,
            })
            const entityData = postData.data
                // console.log('TCL: postResources -> entityData', entityData)
            return entityData
        } catch (error) {
            console.log('TCL: postResources -> error', error)
            throw error
        }
    },

    // Retrieves a entities resource.
    async getCatalogResourcesByID({ commit }, { id }) {
        // console.log('TCL: getCatalogResourcesByID -> id', id)
        try {
            const getDataByID = await axios({
                method: 'get',
                url: `${backendURL}catalogs/${id}`,
            })
            const entityData = getDataByID.data
            return entityData
        } catch (error) {
            console.log('TCL: getResourcesByID -> error', error)
            throw error
        }
    },
    // Retrieves a entities resource.
    async getProductResourcesByCatalogID({ commit }, { id }) {
        // console.log('TCL: current catalog products -> id', id)
        try {
            const getDataByID = await axios({
                method: 'get',
                url: `${backendURL}single_products/?catalogs=${id}`,
            })
            const entityData = getDataByID.data
            return entityData
        } catch (error) {
            console.log('TCL: current catalog products -> error', error)
            throw error
        }
    },
    // Removes the entities resource.
    async deleteCatalogResourcesByID({ commit }, { id }) {
        // console.log('TCL: deleteResourcesByID -> id, entityName', id)

        try {
            const delDataByID = await axios({
                method: 'delete',
                url: `${backendURL}catalogs/${id}`,
            })
            const entityData = delDataByID.data

            if (delDataByID.status === 204) {
                console.log('Deleted Successfully')
            }

            return entityData
        } catch (error) {
            console.log('TCL: deleteResourcesByID -> error', error)
            throw error
        }
    },

    // Replaces the entities resource
    async putCatalogResourcesByID({ commit }, { id, data }) {
        // console.log('TCL: putResourcesByID -> data', data)
        // console.log('TCL: putResourcesByID -> id, catalogs', id)
        try {
            const putDataByID = await axios({
                method: 'put',
                url: `${backendURL}catalogs/${id}`,
                data,
            })
            const entityData = putDataByID.data
            return entityData
        } catch (error) {
            console.log('TCL: putResourcesByID -> error', error)
            throw error
        }
    },
    // Updates the entities resource
    async patchCatalogResourcesByID({ commit }, { id, data }) {
        // console.log('TCL: patchResourcesByID -> data', data)
        // console.log('TCL: patchResourcesByID -> id, catalogs', id)
        try {
            const updateDataByID = await axios({
                method: 'patch',
                url: `${backendURL}catalogs/${id}`,
                data,
                headers: {
                    'Content-Type': 'application/merge-patch+json',
                },
            })
            const entityData = updateDataByID.data
                // console.log('TCL: patchResourcesByID -> catalogs', entityData)
            return entityData
        } catch (error) {
            console.log('TCL: patchResourcesByID -> error', error)
            throw error
        }
    },
    async getAllProductsByName({ commit }, { name }) {
        try {
            const getDataByName = await axios({
                method: 'get',
                url: `${backendURL}single_products?name=${name}&pagination=false&order[name]=asc`,
            })
            const entityData = getDataByName.data
            return entityData
        } catch (error) {
            console.log('TCL: search products -> error', error)
            throw error
        }
    },
}