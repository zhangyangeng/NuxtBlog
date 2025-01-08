<template>
    <div class="tag-container">
        <el-divider content-position="center"></el-divider>
        <div class="tag-list">
            <el-tag v-for="item in 2" :key="item" class="m-1" round @click="jumpToTagDetail('大模型')"># 大模型{{ item }}</el-tag>
        </div>
    </div>
</template>

<!-- 文章标签 -->
<script setup lang="ts">
/**
 * 跳转到标签详情页
 * @param {string} name Tag 名称
 */
async function jumpToTagDetail(name: string): Promise<void> {
    await navigateTo(`/tags/${name}`);
}
</script>

<style scoped lang="scss">
.tag-container {
    width: 100%;
    .tag-list {
        text-align: center;
        .el-tag {
            cursor: pointer;
        }
    }
}
</style>
