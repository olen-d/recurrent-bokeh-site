import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginPage: false
  },

  mutations: {
    setLoginPage(state, loginPage) {
      state.loginPage = loginPage;
    }
  },
  actions: {},
  modules: {}
});
