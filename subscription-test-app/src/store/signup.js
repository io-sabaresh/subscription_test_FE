import axios from 'axios';
import constants from '../constants'
import notification from '../notifications'
import router from '../routes';

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
    actions: {
        createNewUser({ commit }, newUser) {
            return new Promise((resolve, reject) => {
                axios ({
                    url: `${constants.API_ENDPOINTS.DEFAULT_SERVICE}/users/signup/${newUser.userType}`,
                    method: 'POST',
                    data: newUser
                }).then(({ data }) => {
                    if(data.success === true) {
                        notification.success('Account Cretead! Login and Start Using');
                        router.push({ name: 'Login'});
                    } else {
                        notification.error('Error, Please try again');
                    }
                    commit('resetNewUserValues');
                    resolve();
                }).catch((error) => {
                    notification.error('Error Occured!, Please try later');
                    commit('resetNewUserValues');
                    reject(error);
                })
            });
        }
    }
}