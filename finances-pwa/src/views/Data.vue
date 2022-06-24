<template>
  <div class="data">
    <SausageMenuAccountsData :itemStore="this.$store.state.data" :iconName="Globe20" />
    <router-view></router-view>
  </div>
</template>

<script>
import SausageMenuAccountsData from "@/components/SausageMenuAccountsData.vue";
import Globe20 from '@carbon/icons-vue/es/globe/20';

export default {
  name: "Data",
  components: {
    SausageMenuAccountsData
  },
  computed: {
    Globe20() {
      return Globe20;
    },
  },
};
</script>

<style lang="scss">
.data {
  padding-bottom: 70px;
}
</style>