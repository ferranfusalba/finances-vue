<template>
  <!-- Vertical grouped bar (discrete) -->
  <ccv-grouped-bar-chart
    :data="dataMonth"
    :options="optionsMonth"
  ></ccv-grouped-bar-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import "../../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "BarGrouped",
  components: {},
  props: ["dataMonth", "optionsMonth"] /*
  data() {
    return {
      data: [
        {
          group: "Income",
          key: "01",
          value: 980,
        },
        {
          group: "Income",
          key: "02",
          value: 1485,
        },
        {
          group: "Income",
          key: "03",
          value: 1485,
        },
        {
          group: "Income",
          key: "04",
          value: 1485,
        },
        {
          group: "Income",
          key: "05",
          value: 1485,
        },
        {
          group: "Income",
          key: "06",
          value: 2300,
        },
        {
          group: "Income",
          key: "07",
          value: 1485,
        },
        {
          group: "Income",
          key: "08",
          value: 1485,
        },
        {
          group: "Income",
          key: "09",
          value: 1485,
        },
        {
          group: "Income",
          key: "10",
          value: 1485,
        },
        {
          group: "Income",
          key: "11",
          value: 1485,
        },
        {
          group: "Income",
          key: "12",
          value: 2800,
        },
        {
          group: "Expenses",
          key: "01",
          value: -1030,
        },
        {
          group: "Expenses",
          key: "02",
          value: -910,
        },
        {
          group: "Expenses",
          key: "03",
          value: -990,
        },
        {
          group: "Expenses",
          key: "04",
          value: -990,
        },
        {
          group: "Expenses",
          key: "05",
          value: -995,
        },
        {
          group: "Expenses",
          key: "06",
          value: -1070,
        },
        {
          group: "Expenses",
          key: "07",
          value: -1040,
        },
        {
          group: "Expenses",
          key: "08",
          value: -860,
        },
        {
          group: "Expenses",
          key: "09",
          value: -1060,
        },
        {
          group: "Expenses",
          key: "10",
          value: -910,
        },
        {
          group: "Expenses",
          key: "11",
          value: -940,
        },
        {
          group: "Expenses",
          key: "12",
          value: -1000,
        },
      ],
      options: {
        title: "Total - Income & Expenses",
        axes: {
          left: {
            mapsTo: "value",
          },
          bottom: {
            scaleType: "labels",
            mapsTo: "key",
          },
        },
        height: "400px",
      },
    };
  }, */,
};
</script>
