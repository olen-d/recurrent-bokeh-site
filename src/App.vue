<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <div class="d-flex align-center">
        <v-img
          :src="require('./assets/logos/rb_small.png')"
          alt="Recurrent Bokeh Logo"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          width="40"
        />

        <v-img
          :src="require('./assets/logos/rb_word_mark.png')"
          alt="Recurrent Bokeh Name"
          class="shrink hidden-sm-and-down"
          contain
          min-width="225"
          width="225"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn to="/why" text>
        <span class="mr-2">Why?</span>
      </v-btn>

      <v-btn to="/build" text>
        <span class="mr-2">Build</span>
      </v-btn>

      <v-btn to="/resources" text>
        <span class="mr-2">Resources</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <RouterView></RouterView>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Footer
  },

  data: () => ({
    //
  })
};
</script>
