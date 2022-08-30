<template>
    <ElButton type="primary">123</ElButton>
    <el-icon class="el-icon">
        <House />
    </el-icon>

</template>
<script lang="ts" setup>
import { ElButton, ElIcon } from 'element-plus'
import { House } from '@element-plus/icons-vue'
</script>
<style lang="scss">
.el-icon {
    width: 40px;

    &:hover {
        color: red;
    }
}
</style>