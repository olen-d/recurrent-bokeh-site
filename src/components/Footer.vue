<template>
  <v-footer color="indigo darken-4">
    <v-container fluid>
      <v-row>
        <v-col xs="12" md="3">
          <v-card class="flex" flat tile>
            <v-card-title>
              Recurrent Bokeh
            </v-card-title>
            <v-list>
              <v-list-item v-for="(co, i) in company" :key="i">
                <v-list-item-content>
                  <v-btn>
                    <router-link :to="co.href">{{ co.text }}</router-link>
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col xs="12" md="3">
          <v-card class="flex" flat tile>
            <v-card-title>
              Connect With Us
            </v-card-title>
            <v-btn v-for="(soc, i) in social" :key="i" icon>
              <a :href="soc.href" class="no-underline">
                <v-icon color="indigo" size="2rem" dark>{{ soc.icon }}</v-icon>
              </a>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>&copy; {{ new Date().getFullYear() }} <a href="https://www.olen.dev/">Olen Daelhousen</a></div>
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
