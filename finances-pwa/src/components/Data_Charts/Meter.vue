<template>
  <ccv-meter-chart :data="data" :options="options"></ccv-meter-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import "../../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "Meter",
  components: {},
  // props: ["optionsGlobal"],
  data() {
    return { /*
      data: [
        {
          group: "emails",
          value: 202,
        },
        {
          group: "photos",
          value: 654,
        },
        {
          group: "text messages",
          value: 723,
        },
        {
          group: "other",
          value: 120,
        },
      ], */
      data: [],
      options: {
        title: "Proportional Meter Chart",
        height: "130px",
        meter: {
          proportional: {
            total: 10000,
            unit: "€",
          },
        },
        color: {
          pairing: {
            option: 2,
          },
        },
      },
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
/*
@media screen and (max-width: 320px) {
  .ccv-pie-chart {
    max-width: 300px;
  }
} */
</style>
