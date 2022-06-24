<template>
  <div class="data">
    <HorizontalScrollData />
    <router-view></router-view>
  </div>
</template>

<script>
import HorizontalScrollData from "@/components/HorizontalScrollData.vue";

export default {
  name: "Data",
  components: {
    HorizontalScrollData
  },
};
</script>

<style lang="scss">
.data {
  padding-bottom: 70px;
}
</style>