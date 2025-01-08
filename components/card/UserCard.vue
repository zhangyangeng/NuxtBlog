<template>
    <div class="user-card rounded-xl shadow-md not-allow-select">
        <!-- 背景图片区域 -->
        <div class="background"></div>
        <!-- 用户头像 -->
        <div class="user-avatar">
            <div class="avatar shadow-md">
                <el-avatar shape="circle" :size="80" fit="cover" src="/avatar.jpg" />
            </div>
        </div>
        <!-- 座右铭 -->
        <p class="motto text-xs text-zinc-500 p-2.5">『{{ motto }}』</p>
        <!-- 文章数量 -->
        <div class="post-dash p-2.5">
            <div class="post-count info">
                <div class="count">
                    <ULink to="/TimeLine" inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                        23
                    </ULink>
                </div>
                <div class="name text-zinc-500">{{ t('user-card.post-count') }}</div>
            </div>
            <div class="category-count info">
                <div class="count">
                    <ULink to="/Category" inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                        1
                    </ULink>
                </div>
                <div class="name text-zinc-500">{{ t('user-card.category-count') }}</div>
            </div>
            <div class="tag-count info">
                <div class="count">
                    <ULink to="/Tag" inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400">
                        1
                    </ULink>
                </div>
                <div class="name text-zinc-500">{{ t('user-card.tag-count') }}</div>
            </div>
        </div>
        <!-- 联系方式 -->
        <div v-if="showContact.enabled" class="link-me p-2.5">
            <UDivider :label="t('user-card.can-you-catch-me')" />
            <div class="link-icon h-12">
                <template v-for="(item, index) in showContact.info" :key="index">
                    <CommonSvgIcon v-if="item" :name="index" font-size="20px" @click="jumpToLink(item)"></CommonSvgIcon>
                </template>
            </div>
        </div>
    </div>
</template>

<!-- 用户卡片 -->
<script setup lang="ts">
const { home } = useAppConfig();
const { showContact, motto } = home;
const { t } = useI18n();

/**
 * 跳转到链接
 * @param {string} link 链接
 */
function jumpToLink(link: string): void {
    if (UrlUtils.checkUrl(link)) {
        UrlUtils.forwardUrl(link);
    } else {
        ElMessage.error(t('public.message.url-invalid-please-check'));
    }
}
</script>

<style scoped lang="scss">
.user-card {
    background-color: var(--content-background-color);
    width: 100%;
    .background {
        position: relative;
        height: 140px;
        background: url('user-bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 0.75rem 0.75rem 0 0;
        // 设置背景图片下边框模糊
        &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            filter: blur(5px);
            width: 100%;
            height: 10px; /* 模糊高度 */
            background: inherit; /* 使用与父元素相同的背景 */
        }
    }
    .user-avatar {
        position: relative;
        align-items: center;
        padding-top: 40px;
        .avatar {
            background-color: #fff;
            border-radius: 50%;
            border: 5px solid #fff;
            position: absolute;
            top: -50px;
            width: 90px;
            height: 90px;
            left: 80px;
            margin: auto;
            display: inline-block;
        }
    }
    .motto {
        text-align: center;
    }
    .post-dash {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .info {
            flex: 1;
            text-align: center;
            &:not(:last-child) {
                border-right: 1px solid var(--border-color);
            }
            .count {
                font-size: 1.25rem;
                font-weight: 500;
            }
            .name {
                font-size: 0.75rem;
            }
        }
    }
    .link-me {
        .link-icon {
            display: flex;
            justify-content: space-around;
            align-items: center;
            span:hover {
                transition-property: font-size;
                transition-duration: 0.1s;
                font-size: 30px !important;
            }
        }
    }
}
</style>
