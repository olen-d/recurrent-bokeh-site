<template>
  <v-row>
    <v-col cols="1" sm="2" md="4">
      &nbsp;
    </v-col>
    <v-col cols="10" sm="8" md="4">
      <LoginForm />
    </v-col>
    <v-col cols="1" sm="2" md="4">
      &nbsp;
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from "./LoginForm";

export default {
  components: {
    LoginForm
  },

  mounted() {
    this.$store.commit("setLoginPage", true);
  }
};
</script>
