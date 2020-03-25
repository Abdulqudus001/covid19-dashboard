<template>
  <v-container>
    <h2 class="text-center text-capitalize my-3">Stats for {{ $route.params.country }}</h2>
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
  </v-container>
</template>

<script>
import StatsCard from '@/components/statsCard.vue';
import { mapGetters } from 'vuex';

export default {
  components: { StatsCard },
  data: () => ({
    country: '',
  }),
  mounted() {
    this.country = this.$route.params.country;
  },
  computed: {
    ...mapGetters([
      'getAllCountryCases',
    ]),
    getCountryData() {
      const country = this.country.toLowerCase();
      const countryData = this.getAllCountryCases.find((el) => {
        const countryName = el.country.toLowerCase();
        return country === countryName;
      });
      return countryData;
    },
  },
};
</script>

<style>

</style>
