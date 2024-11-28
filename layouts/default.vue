<template>
    <div class="main-view">
        <Header></Header>
        <div class="content">
            <slot />
            <Footer></Footer>
            <el-backtop :right="100" :bottom="100" />
        </div>
    </div>
</template>

<!-- 默认布局 -->
<script setup lang="ts">
// a
</script>

<style scoped lang="scss">
.main-view {
    height: 100vh;
    overflow: hidden;
    .content {
        width: 100vw;
        height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>
