<template>
  <v-footer color="indigo darken-4" class="mt-12">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card color="indigo darken-4" flat tile class="flex">
            <v-card-title class="indigo--text text--lighten-3">
              Recurrent Bokeh
            </v-card-title>
            <v-list color="indigo darken-4">
              <v-list-item v-for="(co, i) in company" :key="i">
                <v-list-item-content>
                  <router-link
                    :to="co.href"
                    class="no-underline indigo--text text--lighten-2"
                    >{{ co.text }}</router-link
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card color="indigo darken-4" flat tile class="flex">
            <v-card-title class="indigo--text text--lighten-3">
              Connect With Us
            </v-card-title>
            <v-list color="indigo darken-4">
              <v-list-item v-for="(soc, i) in social" :key="i">
                <v-list-item-content>
                  <a
                    :href="soc.href"
                    class="indigo--text text--lighten-2 no-underline"
                  >
                    <v-icon color="indigo lighten-2" dark>
                      {{ soc.icon }}
                    </v-icon>
                    &nbsp;{{ soc.text }}
                  </a>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row color="indigo">
        <v-col>
          <div class="indigo--text text--lighten-2">
            &copy; {{ new Date().getFullYear() }}
            <a
              href="https://www.olen.dev/"
              class="indigo--text text--lighten-2 no-underline"
              >Olen Daelhousen</a
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",

  data: () => ({
    company: [
      {
        _id: 0,
        text: "About",
        href: "/about",
        order: 1
      },
      {
        _id: 1,
        text: "Donate",
        href: "/donate",
        order: 2
      },
      {
        _id: 2,
        text: "Help",
        href: "/help",
        order: 3
      },
      {
        _id: 3,
        text: "Legal",
        href: "/legal",
        order: 4
      }
    ],
    social: [
      {
        _id: 0,
        text: "Instagram",
        href: "https://instagram.com",
        icon: "mdi-instagram",
        order: 1
      },
      {
        _id: 1,
        text: "Twitter",
        href: "https://twitter.com",
        icon: "mdi-twitter-circle",
        order: 2
      },
      {
        _id: 2,
        text: "Facebook",
        href: "https://facebook.com",
        icon: "mdi-facebook",
        order: 3
      },
      {
        _id: 3,
        text: "Youtube",
        href: "https://youtube.com",
        icon: "mdi-youtube",
        order: 4
      },
      {
        _id: 5,
        text: "Github",
        href: "https://github.com/olen-d/recurrent-bokeh-site",
        icon: "mdi-github-circle",
        order: 6
      }
    ]
  })
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
