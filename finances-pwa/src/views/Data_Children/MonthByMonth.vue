<template>
  <div>
    <Label label="Month by Month" />
    <BarGrouped :dataMonth="dataGrouped" :optionsMonth="optionsGrouped" />
    <br />
    <br />
    <BarGrouped
      :dataMonth="dataGroupedCompared"
      :optionsMonth="optionsGroupedCompared"
    />
    <br />
    <br />
    <BarSectorized :dataMonth="dataStacked" :optionsMonth="optionsStacked" />
  </div>
</template>

<script>
import Label from "@/components/Label.vue";
import BarGrouped from "@/components/Data_Charts/BarGrouped.vue";
import BarSectorized from "@/components/Data_Charts/BarSectorized.vue";

export default {
  name: "Month by Month",
  components: {
    Label,
    BarGrouped,
    BarSectorized,
  },
  data() {
    return {
      dataGrouped: [
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
      optionsGrouped: {
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
        color: {
           'Income': 'blue',
            'Expenses': 'red' /*
          pairing: {
            numberOfVariants: 2,
            option: 3,
          } */
        }
      },
            dataGroupedCompared: [
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
          value: 1030,
        },
        {
          group: "Expenses",
          key: "02",
          value: 910,
        },
        {
          group: "Expenses",
          key: "03",
          value: 990,
        },
        {
          group: "Expenses",
          key: "04",
          value: 990,
        },
        {
          group: "Expenses",
          key: "05",
          value: 995,
        },
        {
          group: "Expenses",
          key: "06",
          value: 1070,
        },
        {
          group: "Expenses",
          key: "07",
          value: 1040,
        },
        {
          group: "Expenses",
          key: "08",
          value: 860,
        },
        {
          group: "Expenses",
          key: "09",
          value: 1060,
        },
        {
          group: "Expenses",
          key: "10",
          value: 910,
        },
        {
          group: "Expenses",
          key: "11",
          value: 940,
        },
        {
          group: "Expenses",
          key: "12",
          value: 1000,
        },
      ],
      optionsGroupedCompared: {
        title: "Comparison",
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
      dataStacked: [
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
      optionsStacked: {
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
  },
};
</script>
