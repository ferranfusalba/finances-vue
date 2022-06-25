<template>
  <ccv-pie-chart :data="data" :options="optionsGlobal"></ccv-pie-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import "../../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "Pie",
  components: {},
  props: ["optionsGlobal"],
  data() {
    return {
      data: [], /*
      options: {
        title: "By Accounts",
        resizable: true,
        height: "400px",
      }, */
    };
  },
  methods: {
    returnData() {
      for (let i = 0; i < this.$store.state.accounts.length; i++) {
        this.data.push({
          group: this.$store.state.accounts[i].name,
          value: this.$store.state.accounts[i].amount,
        });
      }
    },
  },
  beforeMount() {
    this.returnData();
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 320px) {
  .ccv-pie-chart {
    max-width: 300px;
  }
}
</style>
