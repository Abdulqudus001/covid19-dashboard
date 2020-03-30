<template>
  <v-container grid-list-md>
    {{ computeMapData }}
    <v-layout align-center wrap>
      <h2 class="text-center text-capitalize my-3">Stats for {{ $route.params.country }}</h2>
      <v-spacer />
      <span>
        <b>Total population: </b>
        {{ getCountryPopulation }}
      </span>
    </v-layout>
    <v-layout justify-space-between row wrap class="max-width">
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-outline"
          :count="getCountryData && getCountryData.cases"
          name="Total people infected"
          type="infected"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-octagon-outline"
          :count="getCountryData && getCountryData.deaths"
          name="Total deaths"
          type="deaths"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-thumb-up-outline"
          :count="getCountryData && getCountryData.recovered"
          name="Total people recovered"
          type="recovered"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-outline"
          :count="getCountryData && getCountryData.todayCases"
          name="People infected today"
          type="infected"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-octagon-outline"
          :count="getCountryData && getCountryData.todayDeaths"
          name="Deaths today"
          type="deaths"
        />
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex sm12 md6>
        <v-card color="header" class="max-width my-4 chart-round">
          <highmaps :options="changeChartBGColor(mapOptions)"/>
        </v-card>
      </v-flex>
      <v-flex sm12 md6>
        <v-card color="header" class="max-width my-4 chart-round">
          <highcharts :options="changeChartBGColor(activeLineData)"/>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card color="header" class="max-width my-4 chart-round">
      <v-card-title>
        <v-layout
          justify-end
          row
        >
          <button
            @click="changeChartType('column', 'cases')"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            isChart ? 'selected' : '']"
          >
            <v-icon>mdi-poll</v-icon>
          </button>
          <button
            @click="changeChartType('line', 'cases')"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            !isChart ? 'selected' : '']"
          >
            <v-icon>mdi-chart-line-variant</v-icon>
          </button>
        </v-layout>
      </v-card-title>
      <highcharts :options="changeChartBGColor(casesChartData)"/>
    </v-card>
    <v-card color="header" class="max-width my-4 chart-round">
      <v-card-title>
        <v-layout
          justify-end
          row
        >
          <button
            @click="changeChartType('column', 'deaths')"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            isChartTwo ? 'selected' : '']"
          >
            <v-icon>mdi-poll</v-icon>
          </button>
          <button
            @click="changeChartType('line', 'deaths')"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            !isChartTwo ? 'selected' : '']"
          >
            <v-icon>mdi-chart-line-variant</v-icon>
          </button>
        </v-layout>
      </v-card-title>
      <highcharts :options="changeChartBGColor(deathsChartData)"/>
    </v-card>
    <v-card color="header" class="max-width my-4 chart-round">
      <v-card-title>
        <v-layout
          justify-end
          row
        >
          <button
            @click="changeChartType('column', 'recover')"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            isChartThree ? 'selected' : '']"
          >
            <v-icon>mdi-poll</v-icon>
          </button>
          <button
            @click="changeChartType('line', 'recover')"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            !isChartThree ? 'selected' : '']"
          >
            <v-icon>mdi-chart-line-variant</v-icon>
          </button>
        </v-layout>
      </v-card-title>
      <highcharts :options="changeChartBGColor(recoveriesChartData)"/>
    </v-card>
  </v-container>
</template>

<script>
import StatsCard from '@/components/statsCard.vue';
import stringSimilarity from 'string-similarity';
import { mapGetters } from 'vuex';

export default {
  components: { StatsCard },
  data: () => ({
    isChart: false,
    isChartTwo: false,
    isChartThree: false,
    country: '',
    countryDetails: '',
    casesChartData: {
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
        text: 'Data source: <a href="https://pomber.github.io/covid19/timeseries.json">Here</a>',
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
    deathsChartData: {
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
        text: 'Data source: <a href="https://pomber.github.io/covid19/timeseries.json">Here</a>',
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
        pointFormat: '<b>Deaths as at {point.name}</b>: <b>{point.y}</b>',
      },
      series: [{
        name: 'Reported Deaths',
        data: [],
        color: '#cf270a',
      }],
    },
    recoveriesChartData: {
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
        text: 'Data source: <a href="https://pomber.github.io/covid19/timeseries.json">Here</a>',
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
        pointFormat: '<b>Recoveries as at {point.name}</b>: <b>{point.y}</b>',
      },
      series: [{
        name: 'Reported Deaths',
        data: [],
        color: '#28C76F',
      }],
    },
    activeLineData: {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Active cases',
        style: {
          color: '',
        },
      },
      subtitle: {
        text: 'Data source: <a href="https://pomber.github.io/covid19/timeseries.json">Here</a>',
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
        name: 'Active Cases',
        data: [],
        color: '#28C76F',
      }],
    },
    countryData: [],
    mapOptions: {
      chart: {
        type: 'map',
      },
      title: {
        text: 'Nordic countries',
        style: {
          color: '',
        },
      },
      subtitle: {
        text: 'Map showing affected areas in the country',
        style: {
          color: '',
        },
      },
      mapNavigation: {
        enabled: true,
      },
      legend: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      colorAxis: {
        tickPixelInterval: 100,
        min: 0,
        minColor: '#fff',
        maxColor: '#cf270a',
      },
      series: [{
        name: 'Country',
        mapData: '',
        data: [],
        keys: ['hasc', 'value'],
        joinBy: 'hasc',
        states: {
          hover: {
            color: '#a4edba',
          },
        },
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          format: '{point.properties.postal}',
        },
      }],
    },
    countryHasc: '',
    countryStatesData: '',
  }),
  mounted() {
    this.mapOptions.title.text = `States in ${this.$route.params.country}`;
    this.$store.dispatch('fetchWorldDataToday');
    this.$store.dispatch('getCountries');
    this.country = this.$route.params.country;
    this.getCountryTimeSeries();
    this.getCountryStatesData();
  },
  computed: {
    ...mapGetters([
      'getCountries',
      'getAllCountryCases',
    ]),
    getCountryPopulation() {
      const country = this.country.toLowerCase();
      const countryData = this.getCountries.find((el) => {
        const countryName = el.name.toLowerCase();
        return country === countryName;
      });
      if (countryData) {
        const mapUrl = this.getMapData(countryData);
        this.fetchMapData(mapUrl);
        return countryData.population.toLocaleString();
      } return null;
    },
    getCountryData() {
      // || el.altSpellings.includes(el.country.toUpperCase());
      const country = this.country.toLowerCase();
      const countryDetails = this.getCountries.find((nation) => (
        nation.name.toLowerCase() === country || nation.altSpellings.includes(country.toUpperCase())
      ));
      /* eslint-disable-next-line */
      this.countryDetails = countryDetails;
      const countryData = this.getAllCountryCases.find((el) => {
        const countryName = el.country.toLowerCase();
        return country === countryName
        || countryDetails.altSpellings.includes(countryName.toUpperCase());
      });
      return countryData;
    },
    computeMapData() {
      if (this.countryHasc && this.countryStatesData) {
        const mapdata = this.countryHasc.map((hasc) => {
          const stateData = this.countryStatesData.find((state) => {
            const similarity = stringSimilarity.compareTwoStrings(hasc.name, state.name);
            return similarity > 0.85;
          });
          return [hasc.hasc, (stateData && stateData.cases) || 0];
        });
        /* eslint-disable-next-line */
        this.mapOptions.series[0].data = mapdata;
      }
      return null;
    },
  },
  methods: {
    getMapData(countryDetails) {
      if (countryDetails) {
        const { alpha2Code } = countryDetails;
        const countryCode = alpha2Code.toLowerCase();
        const mapUrl = `https://code.highcharts.com/mapdata/countries/${countryCode}/${countryCode}-all.geo.json`;
        this.fetchMapData(mapUrl);
        return mapUrl;
      }
      return null;
    },
    fetchMapData(url) {
      this.axios.get(url).then(({ data }) => {
        const hasc = data.features.map(({ properties }) => {
          const hascValue = {
            name: properties.name,
            hasc: properties.hasc,
          };
          return hascValue;
        });
        this.countryHasc = hasc;
        this.mapOptions.series[0].mapData = data;
      });
    },
    changeChartType(chartType, data) {
      if (data === 'cases') {
        this.casesChartData.chart.type = chartType;
        this.casesChartData.tooltip.pointFormat = 'pointFormat: \'<b>{point.y}</b>\'';
      } else if (data === 'deaths') {
        this.deathsChartData.chart.type = chartType;
        this.deathsChartData.tooltip.pointFormat = 'pointFormat: \'<b>{point.y}</b>\'';
      } else {
        this.recoveriesChartData.chart.type = chartType;
        this.recoveriesChartData.tooltip.pointFormat = 'pointFormat: \'<b>{point.y}</b>\'';
      }
    },
    getCountryTimeSeries() {
      this.axios.get('https://pomber.github.io/covid19/timeseries.json').then(({ data }) => {
        const country = `${[...this.country][0].toUpperCase()}${this.country.slice(1)}`;
        const keys = Object.keys(data);
        keys.forEach((key) => {
          if (key.toLowerCase() === country.toLowerCase()
            || this.countryDetails.altSpellings.includes(key.toUpperCase())
            || this.countryDetails.altSpellings.includes(this.getCountryInitials(key).toUpperCase())
          ) {
            this.countryData = data[key];
          }
        });
        this.getChartData(this.countryData);
      });
    },
    getCountryInitials(countryName) {
      const initials = countryName.split(' ').map((name) => name[0]);
      return initials.join('');
    },
    getChartData(data) {
      const casesData = data.map((el) => [el.date, el.confirmed]);
      const deathData = data.map((el) => [el.date, el.deaths]);
      const recoveredData = data.map((el) => [el.date, el.recovered]);
      const activeCases = data.map((el) => {
        let active = 0;
        if (el.recovered) {
          active = [el.date, el.confirmed - (el.deaths + el.recovered)];
        } else {
          active = [el.date, el.confirmed - (el.deaths)];
        }
        return active;
      });
      this.activeLineData.series[0].data = activeCases;
      this.casesChartData.series[0].data = casesData;
      this.deathsChartData.series[0].data = deathData;
      this.recoveriesChartData.series[0].data = recoveredData;
    },
    changeChartBGColor(data) {
      const chartData = { ...data };
      const color = this.$vuetify.theme.dark ? '#fff' : '#10163a';
      chartData.title.style.color = color;
      chartData.subtitle.style.color = color;
      chartData.chart.backgroundColor = this.$vuetify.header;
      return chartData;
    },
    getCountryStatesData() {
      const countryUrl = `http://covid-19-countries.herokuapp.com/countries/${this.country}`;
      this.axios.get(countryUrl).then(({ data }) => {
        if (Array.isArray(data[0])) {
          this.countryStatesData = data[0].states;
        }
      });
    },
  },
};
</script>

<style>

</style>
