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
                url: `${backendURL}audit_logs?order[${columnName}]=${order}&page=${page}`,
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
                url: `${backendURL}audit_logs?order[${columnName}]=${order}&page=${page}&tbl=${tableName}&blame.label=${blameLabel}`,
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
                url: `${backendURL}audit_logs/${id}`,
                headers: {
                    'X-AUTH-TOKEN': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHY3RBOFdfZXNaRkxtRklhX0lPZENFS1RRcllvOGxoU0MzalVFY1czbE00In0.eyJqdGkiOiJkZDhlYmE3OS01MWE2LTQzMzMtYjQ2Ny1lN2QzNWRkNGY1MWYiLCJleHAiOjE1NzU4ODM0MzIsIm5iZiI6MCwiaWF0IjoxNTc1ODcyNjMyLCJpc3MiOiJodHRwczovL2F1dGguc2d0d28uaW8vYXV0aC9yZWFsbXMvc2d0d28taW50ZXJuYWwiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOTkyMWFhM2UtNThmZC00MzM2LTk2MmEtN2Y2MTA2ODIwNDI2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2d0d28tY2F0YWxvZy1kZXYiLCJhdXRoX3RpbWUiOjE1NzU4NzAyOTEsInNlc3Npb25fc3RhdGUiOiJmYTQ0Y2RhMi1kNGFiLTRkNGEtYTUzYi1mZmFkNTdhMjM1MGMiLCJhY3IiOiIwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInNndHdvX2FkbWluIiwib2ZmbGluZV9hY2Nlc3MiLCJzZ3R3b19zdGFmZiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgb2ZmbGluZV9hY2Nlc3MgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiUHVzaGthciBTaGlyb2RrYXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJwdXNoa2Fyc0B3aW5qaXQuY29tIiwiZ2l2ZW5fbmFtZSI6IlB1c2hrYXIiLCJmYW1pbHlfbmFtZSI6IlNoaXJvZGthciIsImVtYWlsIjoicHVzaGthcnNAd2luaml0LmNvbSJ9.k_KOsfIanE0kpJCExsT4Rhscw7y1yoofNpUh5T90lDC63KMa_uI0zee_jWw-DoMme50nk_ugbDDxskGzRYEPwSOThXQXWjiifhccmJMWCRiTPhrwJwjKm-N7vDY6Nt9PgawLylL-O3egEu3301ZUwgT2TQ1AVddvekbdtm8kKQmzi_RdjrsqrzmzdDEcmNE817wSlszAQNQcOTzgfyXK1h4HcM1oisnpTEMAwujWBaElXHlwOwD20-P6gw_JxnNo4CfGIerkUxJ4ult4Vh2XxNxLtk1TaiQ-61pNlc4WKkRC5QJnU4guOju8Z-HKGl918rMNUd0LzFEyEXlzKj-S-g',
                },
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