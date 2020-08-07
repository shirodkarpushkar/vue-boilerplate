// retrieves the collection of country resource

import axios from 'axios'

const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
    countryResource: [],
    categoryResource: [],
}
export const getters = {
    get_country(state) {
        return state.countryResource
    },
    get_category(state) {
        return state.categoryResource
    },
}

export const mutations = {
    SET_COUNTRY_RESOURCES(state, newValue) {
        state.countryResource = newValue
    },
    SET_CATEGORY_RESOURCES(state, newValue) {
        state.categoryResource = newValue
    },
}
export const actions = {
    // Retrieves the collection of country resource.
    async getCountry({ commit }, { pagination }) {
        try {
            const getCountry = await axios({
                method: 'get',
                url: `${backendURL}countries/?pagination=${pagination}`,
            })
            const countryData = getCountry.data
            commit('SET_COUNTRY_RESOURCES', countryData)
            return countryData
        } catch (error) {
            console.log('TCL: getCountry -> error', error)
            throw error
        }
    },
    // Retrieves a country resource by ID
    async getCountryByID({ commit }, { id }) {
        try {
            const getDataByID = await axios({
                method: 'get',
                url: `${backendURL}countries/${id}`,
            })
            const editData = getDataByID.data
            return editData
        } catch (error) {
            console.log('TCL: getCountryByID -> error', error)
            throw error
        }
    },

    // Updates the Country resource
    async patchCountryByID({ commit }, { id, data }) {
        // console.log('TCL: patchCountryByID -> id, data', id, data)
        try {
            const updateDataByID = await axios({
                method: 'patch',
                url: `${backendURL}countries/${id}`,
                data: data,
                headers: {
                    'Content-Type': 'application/merge-patch+json',
                },
            })
            const updatedData = updateDataByID.data
                // console.log('TCL: patchCountryByID -> updatedData', updatedData)
            return updatedData
        } catch (error) {
            console.log('TCL: patchCountryByID -> error', error)
            throw error
        }
    },

    // Retrieves the collection of category resource.
    async getCategories({ commit }) {
        try {
            const getCategory = await axios({
                method: 'get',
                url: `${backendURL}categories`,
            })
            const CategoryData = getCategory.data
                // console.log('TCL: getCategories -> CategoryData', CategoryData)
            commit('SET_CATEGORY_RESOURCES', CategoryData)
            return CategoryData
        } catch (error) {
            console.log('TCL: getCategories -> error', error)
            throw error
        }
    },

    // Removes the country resource.
    async deleteCountryByID({ commit }, { id }) {
        console.log('TCL: deleteCountryByID -> id', id)
        try {
            const delDataByID = await axios({
                method: 'delete',
                url: `${backendURL}countries/${id}`,
            })
            const countryData = delDataByID.data
            if (countryData.status === 204) {
                console.log('Deleted Successfully')
            }
            return countryData
        } catch (error) {
            console.log('TCL: deleteCountryByID -> error', error)

            throw error
        }
    },

    // Creates country resource.
    async postCountry({ commit }, { data }) {
        // console.log('TCL: postCountry -> data', data)

        try {
            const postData = await axios({
                method: 'post',
                url: `${backendURL}countries`,
                data,
                headers: {
                    'Content-Type': 'application/ld+json',
                },
            })
            const countryData = postData.data
                // console.log('TCL: postCountry -> countryData', countryData)
            return countryData
        } catch (error) {
            console.log('TCL: postCountry -> error', error)
            throw error
        }
    },
}