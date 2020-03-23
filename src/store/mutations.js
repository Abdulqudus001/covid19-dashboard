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
};
