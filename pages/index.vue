<template>
    <LayoutLeftRight>
        <template #left>
            <PostList v-for="item in 4" :key="item"></PostList>
        </template>
        <template #right>
            <CardUserCard></CardUserCard>
        </template>
    </LayoutLeftRight>
</template>

<!-- 首页 -->
<script setup lang="ts">
import LayoutLeftRight from '~/components/content-layout/LeftRight.vue';
</script>

<style scoped lang="scss"></style>
