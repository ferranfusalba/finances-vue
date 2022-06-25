import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: String,
    name: 'Ferran',
    accounts: [
      {
        id: 1,
        name: "BBVA",
        icon: "Currency20",
        route: "/accounts/bbva",
        amount: 1345,
      },
      {
        id: 2,
        name: "Andbank",
        icon: "Currency20",
        route: "/accounts/andbank",
        amount: 945,
      },
      {
        id: 3,
        name: "N26",
        icon: "Currency20",
        route: "/accounts/n26",
        amount: 2574,
      },
      {
        id: 4,
        name: "Revolut",
        icon: "Currency20",
        route: "/accounts/revolut",
        amount: 564,
      },
      {
        id: 5,
        name: "Bankinter",
        icon: "Currency20",
        route: "/accounts/bankinter",
        amount: 3000,
      },
    ],
    data: [
      {
        id: 1,
        name: "Global",
        icon: "Globe20",
        route: "/data/global",
      },
      {
        id: 2,
        name: "Month By Month",
        icon: "Globe20",
        route: "/data/month-by-month",
      },
      {
        id: 3,
        name: "Year By Year",
        icon: "Globe20",
        route: "/data/year-by-year",
      },
      {
        id: 4,
        name: "Balance",
        icon: "Globe20",
        route: "/data/balance",
      },
    ]
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
  },
  mutations: {
    CHANGE_URL: (state, data) => {
      state.url = data;
    }
  },
  actions: {},
  modules: {},
});
