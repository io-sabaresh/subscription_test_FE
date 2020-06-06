import axios from 'axios';
import constants from '../constants'
import notification from '../notifications'

export default {
    state: {
        isAuthorized: false,
        userInfo: null
    },
    mutations: {
        setUserInfo(state, value) {
            state.userInfo = value;
        },
        setAuthorisation(state, value) {
            state.isAuthorized = value
        }
    },
    actions: {
        fetchUserDetails({ commit }, email) {
            return new Promise((resolve, reject) => {
                axios({
                    url: `${constants.API_ENDPOINTS.DEFAULT_SERVICE}/users/email/${email}`,
                    method: 'GET'
                }).then(({ data }) => {
                    if (data.success === true) {
                        commit('setAuthorisation', true);
                        commit('setUserInfo', data.message);
                    } else {
                        notification.error('Error, Please try again');
                    }
                    resolve();
                }).catch((error) => {
                    notification.error('Error, Please try again');
                    reject(error);
                })
            });
        }

    }
}