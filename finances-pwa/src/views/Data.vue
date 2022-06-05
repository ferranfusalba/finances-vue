<template>
  <div class="data">
    <Label label="Data"/>
    <Bar/>
  </div>
</template>

<script>
import Label from "../components/Label.vue";
import Bar from "../components/Bar.vue";

export default {
  name: "Data",
  components: {
    Label,
    Bar
  },
};
</script>

<style lang="scss">
.data {
  padding-bottom: 70px;
}
</style>