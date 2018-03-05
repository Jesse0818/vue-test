// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import  Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(Vuex)


Vue.prototype.$axios = axios;


axios.defaults.withCredentials = true;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
