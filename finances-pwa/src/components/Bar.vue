<template>
    <ccv-grouped-bar-chart :data='data' :options='options'></ccv-grouped-bar-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import "../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "Bar",
  components: {},
  data() {
    return {
      data: [
        {
          group: "Dataset 1",
          key: "01",
          value: 65000,
        },
        {
          group: "Dataset 1",
          key: "02",
          value: -29123,
        },
        {
          group: "Dataset 1",
          key: "03",
          value: -35213,
        },
        {
          group: "Dataset 1",
          key: "04",
          value: 51213,
        },
        {
          group: "Dataset 1",
          key: "05",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "06",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "07",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "08",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "09",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "10",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "11",
          value: 16932,
        },
        {
          group: "Dataset 1",
          key: "12",
          value: 16932,
        },
        {
          group: "Dataset 2",
          key: "01",
          value: 32432,
        },
        {
          group: "Dataset 2",
          key: "02",
          value: -21312,
        },
        {
          group: "Dataset 2",
          key: "03",
          value: -56456,
        },
        {
          group: "Dataset 2",
          key: "04",
          value: -21312,
        },
        {
          group: "Dataset 2",
          key: "05",
          value: 34234,
        },
        {
          group: "Dataset 3",
          key: "01",
          value: -12312,
        },
        {
          group: "Dataset 3",
          key: "02",
          value: 23232,
        },
        {
          group: "Dataset 3",
          key: "03",
          value: 34232,
        },
        {
          group: "Dataset 3",
          key: "04",
          value: -12312,
        },
        {
          group: "Dataset 3",
          key: "05",
          value: -34234,
        },
        {
          group: "Dataset 4",
          key: "01",
          value: -32423,
        },
        {
          group: "Dataset 4",
          key: "02",
          value: 21313,
        },
        {
          group: "Dataset 4",
          key: "03",
          value: 64353,
        },
        {
          group: "Dataset 4",
          key: "04",
          value: 24134,
        },
        {
          group: "Dataset 4",
          key: "05",
          value: 24134,
        },
      ],
      options: {
        title: "Vertical grouped bar (discrete)",
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
  },
};
</script>
