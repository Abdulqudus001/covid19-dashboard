import Vue from 'vue';

export default {
  fetchWorldData({ commit }) {
    Vue.axios.get('https://coronavirus-19-api.herokuapp.com/all').then((res) => {
      commit('updateWorldData', res.data);
    });
  },
  fetchWorldDataToday({ commit }) {
    Vue.axios.get('https://coronavirus-19-api.herokuapp.com/countries').then((res) => {
      commit('updateWorldDataToday', res.data);
    });
  },
};
