<template>
  <div class="global">
    <Label label="Global"/>
    <Pie :optionsGlobal="optionsAccounts"/>
    <br>
    <br>
    <!-- <Meter />
    <br>
    <br> -->
    <Pie :optionsGlobal="optionsSectors"/>
    <!-- <br>
    <br>
    <Meter :optionsGlobal="optionsAccounts"/> -->
  </div>
</template>

<script>
import Label from "@/components/Label.vue";
import Pie from "@/components/Data_Charts/Pie.vue";
// import Meter from "@/components/Data_Charts/Meter.vue";

export default {
  name: 'Global',
  components: {
    Label,
    Pie,
    // Meter
  },
  data() {
    return {
      data: [],
      optionsAccounts: {
        title: "By Accounts",
        resizable: true,
        height: "400px",
      },
      optionsSectors: {
        title: "By Sectors",
        resizable: true,
        height: "400px",
      },
    };
  },
}
</script>

<style lang="scss">
.global {
  padding-bottom: 30px;
}
</style>