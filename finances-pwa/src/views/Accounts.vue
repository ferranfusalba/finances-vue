<template>
  <div class="accounts">
    <router-view></router-view>
    <Label label="Accounts"/>
    <div class="selectAccounts">
      <cv-button
        :icon="Currency20"
        kind="tertiary"
        @click="goTo('/accounts/bbva')"
        >BBVA</cv-button
      >
      <cv-button
        :icon="Currency20"
        kind="tertiary"
        @click="goTo('/accounts/andbank')"
        >Andbank</cv-button
      >
    </div>
  </div>
</template>

<script>
import Globe20 from "@carbon/icons-vue/lib/globe/20";
import Currency20 from "@carbon/icons-vue/lib/currency/20";
import ChartLineData20 from "@carbon/icons-vue/lib/chart--line--data/20";
import Settings20 from "@carbon/icons-vue/lib/settings/20";
import router from "../router";
import Label from "../components/Label.vue";

export default {
  name: "Accounts",
  computed: {
    Globe20() {
      return Globe20;
    },
    Currency20() {
      return Currency20;
    },
    ChartLineData20() {
      return ChartLineData20;
    },
    Settings20() {
      return Settings20;
    },
  },
  methods: {
    goTo(route) {
      router.push(route);
    },
  },
  components: {
    Label
  }
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
