<template>
  <v-row>
    <v-col cols="1" sm="2" md="4">
      &nbsp;
    </v-col>
    <v-col cols="10" sm="8" md="4">
      <SignupForm formTitle="Sign Up" />
    </v-col>
    <v-col cols="1" sm="2" md="4">
      &nbsp;
    </v-col>
  </v-row>
</template>

<script>
import SignupForm from "./SignupForm";

export default {
  components: {
    SignupForm
  },

  mounted() {
    this.$store.commit("setSignupPage", true);
  }
};
</script>
