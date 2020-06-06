export default {
    state: {
        newUser: {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            userType: null
        },
        userTypes: [
            {
                title: "Shop Owner",
                value: "shop-owner"
            },
            {
                title: "Customer",
                value: "customer"
            }
        ]
    },
    mutations: {
        setUserValue(state, { property, value }) {
            state.newUser[property] = value;
        },
        resetNewUserValues(state) {
            state.newUser = {
                email: null,
                firstName: null,
                lastName: null,
                password: null,
                userType: null
            }
        }
    },
    action: {}
}