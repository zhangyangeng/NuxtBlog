<template>
    <LayoutLeftRight>
        <template #left>
            <div class="content-container rounded-xl shadow-md p-4">
                <CommonPostHeader></CommonPostHeader>
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
