import Vue from 'vue'
import Router, { NavigationGuard, RouteConfig, RawLocation, Route } from 'vue-router'
import SigninIntercepter from './intercepter/signinIntercepter';
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
let signinIntercepter = new SigninIntercepter();
let childrenRoutes = [

  {
    path: '/',
    name: 'Hello',
    component: MyComponent,
  }, {
    path: '/news',
    name: 'news',
    component: NewsComponent,
    meta: { signin: true }
  }
]
//检测是否为必登录的路由
let guard: NavigationGuard = (to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  if (to.matched.some(record => record.meta.signin)) {
    signinIntercepter['do'](next);
  } else {
    next(); // 确保一定要调用 next()
  }
}
let routes = [
  {
    path: '/land/',
    component: rootComponent,
    children: childrenRoutes
  }
];

const router = new Router();
router.addRoutes(routes);
export default router;