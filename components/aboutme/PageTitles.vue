<template>
  <div
    class="page-title"
    :style="{
      backgroundColor: props.backgroudColor,
      width: props.width,
      color: props.color,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  backgroudColor: { type: String, default: "rgb(78, 78, 255)" },
  width: { type: String, default: "100%" },
  color: { type: String, default: "#fff" },
});
</script>

<style lang="scss" scoped>
.page-title {
  padding: 2px 5px;
  font-size: 18px;
  border-radius: 2px;
  height: 27px;
}
</style>
