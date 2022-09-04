<template>
  <div class="communication">
    <div class="slogan">
      <div> 欢迎您来到这里，如果您有什么好的意见或者建议，请发表在下面。</div>
      <div>Welcome here. If you have any good comments or suggestions, please post them below. </div>
    </div>
    <div class="talk">
      <NInputGroup>
        <NInput type="textarea" :placeholder="NInputPlaceholder" :rows="3" :disabled="NInputDisabled" :minlength="10"
          show-count :maxlength="200"></NInput>
      </NInputGroup>
      <div class="n-button">
        <NButton type="success">发布</NButton>
      </div>
    </div>
    <div class="list">
      <CommunicationTalkList></CommunicationTalkList>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NButton, NInput, NInputGroup, NInputGroupLabel } from "naive-ui"
const NInputDisabled = ref<boolean>(true)
  const NInputPlaceholder=ref<string>('123')
  NInputDisabled.value
  ? NInputPlaceholder.value="请登录"
  :NInputPlaceholder.value="请留下您的智慧之言"


</script> 

<style lang="scss" scoped>
$disWidth: 80vh;

.communication {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.talk {
  display: flex;
  width: $disWidth;

  .n-button {
    margin-left: 10px;
  }
}

.list {
  margin-top: 30px;
  width: $disWidth;
}

.slogan {
  margin: 20px;
  padding: 20px 0;
  width: $disWidth;
  text-align: center;
  font-family: "fonthree";
  font-size: 24px;
  color: #ec0f0f9f;
  border: 5px solid;
  border-image: linear-gradient(rgba(197, 197, 197, 0.3), rgba(182, 182, 182, 0.8)) 10;
}
</style>
