<template>
  <div>
    <div>首页</div>
    <canvas></canvas>
  </div>
</template>
<script setup lang="ts">
import { drawTao } from "~/untils/canvas/tao";
import { nextTick } from "vue";
nextTick(() => {
  const el = document.querySelector("canvas") as HTMLCanvasElement;
  drawTao(el);
});
</script>

<style lang="scss"></style>
