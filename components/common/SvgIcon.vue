<template>
    <nuxt-icon
        :name="name"
        :style="{
            color: inheritLisghtColor ? lightColor : isDark ? darkColor : lightColor,
            fontSize: fontSize,
        }" />
</template>

<!-- SvgIcon组件 -->
<script setup lang="ts">
withDefaults(
    defineProps<{
        // 图标名称
        name: string;
        // 白天模式颜色
        lightColor?: string;
        // 夜晚模式颜色
        darkColor?: string;
        // 字体大小
        fontSize?: string;
        // 暗色模式下是否沿用白天模式颜色
        inheritLisghtColor?: boolean;
    }>(),
    {
        lightColor: '#666',
        darkColor: '#fff',
        fontSize: '18px',
        inheritLisghtColor: false,
    }
);

const isDark = useDark();
</script>

<style scoped lang="scss">
.nuxt-icon {
    cursor: pointer;
}
</style>
