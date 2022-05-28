<template>
  <router-link :to="to">
    <div :class="{ active: isActive }">
      <slot></slot>
      <p>{{ title }}</p>
    </div>
  </router-link>
</template>

<script>
// import { computed } from "vue";
// import { useRoute } from "vue-router";
// import { collapsed } from './state'
// import { useRoute } from 'vue2-helpers/vue-router';

export default {
  name: "TabBarSection",
  // props: ["to", "title"],
  props: {
    to: { type: String, required: true },
    title: { type: String, required: true },
  }, /*
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive };
  }, */
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: black;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    &.original {
      background-color: white;
      color: black;
    }
    &.active {
      background-color: black;
      color: white;
    }
    p {
      font-size: 11px;
    }
  }
}
</style>
