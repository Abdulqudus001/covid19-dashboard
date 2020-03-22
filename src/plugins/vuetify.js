import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        header: '#fff',
      },
      dark: {
        background: '#282c45',
        header: '#10163a',
      },
    },
  },
});
