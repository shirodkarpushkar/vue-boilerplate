// retrieves the collection of entities resources

import axios from 'axios'

const backendURL = process.env.VUE_APP_BACKEND_SERVER

export const state = {
    productResources: [],
    uploadPercentage: 0,
    uploadDocumentPercentage: 0,
}
export const getters = {
    get_resources(state) {
        return state.productResources
    },
    get_image_upload_percentage(state) {
        return state.uploadPercentage
    },
    get_file_upload_percentage(state) {
        return state.uploadDocumentPercentage
    },
}

export const mutations = {
    SET_PRODUCT_RESOURCES(state, newValue) {
        state.productResources = newValue
    },
    SET_UPLOADPERCENTAGE(state, newValue) {
        state.uploadPercentage = newValue
    },
    SET_UPLOAD_DOCUMENT_PERCENTAGE(state, newValue) {
        state.uploadDocumentPercentage = newValue
    },
}
export const actions = {
    // Retrieves the collection of single product resources.

    async getSingleProductById({ commit }, { id }) {
        try {
            const getData = await axios({
                method: 'get',
                url: `${backendURL}single_products/${id}`,
            })
            const productData = getData.data
                // console.log('TCL: getSingleProductById -> productData', productData)
                // commit('SAVE_PRODUCT_DATA', productData)

            return productData
        } catch (error) {
            console.log('TCL: getSingleProductByID -> error', error)
            throw error
        }
    },
    async patchSingleProductById({ commit }, { id, data }) {
        try {
            const patchData = await axios({
                method: 'patch',
                url: `${backendURL}single_products/${id}`,
                data,
                headers: {
                    'Content-Type': 'application/merge-patch+json',
                },
            })
            const resData = patchData.data

            return resData
        } catch (error) {
            console.log('TCL: patchSingleProductByID -> error', error)
            throw error
        }
    },
    // Creates a entities resource.
    async postSingleProductResources({ commit }, { data }) {
        try {
            const postData = await axios({
                method: 'post',
                url: `${backendURL}single_products`,
                data,
            })
            const resData = postData.data
                // console.log('TCL: postProduct-> ', resData)
            return resData
        } catch (error) {
            console.log('TCL: postResources -> error', error)
            throw error
        }
    },
    async uploadFile({ commit }, { data }) {
        try {
            const postData = await axios({
                method: 'post',
                url: `${backendURL}images`,
                data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    var Percentage = parseInt(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )

                    commit('SET_UPLOADPERCENTAGE', Percentage)
                },
            })
            const resData = postData.data

            // console.log('TCL: upload -> productData', resData)

            return resData
        } catch (error) {
            console.log('TCL: upload -> error', error)
            throw error
        }
    },
    async uploadDocuments({ commit }, { data }) {
        try {
            const postData = await axios({
                method: 'post',
                url: `${backendURL}pdfs`,
                data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    var Percentage = parseInt(
                        Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    )

                    commit('SET_UPLOAD_DOCUMENT_PERCENTAGE', Percentage)
                },
            })
            const resData = postData.data

            // console.log('TCL: upload documents -> productData', resData)

            return resData
        } catch (error) {
            console.log('TCL: upload documents -> error', error)
            throw error
        }
    },

    // Retrieves the collection of single product resources.
    async getSingleProductResources({ commit }, { columnName, order, page, search }) {
        try {
            const getData = await axios({
                method: 'get',
                url: `${backendURL}single_products/?order[${columnName}]=${order}&page=${page}&search=${search}`,
            })
            const productData = getData.data
                // console.log('TCL: getSingleProductResources -> productData', productData)
            commit('SET_PRODUCT_RESOURCES', productData)
            return productData
        } catch (error) {
            console.log('TCL: getSingleProductResources -> error', error)
            throw error
        }
    },
    async getAllSingleProductResources({ commit }, { columnName, order, pagination }) {
        try {
            const getData = await axios({
                method: 'get',
                url: `${backendURL}single_products/?order[${columnName}]=${order}&pagination=${pagination}`,
            })
            const productData = getData.data
                // console.log('TCL: getSingleProductResources -> productData', productData)

            return productData
        } catch (error) {
            console.log('TCL: getSingleProductResources -> error', error)
            throw error
        }
    },
    async downloadSingleProductFile({ commit }, { file }) {
        try {
            const getData = await axios({
                method: 'get',
                url: file.url,
                responseType: 'arraybuffer',
            })
            const fileData = getData.data
                // console.log('TCL: downloadFile -> fileData', fileData)
            return fileData
        } catch (error) {
            console.log('TCL: downloadFile -> error', error)
            throw error
        }
    },
    // Removes the product resource.
    async deleteProductByID({ commit }, { id }) {
        // console.log('TCL: deleteResourcesByID ->  entityName', id)

        try {
            const delDataByID = await axios({
                method: 'delete',
                url: `${backendURL}single_products/${id}`,
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
    // Removes the product resource.
    async deletefileByID({ commit }, { id }) {
        try {
            const delDataByID = await axios({
                method: 'delete',
                url: `${backendURL}pdfs/${id}`,
            })
            const entityData = delDataByID.data

            if (delDataByID.status === 204) {
                console.log('Deleted file Successfully')
            }

            return entityData
        } catch (error) {
            console.log('TCL: deletefileByID -> error', error)
            throw error
        }
    },
    async deleteImageByID({ commit }, { id }) {
        try {
            const delDataByID = await axios({
                method: 'delete',
                url: `${backendURL}images/${id}`,
            })
            const entityData = delDataByID.data

            if (delDataByID.status === 204) {
                console.log('Deleted image Successfully')
            }

            return entityData
        } catch (error) {
            console.log('TCL: deleteResourcesByID -> error', error)
            throw error
        }
    },
}