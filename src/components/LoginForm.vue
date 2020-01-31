<template>
  <div id="login-form-container">
    <h2 class="mt-6">
      Sign In
    </h2>
    <form id="login-form">
      <v-text-field
        v-model="form.username"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Username"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="form.password"
        type="password"
        size="25"
        label="Password"
        color="indigo darken-3"
      />
      <v-btn
        v-on:click.prevent="submitLoginForm"
        class="indigo--text text--lighten-3"
        name="signIn"
        color="indigo darken-3"
      >
        Sign In
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        username: null,
        password: null
      }
    };
  },

  methods: {
    submitLoginForm() {
      const { username, password } = this.form;
      const formData = {
        username: username.trim(),
        password: password.trim()
      };

      fetch(`${process.env.VUE_APP_API_BASE_URL}/api/users/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(response => {
          return response.json();
        })
        .then(dataObj => {
          if (dataObj.isLoggedIn && dataObj.token) {
            this.$store.commit("setJWT", dataObj.token);
            localStorage.setItem("user_token", dataObj.token); // Needed to persist...
            this.$store.dispatch("start");
            if (this.$store.getters.administrator) {
              this.$router.push({ name: "adminDashboard" });
            } else {
              this.$router.push({ name: "home" });
            }
          }
        });
    }
  }
};
</script>
