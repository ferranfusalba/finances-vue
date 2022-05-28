import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    isDesktop() {
      if (window.innerWidth >= 1056) {
        return true;
      } else if (window.innerWidth < 1055) {
        return false;
      }
    },
    innerWidth() {
      return window.innerWidth;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
