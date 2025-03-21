<template>
    <LayoutLeftRight>
        <template #left>
            <div class="content-container rounded-xl shadow-md p-4">
                <template v-if="currentPostData">
                    <CommonPostHeader :title="currentPostData.title"></CommonPostHeader>
                    <div class="post-content">
                        <p>{{ currentPostData.body }}</p>
                    </div>
                </template>
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
import type { PostData } from '~/types/Post';

const $route = useRoute();
let currentPostData: PostData | null = null;
if (process.client) {
    currentPostData = JSON.parse(localStorage.getItem(`post_${$route.params.id}`) as string);
    localStorage.removeItem(`post_${$route.params.id}`);
}

if (!currentPostData) {
    console.log($route.params);
    // const { data } = await useFetch(`/api/issue/`, {
    //     query: { number: $route.params.id },
    // });
    // currentPostData = data.value?.data as PostData;
}
</script>

<style scoped lang="scss">
.content-container {
    background-color: var(--content-background-color);
}
</style>
