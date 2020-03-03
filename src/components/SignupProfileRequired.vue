<template>
  <v-row>
    <v-col cols="1" sm="2" md="4">
      &nbsp;
    </v-col>
    <v-col cols="10" sm="8" md="4">
      <ProfileRequiredForm formTitle="Create Your Profile" />
    </v-col>
    <v-col cols="1" sm="2" md="4">
      &nbsp;
    </v-col>
    <router-link to="/signup">Signup</router-link>
  </v-row>
</template>

<script>
import ProfileRequiredForm from "./ProfileRequiredForm";

export default {
  components: {
    ProfileRequiredForm
  },

  mounted() {
    this.$store.commit("setSignupPage", true);
  }
};
</script>
