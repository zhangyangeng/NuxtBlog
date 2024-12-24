<template>
    <div class="custom-pagination h-10 rounded-xl shadow-md p-1">
        <el-pagination
            :current-page="currentIndex"
            layout="prev, pager, next"
            size="small"
            :total="total"
            @update:current-page="currentPageChange" />
    </div>
</template>

<!-- 分页器组件 -->
<script setup lang="ts">
defineProps<{
    // 当前页码
    currentIndex: number;
    // 总条数
    total: number;
}>();

const emits = defineEmits<{
    // 页码变化
    (e: 'pageChange', page: number): void;
}>();

/**
 * 监听页码变化
 * @param {number} page 当前页码
 */
function currentPageChange(page: number): void {
    console.log('当前页码为', page);
    emits('pageChange', page);
}
</script>

<style scoped lang="scss">
.custom-pagination {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--content-background-color);
}
</style>
