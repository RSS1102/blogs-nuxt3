<template>
  <div class="link-tag" :class="{ isdelect: props.deletedLines }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: { type: String, default: "black" },
  lineColor: { type: String, default: "red" },
  deletedLines: { type: Boolean, default: false },
});
</script>

<style lang="scss" scoped>
.link-tag {
  cursor: pointer;
  display: inline;
  margin: 3px;
  padding: 3px;
  color: v-bind("props.color");

  &:hover {
    border-bottom: 2px solid v-bind("props.lineColor");
  }
}

.isdelect {
  text-decoration: line-through;
  cursor: no-drop;
  color: rgb(130, 130, 130);

  &:hover {
    border-bottom: 0px solid rgb(255, 255, 255);
  }
}
</style>
