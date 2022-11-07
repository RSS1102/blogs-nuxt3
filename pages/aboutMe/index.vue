<template>
  <div>
    <NScrollbar trigger="none" style="max-height: 1200px">
      <div class="box">
        <div class="box-side">
          <NAvatar round :size="180" src="/img/github-avatar.png" @click="goGithub">
          </NAvatar>
          <div class="github-name" @click="goGithub">RSS1102</div>
        </div>
        <div class="box-main">
          <AboutmePageTitles width="100vw"> 技能展示 </AboutmePageTitles>
          <!-- 基础技能 -->
          <NDescriptions :column="1" class="n-descriptions">
            <NDescriptionsItem>
              <NTag :bordered="false" type="success">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon>
                </template>
                基础技能:
              </NTag>
              <NTag v-for="(item, i) in tagItems" type="warning" @click="goBlogTag(item)">
                {{ item }}
              </NTag>
            </NDescriptionsItem>
            <!-- vue技术栈 -->
            <NDescriptionsItem>
              <NTag :bordered="false" type="success">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon>
                </template>
                Vue技能:
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">数据状态管理:</span>
              <AboutmeLinkTag @click="goBlogTag('Vuex')">Vuex</AboutmeLinkTag>
              <AboutmeLinkTag @click="goBlogTag('Pinia')">Pinia</AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">路由管理:</span>
              <AboutmeLinkTag @click="goBlogTag('vue-router')">
                vue-router
              </AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">UI框架:</span>
              <AboutmeLinkTag @click="goBlogTag('naive-ui')"> naive-ui </AboutmeLinkTag>
              <AboutmeLinkTag @click="goBlogTag('Element-plus')">
                Element-plus
              </AboutmeLinkTag>
              <AboutmeLinkTag @click="goBlogTag('tdesign-vue-next')">
                tdesign-vue-next
              </AboutmeLinkTag>
            </NDescriptionsItem>
            <!-- react技术栈 -->
            <NDescriptionsItem>
              <NTag :bordered="false" type="success">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon>
                </template>
                React技能:
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">数据状态管理:</span>
              <AboutmeLinkTag @click="goBlogTag('Redux')">Redux</AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">路由管理:</span>
              <AboutmeLinkTag @click="goBlogTag('react-router')">
                react-router
              </AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">UI框架:</span>
              <AboutmeLinkTag @click="goBlogTag('antd-react')">
                antd-react
              </AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <NTag :bordered="false" type="success">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon>
                </template>
                构建工具:
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin"></span>
              <AboutmeLinkTag @click="goBlogTag('vite')">vite</AboutmeLinkTag>
              <AboutmeLinkTag :deletedLines="true" @click="goBlogTag('rollup')">
                rollup
              </AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <NTag :bordered="false" type="success">
                <template #avatar>
                  <NIcon size="11">
                    <AppsSharp></AppsSharp>
                  </NIcon>
                </template>
                后端技能:
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">数据库:</span>
              <AboutmeLinkTag @click="goBlogTag('MongoDB')"> MongoDB </AboutmeLinkTag>
              <AboutmeLinkTag @click="goBlogTag('MySQL')">MySQL</AboutmeLinkTag>
            </NDescriptionsItem>
            <NDescriptionsItem>
              <span class="descriptions-item-margin">Node.js项目:</span>
              <AboutmeLinkTag @click="goBlogTag('Express')"> Express.js </AboutmeLinkTag>
              <AboutmeLinkTag :deletedLines="true" @click="goBlogTag('nest')">
                nest
              </AboutmeLinkTag>
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
  NAvatar,
} from "naive-ui";
import { AppsSharp } from "@vicons/ionicons5";
const tagItems = ref();
tagItems.value = ["JavaScript", "React", "Vue2", "Vue3", "typescript"];

// 跳转blogs
const goBlogTag = (tag: string) => {
  console.log(tag);
};
// 跳转GitHub
const goGithub = () => {
  window.open("https://github.com/RSS1102", "_blank");
}
</script>

<style lang="scss" scoped>
@keyframes navatartranslate {
  0% {
    /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.box {
  display: flex;

  .box-side {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .n-avatar {
      cursor: pointer;
      margin-top: 20px;

      &:hover {
        // infinite循环
        animation: navatartranslate 3s linear infinite;
      }
    }

    .github-name {
      cursor: pointer;
      @extend .logo;
    }
  }

  .box-main {
    min-height: 100vh;
    min-width: 600px;
    border-left: 2px solid blue;
  }

  .n-descriptions {
    padding: 20px;
    width: 600px;
  }
}

.n-tag {
  margin: 0 5px;
}

.descriptions-item-margin {
  margin-left: 100px;
  display: inline-block;
  width: 90px;
  text-align: right;
}
</style>
