<template>
  <!-- <Flicking :options="{ moveType: 'freeScroll', bound: true }">
    <div v-for="item in this.$store.state.accounts" :key="item">
        <cv-button :icon="Currency20" @click="goTo(item.route)">
          {{ item.name }}
        </cv-button>
      </div>
    <span class="button mr-2 is-white">🍎 Apple</span>
    <span class="button mr-2 is-white">🍉 Watermelon</span>
    <span class="button mr-2 is-white">🥝 Kiwi</span>
    <span class="button mr-2 is-white">🍎 Apple</span>
    <span class="button mr-2 is-white">🍉 Watermelon</span>
    <span class="button mr-2 is-white">🥝 Kiwi</span>
    <span class="button mr-2 is-white">🍎 Apple</span>
    <span class="button mr-2 is-white">🍉 Watermelon</span>
    <span class="button mr-2 is-white">🥝 Kiwi</span>
  </Flicking> -->
  <!-- <div>
    <ul
      class="nav bg-white row flex-row flex-nowrap mb-4"
      style="overflow-x: auto"
    >
    <ButtonSausage pageURL="/work/calendas" pageName="Calendas"/>
    <ButtonSausage pageURL="/work/elearning" pageName="eLearning Platform"/>
    <ButtonSausage pageURL="/work/notorious" pageName="Notorious"/>
    <ButtonSausage pageURL="/work/shine" pageName="Shine"/>
    <ButtonSausage pageURL="/work/ui" pageName="UI Design"/>
    <ButtonSausage pageURL="/work/fds" pageName="Florí"/>
    <ButtonSausage pageURL="/work/other" pageName="Other Projects"/>
    </ul>
  </div> -->
  <nav class="sausage-links">
    <!-- <ul>
        <li><a href="#">Room Service</a></li>
        <li><a href="#">Hotel Services</a></li>
        <li><a href="#">Info</a></li>
        <li><a href="#">TV Channels</a></li>
        <li><a href="#">Discover Barcelona</a></li>
        <li><a href="#">Museum Tour</a></li>
        <li><a href="#">Room Lights</a></li>
        <li><a href="#">Chat with Reception</a></li>
        <li><a href="#">Call Reception</a></li>
    </ul> -->
    <ul>
      <li v-for="item in this.$store.state.accounts" :key="item">
        <cv-button :icon="Currency20" @click="goTo(item.route)">
          {{ item.name }}
        </cv-button>
        <!-- <a href="">Hola</a>
        <a href="">Adeu</a> -->
      </li>
    </ul>
  </nav>
</template>

<script>
// import { Flicking } from "@egjs/vue-flicking";
// import "@egjs/vue-flicking/dist/flicking.css";
// import "@egjs/vue-flicking/dist/flicking-inline.css";
import Currency20 from "@carbon/icons-vue/lib/currency/20";
import router from "../router";
// import ButtonSausage from "@/components/ButtonSausage.vue";

export default {
  components: {
    // Flicking: Flicking,
    // ButtonSausage
  },
  computed: {
    Currency20() {
      return Currency20;
    },
  },
  methods: {
    goTo(route) {
      router.push(route);
    },
  },
};
</script>

<style scoped lang="scss">
/*
.row > * {
  width: auto;
}
.row {
  padding-left: 12px;
}
ul {
  -webkit-overflow-scrolling: touch;
}
ul::-webkit-scrollbar {
  display: none;
} */

main {
  background: linear-gradient(90deg, #81d0e8 -20.27%, #8ddce8 100%);
  border-radius: 0px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 2em auto;
  max-width: 375px;
  padding: 8px 12px 8px 12px;
  width: 100%;
}

menu {
  background: linear-gradient(90deg, #009ed6 -20.27%, #1bbac7 100%);
  border-radius: 0px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  margin: 2em auto;
  max-width: 375px;
  padding: 17px 21px 17px 21px;
  width: 100%;
}

.sausage-links {
  position: relative;

  &:before,
  &:after {
    content: "";
    height: calc(100% - 2em);
    pointer-events: none;
    position: absolute;
    top: 1em;
    width: 10px;
    z-index: 2;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    li {
      white-space: nowrap;
      margin-right: 4px;
      &:last-child {
        margin-right: 0;
      }

      * {
        display: inline-block;
      }

      a,
      a:visited {
        border: 1px;
        border-radius: 4px;
        // color: white;
        display: inline-block;
        padding: 4px 8px;
        text-decoration: none;

        &:hover {
          background: white;
          color: #04a2d5;
          border-color: white;
        }
      }
    }
  }
}
</style>
