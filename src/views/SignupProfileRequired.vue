<template>
  <div class="signup">
    <SignupProfileRequired v-on="$listeners" />
  </div>
</template>

<script>
// @ is an alias to /src
import SignupProfileRequired from "@/components/SignupProfileRequired.vue";

export default {
  name: "signupProfileRequired",
  components: {
    SignupProfileRequired
  },

  beforeRouteLeave(to, from, next) {
    this.$store.commit("setSignupPage", false);
    next();
  }
};
</script>
