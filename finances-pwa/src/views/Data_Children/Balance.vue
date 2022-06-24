<template>
<div>
    <Label label="Balance"/>
    <Bar/>
</div>
</template>

<script>
import Label from "@/components/Label.vue";
import Bar from "@/components/Bar.vue";

export default {
  name: 'Balance',
  components: {
    Label,
    Bar
  }
}
</script>
