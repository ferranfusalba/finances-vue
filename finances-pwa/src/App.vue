<template>
  <div id="app">
    <!-- <div v-if="isDesktopBehave()" class="desktop"> -->
    <div class="desktop">
      <HeaderBar />
    </div>
    <router-view />
    <div class="mobile">
      <!-- <HorizontalScroll /> -->
      <TabBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
// import HorizontalScroll from "@/components/HorizontalScroll.vue";
import TabBar from "@/components/TabBar.vue";
import { mapState, mapMutations } from 'vuex'

export default {
  name: "App",
  components: {
    HeaderBar,
    // HorizontalScroll,
    TabBar,
  },
  computed: {
    ...mapState([
      'url'
    ])
  },
  methods: {
    isDesktopBehave: function () {
      return this.$store.getters.isDesktop;
    },
    ...mapMutations([
      'CHANGE_URL'
    ]),
    changeUrl(myURL) {
      this.CHANGE_URL(myURL);
    }
  },
  updated() {
    const url = location.href;
    this.changeUrl(url);
  },
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
  .mobile {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000000;
  }
}
</style>
