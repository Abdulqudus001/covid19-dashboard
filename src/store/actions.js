import Vue from 'vue';

const rapidAPIKey = process.env.VUE_APP_rapidAPIKey;

const computeData = (countries, data, type) => {
  const output = countries.map((country) => {
    const countryCases = data[country].reduce((acc, el) => {
      if (type === 'cases') {
        acc[el.date] = el.confirmed;
      } else if (type === 'deaths') {
        acc[el.date] = el.deaths;
      } else {
        acc[el.date] = el.recovered;
      }
      return acc;
    }, {});
    return countryCases;
  });
  return output;
};

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
    Vue.axios.get('https://pomber.github.io/covid19/timeseries.json').then(({ data }) => {
      const countries = Object.keys(data);
      const cases = computeData(countries, data, 'cases');
      const deaths = computeData(countries, data, 'deaths');
      const recovered = computeData(countries, data, 'recovered');
      commit('updateNewCaseTrend', cases);
      commit('updateNewDeathTrend', deaths);
      commit('updateNewRecoveredTrend', recovered);
    });
    // Vue.axios.get('https://corona.lmao.ninja/v2/historical').then((res) => {
    // const cases = res.data.map((data) => data.timeline.cases);
    // const deaths = res.data.map((data) => data.timeline.deaths);
    // const recoveries = res.data.map((data) => data.timeline.recovered);
    // commit('updateNewCaseTrend', cases);
    // commit('updateNewDeathTrend', deaths);
    // commit('updateNewRecoveredTrend', recoveries);
    // });
  },
  updateCountries({ commit }, payload) {
    commit('updateCountriesState', payload);
  },
  fetchCountryStatesCases({ commit }) {
    Vue.axios.get('http://covid-19-countries.herokuapp.com/countries').then((res) => {
      commit('updateCountryStatesCases', res.data);
    });
  },
  getCountries({ commit }) {
    Vue.axios.get('https://restcountries.eu/rest/v2/all').then((res) => {
      commit('updateCountries', res.data);
    });
  },
  getLatestNews({ commit }, payload) {
    const newsUrl = `https://newsapi.org/v2/everything?q=${payload}&sortBy=publishedAt&apiKey=${rapidAPIKey}&language=en`;
    Vue.axios.get(newsUrl).then(({ data }) => {
      commit('updateNews', [data, payload]);
    });
  },
};
