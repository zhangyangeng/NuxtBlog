<template>
    <LayoutLeftRight>
        <template #left>
            <PostList v-for="item in topData" :key="item.id" :post-data="item"></PostList>
            <PostList v-for="item in postData" :key="item.id" :post-data="item"></PostList>
            <CommonPagination :current-index="1" :total="10"></CommonPagination>
        </template>
        <template #right>
            <CardUserCard></CardUserCard>
        </template>
    </LayoutLeftRight>
</template>

<!-- 首页 -->
<script setup lang="ts">
import LayoutLeftRight from '~/components/content-layout/LeftRight.vue';
import type { PostData } from '~/types/Post';
import type { HomePostResponseData } from '~/types/Response';

// 置顶文章
const topData = ref<PostData[]>([]);
// 普通文章数据
const postData = ref<PostData[]>([]);

/**
 * 处理首页数据
 * @param {HomePostResponseData} data 首页数据
 */
function handleHomeData(data: HomePostResponseData): void {
    topData.value = data.pinnedIssues.edges.map((item) => item.node);
    postData.value = data.regularIssues.edges.map((item) => item.node);
}

const res = await useFetch('/api/getHomePosts', {
    method: 'POST',
});

handleHomeData(res.data.value as HomePostResponseData);

console.log(res.data.value);
</script>

<style scoped lang="scss"></style>
