<template>
  <v-layout text-center wrap>
    <v-flex xs12>
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      ></v-img>
    </v-flex>

    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">
        {{ welcome.headline }}
      </h1>
      <p class="subheading font-weight-regular">
        {{ welcome.message }}
      </p>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "Welcome",

  data: () => ({
    welcome: {
      headline: "Your Photography",
      message:
        "Recurrent Bokeh is a content management system for photographers - it ships with a default front-end optimized for displaying images elegantly and beautifully. "
    }
  })
};
</script>
