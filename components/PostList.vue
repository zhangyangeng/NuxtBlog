<template>
    <div class="post-list rounded-xl shadow-md mb-4 p-4">
        <template v-if="empty">
            <el-empty description="该作者很懒，暂未发布任何文章" />
        </template>
        <template v-else>
            <CommonPostHeader
                :title="postData.title"
                :publish-time="postData.createdAt"
                :category="postData.milestone?.title || ''"></CommonPostHeader>
            <!-- 文章摘要（由AI生成） -->
            <div class="text-sm my-2 summary">
                <div class="title w-20 not-allow-select">AI 摘要</div>
                <div class="content">
                    {{ aiCommonet }}
                </div>
            </div>
            <!-- 阅读原文 -->
            <div class="original">
                <UButton label="阅读原文" color="gray" size="xs" @click="jumpToPostDetail(postData.number)">
                    <template #trailing>
                        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                    </template>
                </UButton>
            </div>
        </template>
        <CommonSvgIcon
            v-if="isTop"
            class="top"
            name="top"
            light-color="#F35571"
            :inherit-lisght-color="true"
            font-size="40px"></CommonSvgIcon>
    </div>
</template>

<!-- 文章列表 -->
<script setup lang="ts">
import { GITHUB_OWNER } from '~/server/enums/Constants';
import type { PostData } from '~/types/Post';

const props = defineProps<{
    empty?: boolean;
    postData: PostData;
}>();

const isTop = computed(() => props.postData.labels?.edges.some((item) => item.node.name === ':+1:置顶'));
const aiCommonet = computed(
    () => props.postData.comments?.edges.find((item) => item.node.author.login === GITHUB_OWNER)?.node.body || '正在生成中，请稍后...'
);

/**
 * 跳转到文章详情页
 * @param {number} id 文章ID
 */
async function jumpToPostDetail(id: number): Promise<void> {
    localStorage.setItem(`post_${id}`, JSON.stringify(props.postData));
    await navigateTo(`/posts/${id}`);
}
</script>

<style scoped lang="scss">
.post-list {
    position: relative;
    background-color: var(--content-background-color);
    min-height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    .summary {
        display: flex;
        align-items: flex-start;
        flex: 1;
        min-height: 0;
        .title {
            cursor: default;
            font-weight: bold;
            background-image: -webkit-linear-gradient(left, #199ebf, #16da3a 25%, #199ebf 50%, #16da3a 75%, #199ebf);
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 100%;
            animation: maskedAnimation 4s infinite linear;
        }
        .content {
            text-align: left;
            min-width: 0;
            flex: 1;
        }
    }
    .top {
        position: absolute;
        top: 0;
        right: 0;
    }
}
@keyframes maskedAnimation {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: -100% 0;
    }
}
</style>
