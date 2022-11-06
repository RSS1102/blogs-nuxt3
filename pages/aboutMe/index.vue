<template>
  <div>
    <NScrollbar trigger="none" style="max-height: 1200px">
      <div class="box">
        <div class="box-side">1</div>
        <div class="box-main">
          <AboutmePageTitles width="100vw">前端技能</AboutmePageTitles>
          <!-- 基础技能 -->
          <NDescriptions :column="1" class="n-descriptions">
            <NDescriptionsItem>
              <NTag :bordered="false">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon> </template
                >基础技能:</NTag
              >
              <NTag
                v-for="(item, i) in tagItems"
                class="n-tags"
                type="warning"
                @click="goBlogTag(item)"
                >{{ item }}</NTag
              >
            </NDescriptionsItem>
            <!-- vue技术栈 -->
            <NDescriptionsItem>
              <NTag :bordered="false">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon> </template
                >Vue技能:</NTag
              >
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">数据状态管理:</span>
              <NTag class="n-tags" type="success" @click="goBlogTag('Vuex')">Vuex </NTag>
              <NTag class="n-tags" type="success" @click="goBlogTag('Pinia')">Pinia</NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">路由管理:</span>
              <NTag class="n-tags" type="success" @click="goBlogTag('vue-router')"
                >vue-router
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">UI框架:</span>
              <NTag class="n-tags" type="success" @click="goBlogTag('naive-ui')"
                >naive-ui
              </NTag>
              <NTag class="n-tags" type="success" @click="goBlogTag('Element-plus')"
                >Element-plus
              </NTag>
              <NTag class="n-tags" type="success" @click="goBlogTag('tdesign-vue-next')"
                >tdesign-vue-next
              </NTag>
            </NDescriptionsItem>

            <!-- react技术栈 -->
            <NDescriptionsItem>
              <NTag :bordered="false">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon> </template
                >React技能:</NTag
              >
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">数据状态管理:</span>
              <NTag class="n-tags" type="success" @click="goBlogTag('Redux')"
                >Redux
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">路由管理:</span>
              <NTag class="n-tags" type="success" @click="goBlogTag('react-router')"
                >react-router
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">UI框架:</span>
              <NTag class="n-tags" type="success" @click="goBlogTag('antd-react')"
                >antd-react
              </NTag>
            </NDescriptionsItem>
          </NDescriptions>
        </div>
      </div>
    </NScrollbar>
  </div>
</template>

<script lang="ts" setup>
import {
  NScrollbar,
  NDescriptions,
  NDescriptionsItem,
  NTag,
  NIcon,
  NButton,
} from "naive-ui";
import { AppsSharp } from "@vicons/ionicons5";
const tagItems = ref();
tagItems.value = ["JavaScript", "React", "Vue2", "Vue3", "typescript"];
const goBlogTag = (tag: string) => {
  console.log(tag);
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  .box-side {
    width: 300px;
  }
  .box-main {
    min-height: 100vh;
    min-width: 600px;
    border-left: 2px solid blue;
  }
  .n-descriptions {
    width: 600px;
  }
}
.n-tags {
  margin: 10px;
  cursor: pointer;
}
.descriptions-item-margin {
  margin-left: 100px;
  display: inline-block;
  width: 90px;
  text-align: right;
}
</style>
