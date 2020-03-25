export default {
  worldData: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  allCountryCases: [],
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
      style: {
        color: '',
      },
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
      style: {
        color: '',
      },
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
      color: '#00CFE8',
    }],
  },
  caseChangesLineData: {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Reported Cases Per Day',
      style: {
        color: '',
      },
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
      style: {
        color: '',
      },
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
      color: '#00CFE8',
    }],
  },
  deathChangesChartData: {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Reported Deaths Per Day',
      style: {
        color: '',
      },
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
      style: {
        color: '',
      },
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
      pointFormat: '<b>Deaths on {point.name}</b>: <b>{point.y}</b>',
    },
    series: [{
      name: 'Reported Deaths',
      data: [],
      color: '#cf270a',
    }],
  },
  deathChangesLineData: {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Reported Cases Per Day',
      style: {
        color: '',
      },
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
      style: {
        color: '',
      },
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
      name: 'Reported Deaths',
      data: [],
      color: '#cf270a',
    }],
  },
  recoveryChangesChartData: {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Reported Recoveries Per Day',
      style: {
        color: '',
      },
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
      style: {
        color: '',
      },
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
      pointFormat: '<b>Recoveries on {point.name}</b>: <b>{point.y}</b>',
    },
    series: [{
      name: 'Reported Recoveries',
      data: [],
      color: '#28C76F',
    }],
  },
  recoveryChangesLineData: {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Reported Recoveries Per Day',
      style: {
        color: '',
      },
    },
    subtitle: {
      text: 'Data source: <a href="https://corona.lmao.ninja/historical">Here</a>',
      style: {
        color: '',
      },
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
      name: 'Reported Recoveries',
      data: [],
      color: '#28C76F',
    }],
  },
  countryStatesCases: [],
  countries: [],
};
