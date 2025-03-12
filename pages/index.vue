<template>
    <LayoutLeftRight>
        <template #left>
            <PostList v-if="postLength === 0" :empty="postLength === 0"></PostList>
            <PostList v-for="item in postLength" :key="item"></PostList>
            <CommonPagination :current-index="1" :total="10"></CommonPagination>
        </template>
        <template #right>
            <CardUserCard></CardUserCard>
        </template>
    </LayoutLeftRight>
</template>

<!-- 首页 -->
<script setup lang="ts">
import { fetchIssuesListApi } from '~/apis/issues-api';
import LayoutLeftRight from '~/components/content-layout/LeftRight.vue';

const postLength = ref(2);

onBeforeMount(async () => {
    const info = await fetchIssuesListApi();
    console.log(info);
});
</script>

<style scoped lang="scss"></style>
