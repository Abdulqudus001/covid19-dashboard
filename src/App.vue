<template>
  <v-app
    id="main"
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <v-app-bar app color="header">
      <a
        href="/"
        class="link link-img"
        :class="$vuetify.theme.dark ? 'link-dark' : 'link-light'"
        color="primary"
      >
        <img
          v-if="$vuetify.theme.dark"
          src="./assets/logo-white.png"
          alt=""
        >
        <img
          v-else
          src="./assets/logo.png"
          alt=""
        >
      </a>

      <v-spacer></v-spacer>
      <a
        href="#/news"
        class="link"
        :class="$vuetify.theme.dark ? 'link-dark' : 'link-light'"
      >News</a>
      <a
        href="#/countries"
        class="link"
        :class="$vuetify.theme.dark ? 'link-dark' : 'link-light'"
      >Countries</a>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark" v-on="on">
            <v-icon>
              {{ $vuetify.theme.dark ? 'mdi-lightbulb-outline' : 'mdi-lightbulb-off-outline' }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ $vuetify.theme.dark ? 'Turn on the lights' : 'Turn off the lights' }}</span>
      </v-tooltip>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bitter&display=swap');
  .max-width {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto !important;
  }

  .link-img {
    width: 40px;
    img {
      width: 100%;
    }
  }

  .link {
    text-decoration: none;
    margin: 0 10px;
    &-dark {
      color: #fff !important;
      &:hover {
        color: rgba(255, 255, 255, 0.8) !important;
      }
    }
    &-light {
      color: #10163a !important;
      &:hover {
        color: rgba(0, 0, 0, 0.8) !important;
      }
    }
  }
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
