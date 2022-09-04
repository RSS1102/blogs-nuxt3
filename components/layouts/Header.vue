<template>
  <div class="head-menu">
    <n-menu mode="horizontal" :options="menuOptions" @update:value="handleMenu" :icon-size="26"
      :default-value="defaultValue" />
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
const router = useRouter();
const route = useRoute()


const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
const menuOptions: MenuOption[] = [
  {
    label: "首页",
    key: "/",
    icon: renderIcon(HomeIcon),
  },
  {
    label: "博客",
    key: "/blogs",
    icon: renderIcon(BookIcon),
  },
  {
    label: "待定",
    key: "/dist",
    icon: renderIcon(MedalIcon),
    disabled: true,
  },
  {
    label: "交流",
    key: "/communication",
    icon: renderIcon(PaperPlaneIcon),
  },
  {
    label: "生活",
    key: "/share",
    icon: renderIcon(PlanetIcon),
  },
];

const defaultValue = route.fullPath;
const handleMenu = (key: string, item: MenuOption) => {
  router.push({ path: `${key}` });
};
</script>

<style lang="scss" scoped>
.head-menu {
  padding: 5px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #ddd;
  border-image: linear-gradient(0.25turn, #e66465, #9198e5, #e66465)0 0 40 0;

}
</style>
