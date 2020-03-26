<template>
  <v-container grid-list-md>
    <v-flex sm12 md6>
      <v-text-field
        v-debounce:2000.lock="fetchStory"
        solo
        label="Search News By Country"
        prepend-inner-icon="mdi-magnify"
        v-model="country"
        background-color="header"
      ></v-text-field>
    </v-flex>
    <v-layout row>
      <v-flex sm12 md3 v-for="(news, index) in getNews" :key="index">
        <v-card max-width="300" color="header">
          <v-img
            height="200"
            v-if="news.urlToImage"
            :src="news.urlToImage"
          ></v-img>
          <v-img max-height="200" v-else src="../assets/news-default.jpg"></v-img>
          <v-card-title style="word-break: break-word;">
            {{ getText(news.title) || getText(news.description) }}
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    country: '',
  }),
  created() {
    this.$store.dispatch('getLatestNews', 'covid19');
  },
  computed: {
    ...mapGetters([
      'getNews',
    ]),
  },
  methods: {
    getText(text) {
      return text.length > 60 ? `${text.slice(0, 57)}...` : text;
    },
    fetchStory(e) {
      this.$store.dispatch('getLatestNews', `covid19 in ${e}`);
    },
  },
};
</script>

<style>

</style>
