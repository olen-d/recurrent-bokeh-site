<template>
  <div id="profile-required-form-container">
    <h2 class="mt-6">
      {{ formTitle }}
    </h2>
    <form id="profile-required-form">
      <v-text-field
        v-model="profileData.firstName"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="First Name"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="profileData.lastName"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Last Name"
        color="indigo darken-3"
      />
      <v-text-field
        v-model="profileData.username"
        type="text"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        size="25"
        label="Username"
        color="indigo darken-3"
      />
      <v-btn
        v-on:click.prevent="submitProfileRequiredForm"
        class="indigo--text text--lighten-3"
        name="signup"
        color="indigo darken-3"
      >
        Save and Continue
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: {
      type: String,
      default: "Create Your Profile"
    }
  },

  data: () => {
    return {
      profileData: {
        firstName: null,
        lastName: null,
        username: null
      }
    };
  },

  methods: {
    submitProfileRequiredForm() {
      const { firstName, lastName, username } = this.profileData;
      // TODO: Validate this mess

      const formData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        username: username.trim()
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
