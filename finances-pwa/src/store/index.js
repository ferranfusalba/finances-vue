import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: String,
  },
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
    getActualRoute() {
      return location.href;
    }
  },
  mutations: {
    CHANGE_URL: (state, data) => {
      state.url = data;
    }
  },
  actions: {},
  modules: {},
});
