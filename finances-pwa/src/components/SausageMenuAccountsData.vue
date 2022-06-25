<template>
  <nav class="sausage-links">
    <ul>
      <li v-for="item in itemStore" :key="item">
        <cv-button :icon="iconName" @click="goTo(item.route)">
          {{ item.name }}
        </cv-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import Currency20 from "@carbon/icons-vue/lib/currency/20";
import router from "../router";

export default {
  computed: {
    Currency20() {
      return Currency20;
    },
  },
  props: ["itemStore", "iconName"],
  methods: {
    goTo(route) {
      router.push(route);
    },
  },
};
</script>

<style scoped lang="scss">
.sausage-links {
  position: relative;
  margin-top: 48px;
/*
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
*/
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
    }
  }
}
</style>
