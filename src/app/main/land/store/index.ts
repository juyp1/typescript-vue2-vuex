import Vue from 'vue';
import Vuex from 'vuex';
import { News } from './modules/news/news'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    News: News
  }
});
