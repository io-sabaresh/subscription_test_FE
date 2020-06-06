import axios from 'axios';
import constants from '../constants'
import notification from '../notifications'

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
    },
    actions: {
        login({ commit }, loginDetails) {
            return new Promise((resolve, reject) => {
                axios ({
                    url: `${constants.API_ENDPOINTS.DEFAULT_SERVICE}/users/login`,
                    method: 'POST',
                    data: loginDetails
                }).then(({ data }) => {
                    if(data.success === true) {
                        notification.success('Login Successful');
                        // router.push({name: ''});
                    } else {
                        notification.error('Error, Please try again');
                    }
                    commit('resetUser');
                    resolve();
                }).catch((error) => {
                    notification.error('Error, Please try again');
                    commit('resetUser');
                    reject(error);
                })
            });
        }
    }
}