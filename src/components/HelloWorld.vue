<template>
  <v-container>
    <Welcome />
    <FrontPageContent
      v-bind:heading="flexibility.heading"
      v-bind:content="flexibility.content"
    />
    <FrontPageContent
      v-bind:heading="whatsnext.heading"
      v-bind:content="whatsnext.content"
    />
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
    whatsnext: {
      heading: "What's Next?",
      content:
        "Recurring Bokeh is currently in development. Back end microservices will be released as they are completed, followed by the default front end and administration client. Connect with us on social media or sign up for the mailing list to keep abreast of upcoming interim releases."
    }
  })
};
</script>
