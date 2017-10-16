// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router from './routers/index';
import store from './store/index';
/* eslint-disable no-new */
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
