import Vue from 'vue'

export default {
    success: ( msg ) => {
        Vue.notify({
            group: 'foo',
            type: "success",
            text: msg
        })
    },
    warn: ( msg ) => {
        Vue.notify({
            group: 'foo',
            type: "warn",
            text: msg
        })
    },
    error: ( msg ) => {
        Vue.notify({
            group: 'foo',
            type: "error",
            text: msg
        })
    }
}