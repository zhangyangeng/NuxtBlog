<template>
    <LayoutLeftRight>
        <template #left>
            <div class="content-container rounded-xl shadow-md p-4">
                <template v-if="currentPostData">
                    <CommonPostHeader :title="currentPostData.title"></CommonPostHeader>
                    <div class="post-content md-theme-vue" v-html="renderContent"></div>
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
import type { SinglePostResponseData } from '~/types/Response';

const $route = useRoute();
const { $md } = useNuxtApp();
let currentPostData: PostData | null = null;

currentPostData = JSON.parse(LocalStorageUtils.getItem(`post_${$route.params.id}`) as string);
LocalStorageUtils.removeItem(`post_${$route.params.id}`);

const renderContent = computed(() => {
    return $md.render(currentPostData?.body || '');
});

/**
 * 文章数据不存在时为直接刷新，请求获取文章数据
 */
if (!currentPostData) {
    const { data } = await useFetch(`/api/getIssue`, {
        query: { number: $route.params.id },
        method: 'POST',
    });
    currentPostData = (data.value as SinglePostResponseData).repository.issue;
}
</script>

<style scoped lang="scss">
.content-container {
    background-color: var(--content-background-color);
}
</style>
