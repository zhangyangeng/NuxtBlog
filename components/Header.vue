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
                <UButton
                    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                    color="gray"
                    variant="ghost"
                    aria-label="Theme"
                    @click="isDark = !isDark" />
                <UIcon name="material-symbols:search" class="w-5 h-5" />
                <UIcon
                    v-if="showContact?.info?.github"
                    name="teenyicons:github-outline"
                    class="w-5 h-5"
                    @click="forwardGithub(showContact?.info?.github)" />
            </div>
        </div>
    </header>
</template>

<!-- 页面头部 -->
<script setup lang="ts">
import '~/apis/index';
// 页面显示模式
const isDark = useDark();
const { t } = useI18n();
const mobileLink = [
    [
        {
            label: t('header.link.home'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: async (): Promise<void> => {
                await navigateTo('/');
            },
        },
        {
            label: t('header.link.category'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: async (): Promise<void> => {
                await navigateTo('/Category');
            },
        },
        {
            label: t('header.link.time-line'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: async (): Promise<void> => {
                await navigateTo('/TimeLine');
            },
        },
        {
            label: t('header.link.about'),
            // icon: 'i-heroicons-pencil-square-20-solid',
            click: async (): Promise<void> => {
                await navigateTo('/About');
            },
        },
    ],
];
const { home } = useAppConfig();
const { showContact } = home;

/**
 * 前往Github
 * @param {string} url 当前地址
 */
function forwardGithub(url: string): void {
    UrlUtils.forwardUrl(url);
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
