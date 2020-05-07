import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      dark: {
        primary: '#212121',
        secondary: '#FF009A'
      },
    },
});
