<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-outline"
          :count="worldStats.cases"
          name="Total cases"
          type="infected"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-alert-octagon-outline"
          :count="worldStats.cases"
          name="Total cases"
          type="deaths"
        />
      </v-flex>
      <v-flex sm12 md2 class="mx-2 my-2">
        <stats-card
          icon="mdi-thumb-up-outline"
          :count="worldStats.cases"
          name="Total cases"
          type="recovered"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StatsCard from '@/components/statsCard.vue';

export default {
  data: () => ({
    worldStats: {
      cases: 319010,
      deaths: 13685,
      recovered: 96006,
    },
  }),
  components: { StatsCard },
};
</script>

<style lang="scss">

</style>
