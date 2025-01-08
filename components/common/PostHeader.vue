<template>
    <div class="post-header not-allow-select">
        <h1 class="text-xl font-semibold">这是标题</h1>
        <!-- 文章标志 -->
        <div class="symbol">
            <CommonSvgIcon name="publish" font-size="12px" :inherit-lisght-color="true"></CommonSvgIcon>
            <span class="text-zinc-500 symbol-item">发表于：2024-12-21 21:00</span>
            <el-divider direction="vertical"></el-divider>
            <CommonSvgIcon name="collect" font-size="12px" :inherit-lisght-color="true"></CommonSvgIcon>
            <span class="text-zinc-500 symbol-item">分类于：<el-link>前端杂谈</el-link></span>
        </div>
    </div>
</template>

<!-- 文章标签组件 -->
<script setup lang="ts">
// a
</script>

<style scoped lang="scss">
.post-header {
    text-align: center;
    .symbol {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        .nuxt-icon {
            margin-right: 0.25rem;
        }
        .symbol-item {
            display: flex;
            align-items: center;
            .el-link {
                font-size: 0.75rem;
            }
        }
    }
}
</style>
