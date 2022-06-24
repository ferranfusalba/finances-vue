<template>
<div>
    <Label label="Mensual"/>
    <Bar/>
</div>
</template>

<script>
import Label from "@/components/Label.vue";
import Bar from "@/components/Bar.vue";

export default {
  name: 'Mensual',
  components: {
    Label,
    Bar
  }
}
</script>
