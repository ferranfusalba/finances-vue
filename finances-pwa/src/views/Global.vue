<template>
  <div class="global">
    <Label label="Global"/>
    <Chart/>
  </div>
</template>

<script>
import Label from "../components/Label.vue";
import Chart from "../components/Chart.vue";

export default {
  name: 'Global',
  components: {
    Label,
    Chart
  }
}
</script>

<style lang="scss">
.global {
  padding-bottom: 70px;
}
</style>