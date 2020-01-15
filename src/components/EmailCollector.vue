<template>
  <v-card color="indigo darken-4" flat tile class="flex">
    <v-card-title class="indigo--text text--lighten-3">
      Subscribe To Our Newsletter
    </v-card-title>
    <v-card-text>
      <form
        action="https://recurrentbokeh.us4.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="d435b3bf391c9aec59bfcd73c" />
        <input type="hidden" name="id" value="5dc3b2c7fd" />
        <v-text-field
          type="email"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          name="MERGE0"
          id="MERGE0"
          size="25"
          value=""
          label="E-mail Address"
          color="indigo lighten-3"
          dark
        >
        </v-text-field>
        <v-btn
          type="submit"
          class="formEmailButton indigo--text text--lighten-3"
          name="submit"
          color="indigo darken-3"
        >
          Subscribe
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script></script>
