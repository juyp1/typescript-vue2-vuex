
import { CreateElement } from 'vue/types/vue';
import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './routers/index';
import store from './store/index';
import Main from './main.vue';
import HttpInterceptor from './api/HttpInterceptor';

Vue.use(VueResource);

//配置是否允许 vue-devtools 检查代码
if (location.host.indexOf('m.b2cf.cn') === 0) {
  Vue.config.devtools = false;
}
Vue.config.silent = false;

let vm = new Vue({
  store,
  router,
  render: (createElement: CreateElement) => createElement(Main),
  beforeCreate: function(){
    new HttpInterceptor();
  }
}).$mount('#app1');