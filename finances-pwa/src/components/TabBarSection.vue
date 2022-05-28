<template>
  <router-link :to="to">
    <div>
      <slot></slot>
      <p>{{ title }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "TabBarSection",
  props: ["to", "title"],
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    p {
      font-size: 11px;
    }
  }
}
</style>
