<template>
  <nav>
    <div
      v-for="item in sections"
      :key="item.id"
      @click="activate(item.id)"
      :class="{ active: active_el == item.id }"
    >
      <TabBarSection :to="item.to" :title="item.title">
        <component :is="item.iconComponent"></component>
      </TabBarSection>
    </div>
  </nav>
</template>

<script>
import TabBarSection from "./TabBarSection.vue";

export default {
  name: "TabBar",
  data() {
    return {
      sections: [
        { id: "1", to: "/", title: "Home", iconComponent: "Home20" },
        {
          id: "2",
          to: "/global",
          title: "Global",
          iconComponent: "Globe20",
        },
        {
          id: "3",
          to: "/accounts",
          title: "Accounts",
          iconComponent: "Currency20",
        },
        {
          id: "4",
          to: "/data",
          title: "Data",
          iconComponent: "ChartLineData20",
        },
        {
          id: "5",
          to: "/settings",
          title: "Settings",
          iconComponent: "Settings20",
        },
      ],
      active_el: 0,
    };
  },
  methods: {
    activate: function (el) {
      this.active_el = el;
      console.log(el);
    },
    testingConsole: function () {
      console.log("beforeMount");
    },
    initialTabPaint: function () {
      switch (window.location.pathname) {
        case "/":
          this.activate(1);
          break;
        case "/global":
          this.activate(2);
          break;
        case "/accounts":
          this.activate(3);
          break;
        case "/data":
          this.activate(4);
          break;
        case "/settings":
          this.activate(5);
          break;
      }
    },
  },
  components: {
    TabBarSection,
  },
  beforeMount() {
    this.testingConsole();
    this.initialTabPaint();
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
  a {
    text-decoration: none;
    color: black;
    height: 100%;
  }
  div {
    height: 100%;
    background-color: white;
    color: black;
    &.active {
      background-color: black;
      * {
        color: white;
      }
    }
  }
}
</style>
