<template>
  <div class="blogs">
    <!-- 导航栏 -->
    <div class="side-menu">
      <div class="blogs-logo">RSS1102</div>
      <NLayout has-sider>
        <NLayoutSider :width="240">
          <NScrollbar style="max-height: 100vh">
            <ClientOnly>
              <NMenu
                :options="blogsTree"
                :indent="10"
                v-model:value="selectedKey"
                @update:value="updateValue"
                :watch-props="['defaultExpandedKeys']"
              />
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
import { getBlogsContent, getBlogsTree } from "~~/api/blogs";
const blogsTree = ref<MenuChild[]>([]);
const route = useRoute();
const selectedKey = ref<string>("");
selectedKey.value = route.params.title as string;
/**
 * @de 序列化menu
 */
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

/**
 * @de api-getBlogsContent
 */
if (selectedKey.value !== "index") {
  getBlogsContent({ title: selectedKey.value })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("err", err);
    });
} else {
  console.log("初始页面的赋值");
}
/**
 * @de api-getBlogsTree
 */
getBlogsTree()
  .then((res) => {
    formatterMenu(res.value);
  })
  .catch((err) => {});

const updateValue = async (key: string, item: MenuOption) => {
  await navigateTo(`${"/blogs/" + key}`);
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

  border-bottom: 1px solid rgba(114, 114, 114, 0.5);
}

.blogs-main {
  min-height: 100vh;
  width: 100%;
  border-left: 1px solid black;
}
// .n-menu :deep(.n-menu-item-content) {
//   padding-left: 10px !important;
// }
</style>
