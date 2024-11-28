<template>
    <div class="home-container">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<!-- 左右布局结构 -->
<script setup lang="ts"></script>

<style scoped lang="scss">
.home-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > div {
        min-height: 300px;
    }
    .left {
        width: 68%;
    }
    .right {
        width: 30%;
    }
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
// 电脑端样式
@media (max-width: 1400px) {
    .home-container {
        width: 90%;
    }
}
// 平板端样式
@media (max-width: 992px) {
    .home-container {
        width: 95%;
    }
}
// 手机端样式
@media (max-width: 768px) {
    .home-container {
        .left {
            width: 100%;
        }
        .right {
            display: none;
        }
    }
}
</style>
