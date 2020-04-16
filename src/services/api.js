import { http } from "./config";

export default {

    getMake: () => {
        return http.get(`/Make`)
    },

    getModel: (makeId) => {
        return http.get(`/Model?MakeID=${makeId}`)
    },

    getVersion: (modelId) => {
        return http.get(`/Version?ModelID=${modelId}`)
    }
    
}