<template>
  <div class="blogs">
    <!-- 导航栏 -->
    <div class="side-menu">
      <div class="blogs-logo" @click="goIndex()">RSS1102</div>
      <NLayout has-sider>
        <NLayoutSider :width="240">
          <NScrollbar style="max-height: 100vh">
            <ClientOnly>
              <NMenu :options="blogsTree" :indent="10" v-model:value="selectedKey" @update:value="updateValue"
                :watch-props="['defaultExpandedKeys']" />
            </ClientOnly>
          </NScrollbar>
        </NLayoutSider>
      </NLayout>
    </div>

    <div class="blogs-main">
      <NLayout>
        <NScrollbar style="max-height: 100vh">
          <div v-if="contentIsShow">
            <div class="contentinfo">
              <div class="contentinfo-title">{{ contentInfo?.title }}</div>
              <div class="contentInfo-info">
                <!-- likedNum    visitedNum  createTime -->
                <div class="contentinfo-info-item">
                  <NIcon size="25">
                    <HeartOutlineIcon></HeartOutlineIcon>
                  </NIcon>
                  <i class="num">{{ contentInfo?.likedNum }}</i>
                </div>
                <div class="contentinfo-info-item">
                  <NIcon size="25">
                    <EyeOutlineIcon></EyeOutlineIcon>
                  </NIcon>
                  <i class="num"> {{ contentInfo?.visitedNum }}</i>
                </div>
                <div class="contentinfo-info-item">
                  <NIcon size="25">
                    <SchoolOutlineIcon></SchoolOutlineIcon>
                  </NIcon>
                  <i class="num">{{
                      contentInfo?.createTime
                        ? useFormatterTimeAgo(contentInfo!.createTime).value
                        : ""
                  }}</i>
                </div>
              </div>
              <NDivider></NDivider>
            </div>
            <div>
              {{ contentInfo?.content }}
            </div>
            <div :class="['contentinfo-info-item', 'contentinfo-info-footer']">
              <NIcon size="25">
                <RocketOutlineIcon></RocketOutlineIcon>
              </NIcon>
              <i class="num">
                {{
    contentInfo?.updateTime
      ? useFormatterTimeAgo(contentInfo!.createTime).value
      : ""
                }}
              </i>
            </div>
          </div>
          <div v-else class="welcome">欢迎来到我的博客</div>
        </NScrollbar>
      </NLayout>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  NLayout,
  NLayoutSider,
  NScrollbar,
  NMenu,
  MenuOption,
  NDivider,
  NIcon,
} from "naive-ui";
import {
  HeartOutline as HeartOutlineIcon,
  EyeOutline as EyeOutlineIcon,
  SchoolOutline as SchoolOutlineIcon,
  RocketOutline as RocketOutlineIcon,
} from "@vicons/ionicons5";
import { getBlogsContent, getBlogsTree } from "~~/api/blogs";
import { useFormatterTimeAgo } from "~~/untils/formatter";

const blogsTree = ref<MenuChild[]>([]);
const route = useRoute();
const selectedKey = ref<string>("");
// 设置查找参数
selectedKey.value = route.params.title as string;
// 设置是否显示博客
const contentIsShow = ref<boolean>(false);
const contentInfo = ref<BlogsContentType | null>(null);
/**
 * @desc 序列化menu
 */
const formatterMenu = (data: BlogsTreeType[] | null) => {
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
 * @desc api-getBlogsTree
 * @desc 获取导航列表
 */
getBlogsTree()
  .then((res) => {
    formatterMenu(res.value!.data);
  })
  .catch((err) => { });

/**
 * @desc api-getBlogsConten
 * @desc 获取详细信息
 */
if (selectedKey.value !== "index") {
  contentIsShow.value = true;
  getBlogsContent({ title: selectedKey.value })
    .then((res) => {
      contentInfo.value = res.data.value!.data;
    })
    .catch((err) => {
      console.log("err", err);
    });
} else {
  contentIsShow.value = false;
}

const updateValue = async (key: string, item: MenuOption) => {
  await navigateTo(`${"/blogs/" + key}`);
};
const goIndex = async () => {
  await navigateTo("/blogs/index");
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
  @extend .logo;
  
  border-bottom: 1px solid rgba(114, 114, 114, 0.5);
  cursor: pointer;
}

.blogs-main {
  min-height: 100vh;
  width: 100%;
  border-left: 1px solid black;
}

// contentinfo
.contentinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contentinfo-title {
  font-size: 26px;
  font-weight: bolder;
  margin: 14px 0;
}

.contentInfo-info {
  display: flex;
}

.contentinfo-info-item {
  display: flex;
  align-items: center;
  margin: 0 10px;

  .num {
    font-size: 16px;
    margin-left: 2px;
  }
}

.contentinfo-info-footer {
  position: fixed;
  right: 50px;
  bottom: 50px;
}

.welcome {
  text-align: center;
  margin-top: 30vh;
}
</style>
