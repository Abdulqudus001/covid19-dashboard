<template>
  <v-container fill-height>
    <v-layout justify-center align-center class="display-2 font-weight-bold text-center">
      Coming soon
    </v-layout>
    <v-layout justify-center align-center>
      <a
        href="#/"
        class="link"
        :class="$vuetify.theme.dark ? 'link-dark' : 'link-light'"
      >Home</a>
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
    </v-layout>
  </v-container>
</template>

<script>
export default {

};
</script>

<style>

</style>
