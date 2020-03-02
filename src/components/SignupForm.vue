<template>
  <div id="signup-form-container">
    <h2 class="mt-6">
      {{ formTitle }}
    </h2>
    <form id="signup-form">
      <v-text-field
        v-model="signupFormData.email"
        type="email"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Email Address"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="signupFormData.password"
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
  props: {
    formTitle: {
      type: String,
      default: "Sign Up"
    }
  },

  data: () => {
    return {
      signupFormData: {
        email: null,
        password: null
      }
    };
  },

  methods: {
    submitSignUpForm() {
      localStorage.removeItem("user_token");

      const { email, password } = this.signupFormData;
      // TODO: Validate this mess

      const formData = {
        email: email.trim().toLowerCase(),
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
            this.$router.push({ name: "signupProfile" });
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
