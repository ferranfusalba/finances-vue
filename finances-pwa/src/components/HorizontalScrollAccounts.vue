<template>
  <Flicking :options="{ moveType: 'freeScroll', bound: true }">
    <!-- <div v-for="item in this.$store.state.accounts" :key="item">
        <cv-button :icon="Currency20" @click="goTo(item.route)">
          {{ item.name }}
        </cv-button>
      </div> -->
    <span class="button mr-2 is-white">🍎 Apple</span>
    <span class="button mr-2 is-white">🍉 Watermelon</span>
    <span class="button mr-2 is-white">🥝 Kiwi</span>
    <span class="button mr-2 is-white">...</span>
  </Flicking>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/vue-flicking/dist/flicking-inline.css";
import Currency20 from "@carbon/icons-vue/lib/currency/20";
import router from "../router";

export default {
  components: {
    Flicking: Flicking,
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
