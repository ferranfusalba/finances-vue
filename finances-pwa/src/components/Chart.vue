<template>
    <ccv-pie-chart :data='data' :options='options'></ccv-pie-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import "../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "Chart",
  components: {},
  data() {
    return {
      data: [
        {
          group: "2V2N 9KYPM version 1",
          value: 20000,
        },
        {
          group: "L22I P66EP L22I P66EP L22I P66EP",
          value: 65000,
        },
        {
          group: "JQAI 2M4L1",
          value: 75000,
        },
        {
          group: "J9DZ F37AP",
          value: 1200,
        },
        {
          group: "YEL48 Q6XK YEL48",
          value: 10000,
        },
        {
          group: "Misc",
          value: 25000,
        },
      ],
      options: {
        title: "Pie",
        resizable: true,
        height: "400px",
      },
    };
  },
};
</script>
