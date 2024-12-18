<template>
    <div class="user-card rounded-xl shadow-md not-allow-select">
        <!-- 背景图片区域 -->
        <div class="background"></div>
        <!-- 用户头像 -->
        <div class="user-avatar">
            <div class="avatar shadow-md">
                <el-avatar shape="circle" :size="80" fit="cover" src="avatar.jpg" />
            </div>
        </div>
        <!-- 座右铭 -->
        <p class="motto text-xs text-zinc-500 p-2.5">『{{ home.motto }}』</p>
        <!-- 文章数量 -->
        <div class="post-dash p-2.5">
            <div class="post-count info">
                <div class="count">2</div>
                <div class="name text-zinc-500">文章数</div>
            </div>
            <div class="category-count info">
                <div class="count">1</div>
                <div class="name text-zinc-500">分类数</div>
            </div>
            <div class="tag-count info">
                <div class="count">5</div>
                <div class="name text-zinc-500">标签数</div>
            </div>
        </div>
        <!-- 联系方式 -->
        <div v-if="home.showContact" class="link-me h-20">
            <UDivider label="你能抓到我吗" />
            <div class="link-icon"></div>
        </div>
    </div>
</template>

<!-- 用户卡片 -->
<script setup lang="ts">
const { home } = useAppConfig();
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
        // height: 100px;
        display: flex;
        justify-content: space-around;
        // border-bottom: 1px solid var(--border-color);
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
}
</style>
