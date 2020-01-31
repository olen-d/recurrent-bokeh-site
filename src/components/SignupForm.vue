<template>
  <div id="signup-form-container">
    <h2 class="mt-6">
      Sign Up
    </h2>
    <form id="signup-form">
      <v-text-field
        v-model="signupData.firstName"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="First Name"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="signupData.lastName"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Last Name"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="signupData.email"
        type="email"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Email Address"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="signupData.username"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Username"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="signupData.password"
        type="password"
        size="25"
        label="Password"
        color="indigo darken-3"
      />
      <v-btn
        v-on:click.prevent="submitSignUpForm"
        class="indigo--text text--lighten-3"
        name="signup"
        color="indigo darken-3"
      >
        Sign Up
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      signupData: {
        firstName: null,
        lastName: null,
        email: null,
        username: null,
        password: null
      }
    };
  },

  methods: {
    submitSignUpForm() {
      localStorage.removeItem("user_token");

      const {
        firstName,
        lastName,
        email,
        username,
        password
      } = this.signupData;
      // TODO: Validate this mess

      const formData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        username: username.trim(),
        password: password.trim()
      };

      fetch(`${process.env.VUE_APP_API_BASE_URL}/api/users/create`, {
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
            if (this.$store.getters.administrator) {
              this.$router.push({ name: "adminDashboard" });
            } else {
              this.$router.push({ name: "home" });
            }
          } else {
            // Something went horribly wrong
            // TODO: Provide some sort of intelligent error and update the UI with it
          }
        })
        .catch(error => {
          return {
            errorCode: 500,
            errorMsg: "Internal Server Error",
            errorDetail: error
          };
        });
    }
  }
};
</script>
