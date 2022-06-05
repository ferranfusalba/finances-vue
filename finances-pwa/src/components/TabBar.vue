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
    },
    initialTabPaint: function () {
      let locationPathname = window.location.pathname;
      let locationPathnamePosition2 = locationPathname.search("global");
      let locationPathnamePosition3 = locationPathname.search("accounts");
      let locationPathnamePosition4 = locationPathname.search("data");
      let locationPathnamePosition5 = locationPathname.search("settings");

      if (locationPathnamePosition2 == 1) {
        this.activate(2);
      } else if (locationPathnamePosition3 == 1) {
        this.activate(3);
      } else if (locationPathnamePosition4 == 1) {
        this.activate(4);
      } else if (locationPathnamePosition5 == 1) {
        this.activate(5);
      }

      switch (window.location.pathname) {
        case "/":
          this.activate(1);
          break;
      }
    },
  },
  components: {
    TabBarSection,
  },
  watch: {
    '$store.state.url': function() {
      this.initialTabPaint();
    }
  },
  beforeMount() {
    this.initialTabPaint();
  },
  updated() {
    this.initialTabPaint();
  },
};
</script>

<style scoped lang="scss">
nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-top: 1px solid #161616;
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
      background-color: #161616;
      * {
        color: white;
      }
    }
  }
}
</style>
