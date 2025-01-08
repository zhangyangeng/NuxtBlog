<template>
    <LayoutLeftRight>
        <template #left>
            <div class="content-container rounded-xl shadow-md p-4">
                <CommonPostHeader></CommonPostHeader>
                <div class="post-content">
                    <h1>文章标题</h1>
                    <p>文章内容</p>
                </div>
                <CommonTag></CommonTag>
            </div>
        </template>
        <template #right>
            <CardUserCard></CardUserCard>
        </template>
    </LayoutLeftRight>
</template>

<!-- 文章详情页 -->
<script setup lang="ts">
import LayoutLeftRight from '~/components/content-layout/LeftRight.vue';
</script>

<style scoped lang="scss">
.content-container {
    background-color: var(--content-background-color);
}
</style>
