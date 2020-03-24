import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueRouteMiddleware from 'vue-route-middleware';
import Home from '../views/Home.vue';

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
];

const router = new VueRouter({
  routes,
});

// router.beforeEach(VueRouteMiddleware());

export default router;
