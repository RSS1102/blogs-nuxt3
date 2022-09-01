<template>
  <div class="head-menu">
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="menuOptions"
      @update:value="handleMenu"
      :icon-size="26"
      :default-value="defaultValue"
    />
  </div>
</template>

<script lang="ts" setup>
import { MenuOption, NIcon, NMenu } from "naive-ui";
import { Component } from "vue";
import {
  HomeOutline as HomeIcon,
  BookOutline as BookIcon,
  PaperPlaneOutline as PaperPlaneIcon,
  MedalOutline as MedalIcon,
  PlanetOutline as PlanetIcon,
} from "@vicons/ionicons5";
const activeKey = ref();
const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const menuOptions: MenuOption[] = [
  {
    label: "首页",
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: "博客",
    key: "blogs",
    icon: renderIcon(BookIcon),
  },
  {
    label: "待定",
    key: "product",
    icon: renderIcon(MedalIcon),
    disabled: true,
  },
  {
    label: "交流",
    key: "product",
    icon: renderIcon(PaperPlaneIcon),
  },
  {
    label: "生活",
    key: "share",
    icon: renderIcon(PlanetIcon),
  },
];
const defaultValue = "home";
const handleMenu = (key: string, item: MenuOption) => {
  console.log("123");
};
</script>

<style lang="scss" scoped>
.head-menu {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
