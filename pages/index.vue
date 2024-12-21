<template>
    <LayoutLeftRight>
        <template #left>
            <PostList v-if="postLength === 0" :empty="postLength === 0"></PostList>
            <PostList v-for="item in postLength" :key="item"></PostList>
            <el-pagination background layout="prev, pager, next" size="small" :total="100" />
        </template>
        <template #right>
            <CardUserCard></CardUserCard>
        </template>
    </LayoutLeftRight>
</template>

<!-- 首页 -->
<script setup lang="ts">
import LayoutLeftRight from '~/components/content-layout/LeftRight.vue';

const postLength = ref(2);
</script>

<style scoped lang="scss"></style>
