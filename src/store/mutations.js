// import Vue from 'vue';

export default {
  updateWorldData(state, payload) {
    state.worldData = payload;
  },
  updateWorldDataToday(state, payload) {
    state.allCountryCases = payload;
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
    state.countryStatesCases = payload;
  },
  async updateCountries(state, payload) {
    state.countries = payload;
  },
  // Updates news array depending on whether there is a search filter or not
  updateNews(state, [payload, type]) {
    // Empty the contry news array if there is a new search parameter
    if (type && type !== state.newsType && type.trim() !== 'covid19') {
      state.newsInCountry = [];
    }
    // Stores value of the search paramter in the store
    state.newsType = type && type.trim();
    // Remove duplicates from news items
    const filteredArticles = payload.articles.filter((el, index, self) => {
      const exists = index === self.findIndex((t) => (
        t.title === el.title
      ));
      return exists;
    });

    // Checks if items already exist in the array
    if (state.news.length > 0 || state.newsInCountry.length > 0) {
      // Get title of last elements and compare to avoid duplicate fetching of news item
      const lastNewsItem = state.news.length > 0 && state.news[state.news.length - 1].title;
      const lastCountryNewsItem = state.newsInCountry.length > 0
      && state.newsInCountry[state.newsInCountry.length - 1].title;
      const lastItemInFilteredArray = filteredArticles[filteredArticles.length - 1].title;

      if (lastNewsItem !== lastItemInFilteredArray
        || lastCountryNewsItem !== lastItemInFilteredArray
      ) {
        // Checks if there is no search parameter and pushes into the corresponding array
        if (!type || (type && type.trim() === 'covid19')) {
          state.news.push(...filteredArticles);
          state.newsInCountry = [];
        } else if (type.trim() !== 'covid19') {
          state.newsInCountry.push(...filteredArticles);
          state.news = [];
        }
      }
    } else if (!type || type.trim() === 'covid19') {
      state.news.push(...filteredArticles);
    } else {
      state.newsInCountry.push(...filteredArticles);
    }
  },
  updatePageNum(state) {
    state.pageNum += 1;
  },
};
