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
      text: 'Reported Cases',
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
        text: 'Confirmed Cases',
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
      text: 'Reported Cases',
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
        text: 'Confirmed Cases',
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
      text: 'Reported Deaths',
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
        text: 'Confirmed Deaths',
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
      text: 'Reported Cases',
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
        text: 'Confirmed Deaths',
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
      text: 'Reported Recoveries',
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
        text: 'Confirmed Recoveries',
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
      text: 'Reported Recoveries',
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
        text: 'Confirmed Recoveries',
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
  news: [],
  newsInCountry: [],
  newsType: '',
  pageNum: 1,
  availableLanguages: [
    { language: 'af', name: 'Afrikaans' },
    { language: 'sq', name: 'Albanian' },
    { language: 'am', name: 'Amharic' },
    { language: 'ar', name: 'Arabic' },
    { language: 'hy', name: 'Armenian' },
    { language: 'az', name: 'Azerbaijani' },
    { language: 'eu', name: 'Basque' },
    { language: 'be', name: 'Belarusian' },
    { language: 'bn', name: 'Bengali' },
    { language: 'bs', name: 'Bosnian' },
    { language: 'bg', name: 'Bulgarian' },
    { language: 'ca', name: 'Catalan' },
    { language: 'ceb', name: 'Cebuano' },
    { language: 'ny', name: 'Chichewa' },
    { language: 'zh', name: 'Chinese (Simplified)' },
    { language: 'zh-TW', name: 'Chinese (Traditional)' },
    { language: 'co', name: 'Corsican' },
    { language: 'hr', name: 'Croatian' },
    { language: 'cs', name: 'Czech' },
    { language: 'da', name: 'Danish' },
    { language: 'nl', name: 'Dutch' },
    { language: 'en', name: 'English' },
    { language: 'eo', name: 'Esperanto' },
    { language: 'et', name: 'Estonian' },
    { language: 'tl', name: 'Filipino' },
    { language: 'fi', name: 'Finnish' },
    { language: 'fr', name: 'French' },
    { language: 'fy', name: 'Frisian' },
    { language: 'gl', name: 'Galician' },
    { language: 'ka', name: 'Georgian' },
    { language: 'de', name: 'German' },
    { language: 'el', name: 'Greek' },
    { language: 'gu', name: 'Gujarati' },
    { language: 'ht', name: 'Haitian Creole' },
    { language: 'ha', name: 'Hausa' },
    { language: 'haw', name: 'Hawaiian' },
    { language: 'iw', name: 'Hebrew' },
    { language: 'hi', name: 'Hindi' },
    { language: 'hmn', name: 'Hmong' },
    { language: 'hu', name: 'Hungarian' },
    { language: 'is', name: 'Icelandic' },
    { language: 'ig', name: 'Igbo' },
    { language: 'id', name: 'Indonesian' },
    { language: 'ga', name: 'Irish' },
    { language: 'it', name: 'Italian' },
    { language: 'ja', name: 'Japanese' },
    { language: 'jw', name: 'Javanese' },
    { language: 'kn', name: 'Kannada' },
    { language: 'kk', name: 'Kazakh' },
    { language: 'km', name: 'Khmer' },
    { language: 'rw', name: 'Kinyarwanda' },
    { language: 'ko', name: 'Korean' },
    { language: 'ku', name: 'Kurdish (Kurmanji)' },
    { language: 'ky', name: 'Kyrgyz' },
    { language: 'lo', name: 'Lao' },
    { language: 'la', name: 'Latin' },
    { language: 'lv', name: 'Latvian' },
    { language: 'lt', name: 'Lithuanian' },
    { language: 'lb', name: 'Luxembourgish' },
    { language: 'mk', name: 'Macedonian' },
    { language: 'mg', name: 'Malagasy' },
    { language: 'ms', name: 'Malay' },
    { language: 'ml', name: 'Malayalam' },
    { language: 'mt', name: 'Maltese' },
    { language: 'mi', name: 'Maori' },
    { language: 'mr', name: 'Marathi' },
    { language: 'mn', name: 'Mongolian' },
    { language: 'my', name: 'Myanmar (Burmese)' },
    { language: 'ne', name: 'Nepali' },
    { language: 'no', name: 'Norwegian' },
    { language: 'or', name: 'Odia (Oriya)' },
    { language: 'ps', name: 'Pashto' },
    { language: 'fa', name: 'Persian' },
    { language: 'pl', name: 'Polish' },
    { language: 'pt', name: 'Portuguese' },
    { language: 'pa', name: 'Punjabi' },
    { language: 'ro', name: 'Romanian' },
    { language: 'ru', name: 'Russian' },
    { language: 'sm', name: 'Samoan' },
    { language: 'gd', name: 'Scots Gaelic' },
    { language: 'sr', name: 'Serbian' },
    { language: 'st', name: 'Sesotho' },
    { language: 'sn', name: 'Shona' },
    { language: 'sd', name: 'Sindhi' },
    { language: 'si', name: 'Sinhala' },
    { language: 'sk', name: 'Slovak' },
    { language: 'sl', name: 'Slovenian' },
    { language: 'so', name: 'Somali' },
    { language: 'es', name: 'Spanish' },
    { language: 'su', name: 'Sundanese' },
    { language: 'sw', name: 'Swahili' },
    { language: 'sv', name: 'Swedish' },
    { language: 'tg', name: 'Tajik' },
    { language: 'ta', name: 'Tamil' },
    { language: 'tt', name: 'Tatar' },
    { language: 'te', name: 'Telugu' },
    { language: 'th', name: 'Thai' },
    { language: 'tr', name: 'Turkish' },
    { language: 'tk', name: 'Turkmen' },
    { language: 'uk', name: 'Ukrainian' },
    { language: 'ur', name: 'Urdu' },
    { language: 'ug', name: 'Uyghur' },
    { language: 'uz', name: 'Uzbek' },
    { language: 'vi', name: 'Vietnamese' },
    { language: 'cy', name: 'Welsh' },
    { language: 'xh', name: 'Xhosa' },
    { language: 'yi', name: 'Yiddish' },
    { language: 'yo', name: 'Yoruba' },
    { language: 'zu', name: 'Zulu' },
  ],
};
