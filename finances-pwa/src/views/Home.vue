<template>
  <div class="home">
    <Label label="Home" />
    <h5>Welcome, {{ name }}</h5>
    <div>
      <div class="h_budget">
        <div class="left">
          <cv-button :icon="TableBuilt20" @click="goTo('/budget')">Budget</cv-button>
        </div>
        <div class="right"></div>
      </div>
      <div class="h_accounts">
        <div class="left">
          <cv-button :icon="Currency20" @click="goTo('/accounts')"
            >Accounts</cv-button
          >
        </div>
        <div class="right">
          <div v-for="(item, index) in accounts" :key="index">
            <cv-button
            style="margin-bottom: 4px;"
              :icon="Currency20"
              kind="tertiary"
              @click="goTo(accounts[index].route)"
              >{{ accounts[index].name }}</cv-button
            >
          </div>
        </div>
      </div>
      <div class="h_data">
        <div class="left">
          <cv-button :icon="ChartLineData20" @click="goTo('/data')"
            >Data</cv-button
          >
        </div>
        <div class="right">
          <div v-for="(item, index) in data" :key="index">
            <cv-button
            style="margin-bottom: 4px;"
              :icon="ChartLineData20"
              kind="tertiary"
              @click="goTo(data[index].route)"
              >{{ data[index].name }}</cv-button
            >
          </div>
        </div>
      </div>
      <div class="h_settings">
        <div class="left">
          <cv-button
            :icon="Settings20"
            kind="secondary"
            @click="goTo('/settings')"
            >Settings</cv-button
          >
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TableBuilt20 from "@carbon/icons-vue/lib/table--built/20";
import Currency20 from "@carbon/icons-vue/lib/currency/20";
import ChartLineData20 from "@carbon/icons-vue/lib/chart--line--data/20";
import Settings20 from "@carbon/icons-vue/lib/settings/20";
import router from "../router";
import Label from "../components/Label.vue";

export default {
  name: "Home",
  data() {
    return {
      name: this.$store.state.name,
      accounts: this.$store.state.accounts,
      data: this.$store.state.data
    };
  },
  computed: {
    TableBuilt20() {
      return TableBuilt20;
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
    Label,
  },
};
</script>

<style lang="scss">
.home {
  padding-bottom: 70px;
  h5 {
    margin: 10px 0;
  }
  div:nth-child(3) {
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
      div {
        display: contents;
      }
    }
    .h_budget,
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
