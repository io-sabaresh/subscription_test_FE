import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/vuexStore'
import vuetify from './plugins/vuetify'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Vue.use(Notifications)

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
