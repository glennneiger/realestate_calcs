// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: 'history',
  components: { App },
  template: '<App/>'
})
