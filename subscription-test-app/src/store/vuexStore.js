import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

//Store Modules 
import Signup from './signup';
import Login from './login';
import User from './user';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Signup,
        Login,
        User
    },
    strict: true,
    plugins: [createPersistedState()]
})

export default store;