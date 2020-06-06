import Vue from 'vue'
import App from './App.vue'
import router from '../routes'
import store from './store/vuexStore'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
