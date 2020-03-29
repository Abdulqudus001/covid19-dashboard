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
        <v-hover v-slot:default="{ hover }" open-delay="100">
          <v-card
            max-width="300"
            color="header"
            class="mx-auto"
            :elevation="hover ? 16 : 2"
          >
            <v-img
              height="200"
              v-if="news.urlToImage"
              :src="news.urlToImage"
            ></v-img>
            <v-img max-height="200" v-else src="../assets/news-default.jpg"></v-img>
            <v-card-title style="word-break: break-word;">
              <v-layout align-start>
                <span style="word-break: break-word; max-width: 80%">
                  {{ getText(news.title) || getText(news.description) }}
                </span>
                <v-spacer />
                <v-btn icon @click="openNews(news.url)">
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-progress-circular
        :size="80"
        :color="$vuetify.theme.dark ? '#fff' : '10163a'"
        :width="8"
        indeterminate
      ></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    country: '',
    elevation: 3,
  }),
  created() {
    this.$store.dispatch('getLatestNews', [this.getPageNum]);
  },
  mounted() {
    window.onscroll = (e) => {
      this.handleScroll(e);
    };
  },
  computed: {
    ...mapGetters([
      'getNews',
      'getPageNum',
    ]),
  },
  methods: {
    getText(text) {
      return text.length > 57 ? `${text.slice(0, 44)}...` : text;
    },
    fetchStory(e) {
      this.$store.dispatch('getLatestNews', [this.getPageNum, `covid19 ${e}`]);
    },
    openNews(url) {
      window.open(url, '_blank');
    },
    handleScroll() {
      const bottomOfWindow = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      ) + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.$store.dispatch('updatePageNum');
        this.fetchStory(this.country);
      }
    },
  },
};
</script>

<style>

</style>
