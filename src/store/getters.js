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
};
