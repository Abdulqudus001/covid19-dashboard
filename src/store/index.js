import Vue from 'vue';
import Vuex from 'vuex';
// import VuexPersist from 'vuex-persist';

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

// const vuexLocalStorage = new VuexPersist({
//   key: 'vuex',
//   storage: window.localStorage,
// });

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  // plugins: [vuexLocalStorage.plugin],
  modules: {
  },
});
