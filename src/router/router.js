import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const Signup = () =>
  import(/* webpackChunkName: "signup") */ "../views/Signup.vue");
const SignupProfile = () =>
  import(/* webpackChunkName: "signup" */ "../views/SignupProfileRequired.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login") */ "../views/Login.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    children: [
      {
        path: "profile",
        name: "signupProfile",
        component: SignupProfile
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
