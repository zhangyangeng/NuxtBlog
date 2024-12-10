<template>
    <div class="main-view">
        <Header></Header>
        <div ref="contentEle" class="content">
            <slot />
            <Footer></Footer>
        </div>
        <BackTop :target="contentEle"></BackTop>
    </div>
</template>

<!-- 默认布局 -->
<script setup lang="ts">
import BackTop from '~/components/common/BackTop.vue';

const contentEle = ref<HTMLElement>();
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
