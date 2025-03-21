<template>
    <div class="post-header not-allow-select">
        <h1 class="text-xl font-semibold">{{ title }}</h1>
        <!-- 文章标志 -->
        <div class="symbol">
            <div class="symbol-info">
                <CommonSvgIcon name="publish" font-size="12px" :inherit-lisght-color="true"></CommonSvgIcon>
                <span class="text-zinc-500 symbol-item">发表于：{{ publicTime }}</span>
            </div>
            <div v-if="category" class="symbol-info">
                <el-divider direction="vertical"></el-divider>
                <CommonSvgIcon name="collect" font-size="12px" :inherit-lisght-color="true"></CommonSvgIcon>
                <span class="text-zinc-500 symbol-item">
                    分类于：
                    <el-link>{{ category }}</el-link>
                </span>
            </div>
        </div>
    </div>
</template>

<!-- 文章标签组件 -->
<script setup lang="ts">
import { dayjs } from 'element-plus';

const props = defineProps<{
    title: string;
    publishTime?: string;
    category?: string;
}>();

const publicTime = computed(() => {
    return props.publishTime ? dayjs(props.publishTime).format('YYYY-MM-DD HH:mm:ss') : '';
});

const category = computed(() => {
    return props.category || '';
});
</script>

<style scoped lang="scss">
.post-header {
    text-align: center;
    .symbol {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        .nuxt-icon {
            margin-right: 0.25rem;
        }
        .symbol-info {
            display: flex;
            align-items: center;
        }
        .symbol-item {
            display: flex;
            align-items: center;
            .el-link {
                font-size: 0.75rem;
            }
        }
    }
}
</style>
