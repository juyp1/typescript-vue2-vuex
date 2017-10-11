import Vue from 'vue'
import Router from 'vue-router'
import MyComponent from '../components/hello/helloWorld.vue'
import NewsComponent from '../components/news/news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MyComponent
    }, {
      path: '/news',
      name: 'news',
      component: NewsComponent
    }
  ]
})
