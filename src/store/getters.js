export default {
  getWorldData(state) {
    return state.worldData;
  },
  getTodayWorldData(state) {
    return state.worldDataToday;
  },
  getCaseChangesChartData(state) {
    return state.caseChangesChartData;
  },
  getCaseChangesLineData(state) {
    return state.caseChangesLineData;
  },
  getDeathChangesChartData(state) {
    return state.deathChangesChartData;
  },
  getDeathChangesLineData(state) {
    return state.deathChangesLineData;
  },
  getRecoveryChangesChartData(state) {
    return state.recoveryChangesChartData;
  },
  getRecoveryChangesLineData(state) {
    return state.recoveryChangesLineData;
  },
  getCountryStatesCases(state) {
    return state.countryStatesCases;
  },
  getCountries(state) {
    return state.countries;
  },
  getAllCountryCases(state) {
    return state.allCountryCases;
  },
  getNews(state) {
    if (!state.newsType || state.newsType === 'covid19') {
      return state.news;
    } return state.newsInCountry;
  },
};
