<template>
  <div class="accounts">
    <SausageMenuAccountsData :itemStore="this.$store.state.accounts" :iconName="Currency20" />
    <router-view></router-view>
  </div>
</template>

<script>
import router from "../router";
import SausageMenuAccountsData from "@/components/SausageMenuAccountsData.vue";
import Currency20 from "@carbon/icons-vue/lib/currency/20";

export default {
  name: "Accounts",
  methods: {
    goTo(route) {
      router.push(route);
    },
  },
  components: {
    SausageMenuAccountsData,
  },
  computed: {
    Currency20() {
      return Currency20;
    },
  },
};
</script>

<style lang="scss">
.accounts {
  padding-bottom: 70px;
}
</style>
