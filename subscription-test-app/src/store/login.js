export default {
    state: {
        user: {
            email: null,
            password: null
        }
    },
    mutations: {
        setuser(state, { property, value }) {
            state.user[property] = value;
        },
        resetUser(state) {
            state.user = {
                email: null,
                password: null
            }
        }
    }
}