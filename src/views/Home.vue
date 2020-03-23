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
    <v-card color="header" class="max-width chart-round">
      <highcharts :options="changeChartBGColor"/>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import StatsCard from '@/components/statsCard.vue';

export default {
  data: () => ({
  }),
  components: { StatsCard },
  mounted() {
    this.$store.dispatch('fetchWorldData');
    this.$store.dispatch('fetchWorldDataToday');
    this.$store.dispatch('fetchNewCasesTrends');
  },
  computed: {
    ...mapGetters([
      'getWorldData',
      'getTodayWorldData',
      'getCaseChangesChartData',
    ]),
    changeChartBGColor() {
      const chartData = { ...this.getCaseChangesChartData };
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
</style>
