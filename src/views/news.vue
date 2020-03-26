<template>
  <v-container>
    <v-layout row>
      <v-flex sm12 md6 v-for="(news, index) in getNews" :key="index">
        <v-card max-width="400">
          <v-img max-height="200" v-if="news.urlToImage" :src="news.urlToImage"></v-img>
          <v-img max-height="200" v-else src="../assets/news-default.jpg"></v-img>
          <v-card-title class="white--text">
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
      return text.length > 50 ? `${text.slice(0, 47)}...` : text;
    },
  },
};
</script>

<style>

</style>
