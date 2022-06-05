<template>
  <ccv-pie-chart :data="data" :options="options"></ccv-pie-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import "../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "Chart",
  components: {},
  data() {
    return {
      data: [],
      options: {
        title: "Posició Global",
        resizable: true,
        height: "400px",
      },
    };
  },
  methods: {
    returnData() {
      for (let i = 0; i < this.$store.state.accounts.length; i++) {
        this.data.push({group: this.$store.state.accounts[i].name, value:  this.$store.state.accounts[i].amount});
      }
    },
  },
  beforeMount() {
    this.returnData();
  },
};
</script>
