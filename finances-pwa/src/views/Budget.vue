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
  margin-top: 60px;
  padding-bottom: 70px;
}
</style>