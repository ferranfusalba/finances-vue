<template>
<div>
    <Label label="Balance"/>
    <BarGrouped/>
</div>
</template>

<script>
import Label from "@/components/Label.vue";
import BarGrouped from "@/components/Data_Charts/BarGrouped.vue";

export default {
  name: 'Balance',
  components: {
    Label,
    BarGrouped
  }
}
</script>
