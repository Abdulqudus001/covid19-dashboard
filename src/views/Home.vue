<template>
  <v-container>
    <v-layout justify-center row wrap>
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
  },
  computed: {
    ...mapGetters([
      'getWorldData',
      'getTodayWorldData',
    ]),
  },
};
</script>

<style lang="scss">

</style>
