import Vue from 'vue'
import Router from 'vue-router'
import MyComponent from '../components/hello/helloWorld.vue'
import NewsComponent from '../components/news/news.vue'
import rootComponent from '../components/root-component/root-component.vue'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: MyComponent
//     }, {
//       path: '/news',
//       name: 'news',
//       component: NewsComponent
//     }
//   ]
// })
let childrenRoutes = [

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
let routes = [
  {
    path: '/finance/',
    component: rootComponent,
    children: childrenRoutes
  }
];

const router = new Router();
router.addRoutes(routes);
export default router;