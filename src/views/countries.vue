<template>
  <v-container>
    <v-layout justify-space-between wrap>
      <v-flex sm12 md3>
        <v-text-field
          solo
          label="Search country"
          prepend-inner-icon="mdi-magnify"
          v-model="country"
          background-color="header"
        ></v-text-field>
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
    <v-layout wrap justify-center>
      <v-flex v-for="country in filtered" :key="country.name" md3>
        <v-card class="mt-5 mx-auto" max-width="90%" color="header">
          <v-img
            height="180px"
            class="align-end white--text"
            :src="country.flag"
          >
          </v-img>
          <v-card-title>
            <v-layout>
              {{ country.name }}
              <v-spacer />
              <v-icon>mdi-open-in-new</v-icon>
            </v-layout>
          </v-card-title>
          <v-card-subtitle>
            <div>
              <b>Cases: </b>
              {{ country.cases || 'Not available' }}
            </div>
            <div>
              <b>Deaths: </b>
              {{ country.deaths || 'Not available' }}
            </div>
            <div>
              <b>Recoveries: </b>
              {{ country.recovered || 'Not available' }}
            </div>
          </v-card-subtitle>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    continent: '',
    country: '',
    items: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'World'],
  }),
  computed: {
    ...mapGetters([
      'getCountries',
      'getAllCountryCases',
    ]),
    getCountryCaseDetails() {
      const detailedCountryCases = this.getCountries.map((el) => {
        const country = this.getAllCountryCases.find((element) => element.country === el.name);
        return { ...el, ...country };
      });
      return detailedCountryCases;
    },
    filtered() {
      return this.getCountryCaseDetails.filter((el) => {
        const name = el.name.toLowerCase();
        const region = el.region.toLowerCase();
        if (this.continent === 'World') {
          return name.includes(this.country.toLowerCase());
        } return name.includes(this.country.toLowerCase())
          && region.includes(this.continent.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.dispatch('getCountries');
    this.$store.dispatch('fetchWorldDataToday');
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
