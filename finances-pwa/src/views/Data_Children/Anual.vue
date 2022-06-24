<template>
<div>
    <Label label="Anual"/>
    <Bar/>
</div>
</template>

<script>
import Label from "@/components/Label.vue";
import Bar from "@/components/Bar.vue";

export default {
  name: 'Anual',
  components: {
    Label,
    Bar
  }
}
</script>
