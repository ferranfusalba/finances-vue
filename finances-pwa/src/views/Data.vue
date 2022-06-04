<template>
  <div class="data">
    <Label label="Data"/>
    <Chart/>
  </div>
</template>

<script>
import Label from "../components/Label.vue";
import Chart from "../components/Chart.vue";

export default {
  name: "Data",
  components: {
    Label,
    Chart
  },
};
</script>

<style lang="scss">
.data {
  padding-bottom: 70px;
}
</style>