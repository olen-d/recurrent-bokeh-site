<template>
  <v-container>
    <Welcome />
    <FrontPageContent
      v-bind:heading="flexibility.heading"
      v-bind:content="flexibility.content"
    />

    <v-flex mb-5 xs12>
      <h2 class="headline font-weight-bold mb-3">What's next?</h2>

      <v-layout justify-center>
        <a
          v-for="(next, i) in whatsNext"
          :key="i"
          :href="next.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ next.text }}
        </a>
      </v-layout>
    </v-flex>

    <v-flex xs12 mb-5>
      <h2 class="headline font-weight-bold mb-3">Important Links</h2>

      <v-layout justify-center>
        <a
          v-for="(link, i) in importantLinks"
          :key="i"
          :href="link.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ link.text }}
        </a>
      </v-layout>
    </v-flex>

    <v-flex xs12 mb-5>
      <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

      <v-layout justify-center>
        <a
          v-for="(eco, i) in ecosystem"
          :key="i"
          :href="eco.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ eco.text }}
        </a>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import FrontPageContent from "./FrontPageContent.vue";
import Welcome from "./Welcome.vue";

export default {
  name: "HelloWorld",

  components: {
    FrontPageContent,
    Welcome
  },

  data: () => ({
    flexibility: {
      heading: "Flexibility",
      content:
        "Photographers can begin publishing images immediately using Recurring Bokeh with the included front end and administration client. Power users can leverage a back end powered by microservices accessed through an application programming interface (API) to build a completely custom front end to meet the needs of even the most demanding application."
    },
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
