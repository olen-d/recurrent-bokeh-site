<template>
  <v-row>
    <v-col align="center" cols="12">
      <h2 class="display-1 font-weight-bold mb-3">
        {{ heading }}
      </h2>
      <p class="subheading font-weight-regular">
        {{ content }}
      </p>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "FrontPageContent",

  props: {
    heading: String,
    content: String
  }
};
</script>
