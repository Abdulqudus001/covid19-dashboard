import Vue from 'vue';

export default {
  fetchWorldData({ commit }) {
    Vue.axios.get('https://corona.lmao.ninja/all').then((res) => {
      commit('updateWorldData', res.data);
    });
  },
  fetchWorldDataToday({ commit }) {
    Vue.axios.get('https://coronavirus-19-api.herokuapp.com/countries').then((res) => {
      commit('updateWorldDataToday', res.data);
    });
  },
  fetchNewCasesTrends({ commit }) {
    Vue.axios.get('https://corona.lmao.ninja/historical').then((res) => {
      const cases = res.data.map((data) => data.timeline.cases);
      commit('updateNewCaseTrend', cases);
    });
  },
};
