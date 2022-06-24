<template>
  <Flicking :options="{ moveType: 'freeScroll', bound: true }">
    <div
      v-for="item in this.$store.state.data"
      :key="item"
      style="display: flex; flex-direction: row"
    >
      <cv-button :icon="Globe20" @click="goTo(item.route)">
        {{ item.name }}
      </cv-button>
      <div style="width: 4px"></div>
    </div>
  </Flicking>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/vue-flicking/dist/flicking-inline.css";
import Globe20 from '@carbon/icons-vue/es/globe/20';
import router from "../router";

export default {
  components: {
    Flicking: Flicking,
  },
  computed: {
    Globe20() {
      return Globe20;
    },
  },
  methods: {
    goTo(route) {
      router.push(route);
    },
  },
};
</script>