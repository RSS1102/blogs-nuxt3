<template>
  <div class="blogs">
    <!-- 导航栏 -->
    <div class="side-menu">
      <div class="blogs-logo">RSS1102</div>
      <NLayout has-sider>
        <NLayoutSider :width="240">
          <NScrollbar style="max-height: 100vh">
            <ClientOnly>
              <NMenu :options="blogsTree" @update:value="handleValue" />
            </ClientOnly>
          </NScrollbar>
        </NLayoutSider>
      </NLayout>
    </div>

    <div class="blogs-main">
      <NLayout>
        <NScrollbar style="max-height: 100vh"> 123</NScrollbar>
      </NLayout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NScrollbar, NMenu, MenuOption } from "naive-ui";
import { getBlogsTree } from "~~/api/blogs";
const blogsTree = ref<MenuChild[]>([]);
// 序列化menu
const formatterMenu = (data: BlogsTree[] | null) => {
  if (!data) return [];
  blogsTree.value = data.map((e) => {
    let obj: MenuChild = {
      label: e.title,
      key: e.title,
      children: [],
    };
    if (e?.children!.length > 0) {
      for (const child of e.children!) {
        obj.children.push({
          label: child.title,
          key: child.title,
        });
      }
    }
    return obj;
  });
};
getBlogsTree()
  .then((res) => {
    formatterMenu(res.value);
  })
  .catch((err) => {});

const handleValue = (key: string, item: MenuOption) => {
  console.log(key);
};
</script>

<style lang="scss" scoped>
.blogs {
  display: flex;
}

.side-menu {
  width: 240px;
}
.blogs-logo {
  padding: 20px 0 10px 0;
  font-size: 28px;
  text-align: center;
  font-family: "fontone";
  font-weight: bolder;
  background: linear-gradient(90deg, #261b8c 5%, #9f3a1c 80%, #d64e24 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.blogs-main {
  min-height: 100vh;
  width: 100%;
  border-left: 1px solid black;
}
</style>
