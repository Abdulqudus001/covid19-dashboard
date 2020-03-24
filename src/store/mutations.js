export default {
  updateWorldData(state, payload) {
    state.worldData = payload;
  },
  updateWorldDataToday(state, payload) {
    const casesToday = payload.reduce((acc, el) => {
      acc[0] += el.todayCases;
      acc[1] += el.todayDeaths;
      return acc;
    }, [0, 0]);
    state.worldDataToday = {
      cases: casesToday[0],
      deaths: casesToday[1],
    };
  },
  updateNewCaseTrend(state, payload) {
    const casesTrend = Object.keys(payload[0]).map((el) => {
      let count = 0;
      const cases = payload.reduce((acc, element) => {
        count += parseInt(element[el], 10) || 0;
        acc[el] = count;
        return acc;
      }, {});
      return Object.entries(cases)[0];
    });

    const casesCount = casesTrend.map((el) => el[1]);
    const casesLabel = casesTrend.map((el) => el[0]);

    state.caseChangesLineData.series[0].data = casesCount;
    state.caseChangesLineData.xAxis.categories = casesLabel;

    state.caseChangesChartData.series[0].data = casesTrend;
  },
  updateNewDeathTrend(state, payload) {
    const deathTrend = Object.keys(payload[0]).map((el) => {
      let count = 0;
      const deaths = payload.reduce((acc, element) => {
        count += parseInt(element[el], 10) || 0;
        acc[el] = count;
        return acc;
      }, {});
      return Object.entries(deaths)[0];
    });

    const deathCount = deathTrend.map((el) => el[1]);
    const deathLabel = deathTrend.map((el) => el[0]);

    state.deathChangesLineData.series[0].data = deathCount;
    state.deathChangesLineData.xAxis.categories = deathLabel;

    state.deathChangesChartData.series[0].data = deathTrend;
  },
  updateNewRecoveredTrend(state, payload) {
    const recoveredTrend = Object.keys(payload[0]).map((el) => {
      let count = 0;
      const recoveries = payload.reduce((acc, element) => {
        count += parseInt(element[el], 10) || 0;
        acc[el] = count;
        return acc;
      }, {});
      return Object.entries(recoveries)[0];
    });

    const recoveriesCount = recoveredTrend.map((el) => el[1]);
    const recoveriesLabel = recoveredTrend.map((el) => el[0]);

    state.recoveryChangesLineData.series[0].data = recoveriesCount;
    state.recoveryChangesLineData.xAxis.categories = recoveriesLabel;

    state.recoveryChangesChartData.series[0].data = recoveredTrend;
  },
  updateCountryStatesCases(state, payload) {
    console.log(payload);
    state.countryStatesCases = payload;
  },
};
