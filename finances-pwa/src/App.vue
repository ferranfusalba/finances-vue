<template>
  <div id="app">
    <!-- <div v-if="isDesktopBehave()" class="desktop"> -->
    <div class="desktop">
      <HeaderBar />
    </div>
    <router-view />
    <div class="mobile">
      <TabBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import TabBar from "@/components/TabBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    TabBar,
  },
  methods: {
    isDesktopBehave: function () {
      return this.$store.getters.isDesktop;
    }
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media screen and (min-width: 1056px) {
  .mobile {
    display: none;
  }
}
@media screen and (max-width: 1055px) {
  .desktop {
    display: none;
  }
}
</style>
