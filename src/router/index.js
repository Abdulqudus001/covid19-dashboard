import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
// import VueRouteMiddleware from 'vue-route-middleware';
import Home from '../views/Home.vue';
import '../../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/countries',
    name: 'countries',
    component: () => import('../views/countries.vue'),
    // meta: {
    //   middleware: () => {
    //     Vue.axios.get('http://ip-api.com/json').then((res) => {
    //       console.log(res.data);
    //       const country = res.data.country;
    //     });
    //   },
    // },
  },
  {
    path: '/countries/:country',
    name: 'country',
    component: () => import('../views/country.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
// router.beforeEach(VueRouteMiddleware());

export default router;
