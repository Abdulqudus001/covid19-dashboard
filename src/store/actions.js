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
      console.log(res.data);
      const cases = res.data.map((data) => data.timeline.cases);
      const deaths = res.data.map((data) => data.timeline.deaths);
      const recoveries = res.data.map((data) => data.timeline.recovered);
      commit('updateNewDeathTrend', deaths);
      commit('updateNewCaseTrend', cases);
      commit('updateNewRecoveredTrend', recoveries);
    });
  },
  updateCountries({ commit }, payload) {
    commit('updateCountriesState', payload);
  },
  fetchCountryStatesCases({ commit }) {
    Vue.axios.get('http://covid-19-countries.herokuapp.com/countries').then((res) => {
      commit('updateCountryStatesCases', res.data);
    });
  },
};
