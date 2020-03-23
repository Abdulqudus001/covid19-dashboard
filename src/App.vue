<template>
  <v-app
    id="main"
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <v-app-bar app color="header">
      <h1>COVID19</h1>

      <v-spacer></v-spacer>

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
</style>
