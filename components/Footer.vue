<template>
    <footer class="mb-2.5">
        <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/zh-cn"
            class="cc-opacity"
            rel="external nofollow noopener noreferrer"
            target="_blank">
            <img
                src="https://cdn.jsdelivr.net/npm/@creativecommons/vocabulary@2020.11.3/assets/license_badges/small/by_nc_sa.svg"
                alt="Creative Commons" />
        </a>
        <div class="run-time text-sm">
            <span>2024 - {{ currentYear }} © Wrysmile</span>
        </div>
    </footer>
</template>

<!-- CopyRight组件 -->
<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped lang="scss">
footer {
    user-select: none;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .run-time {
        color: #6b7280;
        margin: 0 10px;
    }
}
</style>
