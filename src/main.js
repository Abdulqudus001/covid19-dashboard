import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
// import socketio from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

// const socketInstance = socketio('http://localhost:3000');

Vue.use(new VueSocketio({
  connection: 'http://covid-19-countries.herokuapp.com',
}));
Vue.use(VueAxios, axios);
Vue.use(VueHighcharts, { Highcharts });

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
