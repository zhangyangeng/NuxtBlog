<template>
    <div v-show="showBackTop" class="backtop-btn w-10 h-10 rounded-full" @click="backTop">
        <div class="backtop-word">
            <slot> UP </slot>
        </div>
    </div>
</template>

<!-- 回到顶部按钮 -->
<script setup lang="ts">
// 输入属性
const props = defineProps<{
    target: HTMLElement | undefined;
}>();
// 是否已初始化
const isInit = ref(false);
// 是否展示回到顶部按钮
const showBackTop = ref(false);

/**
 * 回到头部
 */
function backTop(): void {
    if (props.target) {
        props.target.scrollTo({
            top: 0,
        });
    }
}

/**
 * 监听目标元素滚动
 */
function listenerScroll(): void {
    const scrollTop = props.target?.scrollTop || 0;
    showBackTop.value = scrollTop > 0;
}

watch(
    () => props.target,
    () => {
        if (props.target && !isInit.value) {
            props.target.addEventListener('scroll', listenerScroll);
        }
    }
);

onBeforeUnmount(() => {
    props.target && props.target.removeEventListener('scroll', listenerScroll);
});
</script>

<style scoped lang="scss">
.backtop-btn {
    position: fixed;
    right: 50px;
    bottom: 50px;
    cursor: pointer;

    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    padding: 10px;
    transition: all 0.3s ease;
    .backtop-word {
        height: 100%;
        width: 100%;
        text-align: center;
        color: var(--primary-color);
    }
}
</style>
