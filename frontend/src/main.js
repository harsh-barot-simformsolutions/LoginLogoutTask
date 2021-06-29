import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store.js'
import Vuetify from 'vuetify'
import vueRouter from 'vue-router'

import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import Message from './components/Message'
import Register from './components/Register'
import Login from './components/Login'
import VueRouter from 'vue-router';

Vue.use(Vuetify)
Vue.use(vueRouter)

const routes = [
  { path: "/", component: Messages},
  { path: "/NewMessage", component: NewMessage},
  { path: "/Message/:id", component: Message},
  { path: "/Register", component: Register},
  { path: "/Login", component: Login}
]

const router = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
