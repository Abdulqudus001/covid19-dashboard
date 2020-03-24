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
  updateCountryStatesCases(state, payload) {
    console.log(payload);
    state.countryStatesCases = payload;
  },
};
