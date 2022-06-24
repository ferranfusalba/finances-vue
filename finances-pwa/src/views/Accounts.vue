<template>
  <div class="accounts">
    <HorizontalScrollAccounts />
    <router-view></router-view>
  </div>
</template>

<script>
import router from "../router";
import HorizontalScrollAccounts from "@/components/HorizontalScrollAccounts.vue";

export default {
  name: "Accounts",
  methods: {
    goTo(route) {
      router.push(route);
    },
  },
  components: {
    HorizontalScrollAccounts,
  },
};
</script>

<style lang="scss">
.accounts {
  padding-bottom: 70px;
  .selectAccounts {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin: 5px 0;
      width: 100%;
    }
  }
}
</style>
