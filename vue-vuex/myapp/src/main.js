import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router'
import store from './store/store'

Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
