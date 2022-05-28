<template>
  <nav>
    <TabBarSection to="/" title="Home">
        <component :is="home20"></component>
    </TabBarSection>
    <TabBarSection to="/global" title="Global">
        <component :is="globe20"></component>
    </TabBarSection>
    <TabBarSection to="/accounts" title="Accounts">
        <component :is="currency20"></component>
    </TabBarSection>
    <TabBarSection to="/data" title="Data">
        <component :is="chartLineData20"></component>
    </TabBarSection>
    <TabBarSection to="/settings" title="Settings">
        <component :is="settings20"></component>
    </TabBarSection>
  </nav>
</template>

<script>
import TabBarSection from "./TabBarSection.vue";

export default {
  name: "TabBar",
  data() {
    return {
      clicked: Boolean,
      home20: 'Home20',
      globe20: 'Globe20',
      currency20: 'Currency20',
      chartLineData20: 'ChartLineData20',
      settings20: 'Settings20',
    };
  },
  components: {
    TabBarSection,
  },
};
</script>

<style scoped lang="scss">
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-top: 1px solid black;
  height: 60px;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-color: white;
  a {
    text-decoration: none;
    color: black;
    height: 100%;
  }
}
</style>
