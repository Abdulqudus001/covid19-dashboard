<template>
  <v-container>
    <v-layout justify-space-between wrap>
      <v-flex sm12 md2>
        <v-select
          :items="items"
          v-model="continent"
          label="Solo field"
          solo
          background-color="header"
        ></v-select>
      </v-flex>
      <v-flex sm12 md3>
        <v-select
          :items="items"
          v-model="continent"
          label="Select a region"
          solo
          background-color="header"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex v-for="country in getCountries" :key="country.name">
        <v-card max-width="300" class="mt-5">
          <v-img
            height="200px"
            class="align-end white--text"
            :src="country.flag"
          >
            <v-card-title>{{ country.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    userLocation: '',
    continent: '',
    items: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  }),
  computed: {
    ...mapGetters([
      'getCountries',
    ]),
  },
  mounted() {
    this.$store.dispatch('getCountries');
  },
};
</script>
<style lang="scss">
  .v-menu__content {
    .theme--dark.v-list {
      background-color: #10163a;
    }
    .theme--light.v-list {
      background-color: #fff;
    }
  }
</style>
