<template>
  <v-container>
    <v-layout justify-space-between row wrap class="max-width">
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-outline"
          :count="getWorldData.cases"
          name="Total people infected"
          type="infected"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-octagon-outline"
          :count="getWorldData.deaths"
          name="Total deaths"
          type="deaths"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-thumb-up-outline"
          :count="getWorldData.recovered"
          name="Total people recovered"
          type="recovered"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-outline"
          :count="getTodayWorldData.cases"
          name="People infected today"
          type="infected"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-octagon-outline"
          :count="getTodayWorldData.deaths"
          name="Deaths today"
          type="deaths"
        />
      </v-flex>
    </v-layout>
    <v-card color="header" class="max-width my-4 chart-round">
      <v-card-title>
        <v-layout
          justify-end
          row
        >
          <button
            @click="isChart = true"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            isChart ? 'selected' : '']"
          >
            <v-icon>mdi-poll</v-icon>
          </button>
          <button
            @click="isChart = false"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            !isChart ? 'selected' : '']"
          >
            <v-icon>mdi-chart-line-variant</v-icon>
          </button>
        </v-layout>
      </v-card-title>
      <highcharts v-show="isChart" :options="changeChartBGColor(getCaseChangesChartData)"/>
      <highcharts v-show="!isChart" :options="changeChartBGColor(getCaseChangesLineData)"/>
    </v-card>
    <v-card color="header" class="max-width my-4 chart-round">
      <v-card-title>
        <v-layout
          justify-end
          row
        >
          <button
            @click="isChartTwo = true"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            isChartTwo ? 'selected' : '']"
          >
            <v-icon>mdi-poll</v-icon>
          </button>
          <button
            @click="isChartTwo = false"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            !isChartTwo ? 'selected' : '']"
          >
            <v-icon>mdi-chart-line-variant</v-icon>
          </button>
        </v-layout>
      </v-card-title>
      <highcharts v-show="isChartTwo" :options="changeChartBGColor(getDeathChangesChartData)"/>
      <highcharts v-show="!isChartTwo" :options="changeChartBGColor(getDeathChangesLineData)"/>
    </v-card>
    <v-card color="header" class="max-width my-4 chart-round">
      <v-card-title>
        <v-layout
          justify-end
          row
        >
          <button
            @click="isChartThree = true"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            isChartThree ? 'selected' : '']"
          >
            <v-icon>mdi-poll</v-icon>
          </button>
          <button
            @click="isChartThree = false"
            class="chart-action"
            :class="[$vuetify.theme.dark ? 'chart-action-dark' : 'chart-action-light',
            !isChartThree ? 'selected' : '']"
          >
            <v-icon>mdi-chart-line-variant</v-icon>
          </button>
        </v-layout>
      </v-card-title>
      <highcharts v-show="isChartThree" :options="changeChartBGColor(getRecoveryChangesChartData)"/>
      <highcharts v-show="!isChartThree" :options="changeChartBGColor(getRecoveryChangesLineData)"/>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import StatsCard from '@/components/statsCard.vue';

export default {
  data: () => ({
    isChart: true,
    isChartTwo: true,
    isChartThree: true,
  }),
  components: { StatsCard },
  mounted() {
    this.$store.dispatch('fetchWorldData');
    this.$store.dispatch('fetchWorldDataToday');
    this.$store.dispatch('fetchNewCasesTrends');
    this.$store.dispatch('fetchCountryStatesCases');
    this.$store.dispatch('getCountries');
  },
  computed: {
    ...mapGetters([
      'getWorldData',
      'getTodayWorldData',
      'getCaseChangesChartData',
      'getCaseChangesLineData',
      'getCountryStatesCases',
      'getDeathChangesChartData',
      'getDeathChangesLineData',
      'getRecoveryChangesChartData',
      'getRecoveryChangesLineData',
    ]),
  },
  sockets: {
    connect() {
      console.log('Connected successfully');
    },
    countries(data) {
      this.$store.dispatch('updateCountries', data);
    },
  },
  methods: {
    changeChartBGColor(data) {
      const chartData = { ...data };
      const color = this.$vuetify.theme.dark ? '#fff' : '#10163a';
      chartData.title.style.color = color;
      chartData.subtitle.style.color = color;
      chartData.chart.backgroundColor = this.$vuetify.header;
      return chartData;
    },
  },
};
</script>

<style lang="scss">
  .chart-round {
    border-radius: 12px !important;
  }

  .chart-action {
    padding: 3px 9px;
    border-radius: 4px;
    &-light {
      border: 1px solid #10163a;
    }
    &-dark {
      border: 1px solid white;
    }
    &:hover, &.selected {
      background-color: rgba(81, 85, 114, 0.335);
      i {
        color: #6c718a;
      }
    }
  }
</style>
