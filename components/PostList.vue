<template>
    <div class="post-list rounded-xl shadow-md mb-4 p-4">
        <template v-if="empty">
            <el-empty description="该作者很懒，暂未发布任何文章" />
        </template>
        <template v-else>
            <CommonPostHeader></CommonPostHeader>
            <!-- 文章摘要（由AI生成） -->
            <div class="text-sm my-2 summary">
                <div class="title w-20 not-allow-select">AI 摘要</div>
                <div class="content">
                    这是内容哈哈哈哈哈哈阿萨德哈时间的哈刷卡机等哈刷卡机德哈卡叫啥打卡机是这是内容哈哈哈哈哈哈阿萨德哈时间的哈刷卡机等哈刷卡机德哈卡叫啥打卡机是
                </div>
            </div>
            <!-- 阅读原文 -->
            <div class="original">
                <UButton label="阅读原文" color="gray" size="xs">
                    <template #trailing>
                        <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                    </template>
                </UButton>
            </div>
        </template>
        <CommonSvgIcon class="top" name="top" light-color="#F35571" :inherit-lisght-color="true" font-size="40px"></CommonSvgIcon>
    </div>
</template>

<!-- 文章列表 -->
<script setup lang="ts">
defineProps<{
    empty?: boolean;
}>();
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
