<template>
<!-- Vertical stacked bar (divergent) -->
  <ccv-stacked-bar-chart
    :data="dataMonth"
    :options="optionsMonth"
  ></ccv-stacked-bar-chart>
</template>

<script>
import Vue from "vue";
import "@carbon/charts/styles.css";
import chartsVue from "@carbon/charts-vue";
import "../../plex-and-carbon-components.css";

Vue.use(chartsVue);

export default {
  name: "BarSectorized",
  components: {},
  props: ["dataMonth", "optionsMonth"], /*
  data() {
    return {
      data: [
        {
          group: "Salary",
          key: "01",
          value: 980,
        },
        {
          group: "Salary",
          key: "02",
          value: 1485,
        },
        {
          group: "Salary",
          key: "03",
          value: 1485,
        },
        {
          group: "Salary",
          key: "04",
          value: 1485,
        },
        {
          group: "Salary",
          key: "05",
          value: 1485,
        },
        {
          group: "Salary",
          key: "06",
          value: 2300,
        },
        {
          group: "Salary",
          key: "07",
          value: 1485,
        },
        {
          group: "Salary",
          key: "08",
          value: 1485,
        },
        {
          group: "Salary",
          key: "09",
          value: 1485,
        },
        {
          group: "Salary",
          key: "10",
          value: 1485,
        },
        {
          group: "Salary",
          key: "11",
          value: 1485,
        },
        {
          group: "Salary",
          key: "12",
          value: 2800,
        },
        {
          group: "Rent",
          key: "01",
          value: -550,
        },
        {
          group: "Rent",
          key: "02",
          value: -550,
        },
        {
          group: "Rent",
          key: "03",
          value: -550,
        },
        {
          group: "Rent",
          key: "04",
          value: -550,
        },
        {
          group: "Rent",
          key: "05",
          value: -550,
        },
        {
          group: "Rent",
          key: "06",
          value: -550,
        },
        {
          group: "Rent",
          key: "07",
          value: -550,
        },
        {
          group: "Rent",
          key: "08",
          value: -550,
        },
        {
          group: "Rent",
          key: "09",
          value: -550,
        },
        {
          group: "Rent",
          key: "10",
          value: -550,
        },
        {
          group: "Rent",
          key: "11",
          value: -550,
        },
        {
          group: "Rent",
          key: "12",
          value: -550,
        },
        {
          group: "Transportation",
          key: "01",
          value: -110,
        },
        {
          group: "Transportation",
          key: "02",
          value: -80,
        },
        {
          group: "Transportation",
          key: "03",
          value: -80,
        },
        {
          group: "Transportation",
          key: "04",
          value: -80,
        },
        {
          group: "Transportation",
          key: "05",
          value: -80,
        },
        {
          group: "Transportation",
          key: "06",
          value: -110,
        },
        {
          group: "Transportation",
          key: "07",
          value: -80,
        },
        {
          group: "Transportation",
          key: "08",
          value: -70,
        },
        {
          group: "Transportation",
          key: "09",
          value: -80,
        },
        {
          group: "Transportation",
          key: "10",
          value: -80,
        },
        {
          group: "Transportation",
          key: "11",
          value: -80,
        },
        {
          group: "Transportation",
          key: "12",
          value: -110,
        },
        {
          group: "Utilities",
          key: "01",
          value: -120,
        },
        {
          group: "Utilities",
          key: "02",
          value: -110,
        },
        {
          group: "Utilities",
          key: "03",
          value: -90,
        },
        {
          group: "Utilities",
          key: "04",
          value: -130,
        },
        {
          group: "Utilities",
          key: "05",
          value: -135,
        },
        {
          group: "Utilities",
          key: "06",
          value: -150,
        },
        {
          group: "Utilities",
          key: "07",
          value: -140,
        },
        {
          group: "Utilities",
          key: "08",
          value: -50,
        },
        {
          group: "Utilities",
          key: "09",
          value: -90,
        },
        {
          group: "Utilities",
          key: "10",
          value: -90,
        },
        {
          group: "Utilities",
          key: "11",
          value: -110,
        },
        {
          group: "Utilities",
          key: "12",
          value: -120,
        },
        {
          group: "Groceries",
          key: "01",
          value: -250,
        },
        {
          group: "Groceries",
          key: "02",
          value: -320,
        },
        {
          group: "Groceries",
          key: "03",
          value: -190,
        },
        {
          group: "Groceries",
          key: "04",
          value: -230,
        },
        {
          group: "Groceries",
          key: "05",
          value: -230,
        },
        {
          group: "Groceries",
          key: "06",
          value: -260,
        },
        {
          group: "Groceries",
          key: "07",
          value: -270,
        },
        {
          group: "Groceries",
          key: "08",
          value: -190,
        },
        {
          group: "Groceries",
          key: "09",
          value: -340,
        },
        {
          group: "Groceries",
          key: "10",
          value: -190,
        },
        {
          group: "Groceries",
          key: "11",
          value: -200,
        },
        {
          group: "Groceries",
          key: "12",
          value: -220,
        },
      ],
      options: {
        title: "Sectorized - Income & Expenses",
        axes: {
          left: {
            mapsTo: "value",
            stacked: true,
          },
          bottom: {
            mapsTo: "key",
            scaleType: "labels",
          },
        },
        height: "400px",
      },
    };
  }, */
};
</script>
