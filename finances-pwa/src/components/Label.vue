<template>
  <h1>{{ label }}</h1>
</template>

<script>
export default {
  name: "Label",
  props: ["label"],
};
</script>

<style scoped lang="scss">
h1 {
  margin: 10px 0;
}
</style>
