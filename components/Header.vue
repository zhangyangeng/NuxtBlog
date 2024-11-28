<template>
    <header class="mb-2.5 shadow-md">
        <div class="left">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
            <div class="title text-lg font-semibold">Wrysmile的小站</div>
        </div>
        <div class="right">
            <div class="link font-semibold text-sm">
                <ULink
                    to="/"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    {{ t('header.link.home') }}
                </ULink>
                <ULink
                    to="/Category"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                    {{ t('header.link.category') }}
                </ULink>
                <ULink
                    to="/TimeLine"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                    {{ t('header.link.time-line') }}
                </ULink>
                <ULink
                    to="/About"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                    {{ t('header.link.about') }}
                </ULink>
            </div>
            <div class="icon">
                <UDropdown :items="mobileLink" :popper="{ placement: 'bottom', arrow: true }" :ui="{ width: 'w-24' }">
                    <UIcon name="ic:baseline-format-list-bulleted" class="w-5 h-5 mobile-link" />
                </UDropdown>
                <UIcon name="material-symbols:search" class="w-5 h-5" />
                <UIcon v-show="mode === 'dark'" name="ic:round-wb-sunny" class="w-5 h-5" @click="changeWebMode('light')" />
                <UIcon v-show="mode === 'light'" name="ic:outline-dark-mode" class="w-5 h-5" @click="changeWebMode('dark')" />
                <UIcon name="teenyicons:github-outline" class="w-5 h-5" @click="forwardGithub" />
            </div>
        </div>
    </header>
</template>

<!-- 页面头部 -->
<script setup lang="ts">
import { useColorMode, type BasicColorMode } from '@vueuse/core';

// 页面显示模式
const mode = useColorMode();
const { t } = useI18n();
const mobileLink = [
    [
        {
            label: t('header.link.home'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: (): void => {
                console.log('Edit');
            },
        },
        {
            label: t('header.link.category'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: (): void => {
                console.log('Edit');
            },
        },
        {
            label: t('header.link.time-line'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: (): void => {
                console.log('Edit');
            },
        },
        {
            label: t('header.link.about'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: (): void => {
                console.log('Edit');
            },
        },
    ],
];

/**
 * 切换亮白/暗黑模式
 * @param {BasicColorMode} type 页面显示模式
 */
function changeWebMode(type: BasicColorMode): void {
    mode.value = type;
}

/**
 * 前往Github
 */
function forwardGithub(): void {
    UrlUtils.forwardUrl('https://github.com/zhangyangeng');
}
</script>

<style scoped lang="scss">
header {
    user-select: none;
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--content-background-color);
    .left {
        display: flex;
        align-items: center;
        .title {
            margin-left: 10px;
        }
    }
    .right {
        display: flex;
        align-items: center;
        .link {
            padding: 0 5px;
            border-right: 2px solid var(--border-color);
            :deep(a) {
                margin: 0 5px;
            }
        }
        .icon {
            padding-left: 5px;
            display: flex;
            align-items: center;
            .mobile-link {
                display: none;
            }
        }
    }
}
// 移动端
@media (max-width: 768px) {
    header {
        .right {
            .link {
                display: none;
            }
            .icon {
                .mobile-link {
                    display: block;
                }
            }
        }
    }
}
</style>
