<template>
  <div class="home">
    <Label label="Home"/>
    <div>
      <div class="h_global">
        <div class="left">
          <cv-button :icon="Globe20">Global</cv-button>
        </div>
        <div class="right"></div>
      </div>
      <div class="h_accounts">
        <div class="left">
          <cv-button :icon="Currency20">Accounts</cv-button>
        </div>
        <div class="right">
          <cv-button :icon="Currency20" kind="tertiary" @click="goTo('/accounts/bbva')">BBVA</cv-button>
          <cv-button :icon="Currency20" kind="tertiary" @click="goTo('/accounts/andbank')">Andbank</cv-button>
        </div>
      </div>
      <div class="h_data">
        <div class="left">
          <cv-button :icon="ChartLineData20">Data</cv-button>
        </div>
        <div class="right">
          <cv-button :icon="ChartLineData20" kind="tertiary">Settings</cv-button>
          <cv-button :icon="ChartLineData20" kind="tertiary">Settings</cv-button>
          <cv-button :icon="ChartLineData20" kind="tertiary">Settings</cv-button>
        </div>
      </div>
      <div class="h_settings">
        <div class="left">
          <cv-button :icon="Settings20" kind="secondary">Settings</cv-button>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Globe20 from "@carbon/icons-vue/lib/globe/20";
import Currency20 from "@carbon/icons-vue/lib/currency/20";
import ChartLineData20 from "@carbon/icons-vue/lib/chart--line--data/20";
import Settings20 from "@carbon/icons-vue/lib/settings/20";
import router from '../router'
import Label from "../components/Label.vue";

export default {
  name: "Home",
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
    }
  },
  components: {
    Label
  }
};
</script>

<style lang="scss">
.home {
  padding-bottom: 70px;
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    .left,
    .right {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 10px 0;
    }
    .left {
      padding-right: 5px;
    }
    .right {
      padding-left: 5px;
    }
    .h_global,
    .h_accounts,
    .h_data,
    .h_settings {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding: 0 10px;
    }
  }
}
</style>
