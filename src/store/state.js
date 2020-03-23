export default {
  worldData: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  worldDataToday: {
    cases: 0,
    deaths: 0,
  },
  caseChangesChartData: {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Reported Cases Per Day',
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: '<b>Cases on {point.name}</b>: <b>{point.y}</b>',
    },
    series: [{
      name: 'Reported Cases',
      data: [],
    }],
  },
  caseChangesLineData: {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Reported Cases Per Day',
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: '<b>{point.y}</b>',
    },
    series: [{
      name: 'Reported Cases',
      data: [],
    }],
  },
};
