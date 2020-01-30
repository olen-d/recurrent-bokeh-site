<template>
  <div class="signup">
    <Signup v-on="$listeners" />
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from "@/components/Signup.vue";

export default {
  name: "signup",
  components: {
    Signup
  },

  beforeRouteLeave(to, from, next) {
    this.$store.commit("setSignupPage", false);
    next();
  }
};
</script>
