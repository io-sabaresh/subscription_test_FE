import Vue from 'vue'
import Vuex from 'vuex'
import Signup from './signup';
import Login from './login';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Signup,
        Login
    },
    strict: true
})

export default store;