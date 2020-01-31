import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJWT: "",
    now: new Date(),
    loginPage: false,
    signupPage: false
  },

  mutations: {
    setJWT(state, jwt) {
      state.currentJWT = jwt;
    },

    setNow(state) {
      state.now = new Date();
    },

    setLoginPage(state, loginPage) {
      state.loginPage = loginPage;
    },

    setSignupPage(state, signupPage) {
      state.signupPage = signupPage;
    }
  },

  actions: {
    start({ commit }) {
      setInterval(() => {
        commit("setNow");
      }, 1000 * 60);
    }
  },

  modules: {}
});
