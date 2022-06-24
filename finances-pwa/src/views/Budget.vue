<template>
  <div class="budget">
     <Label label="Budget"/>
  </div>
</template>

<script>
import Label from "../components/Label.vue";

export default {
  name: 'Budget',
  components: {
    Label
  }
}
</script>

<style lang="scss">
.budget {
  padding-bottom: 70px;
}
</style>