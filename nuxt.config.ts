// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    devServer: {
        port: 5173,
    },
    typescript: {
        typeCheck: true,
    },
    modules: [
        [
            '@nuxtjs/i18n',
            {
                vueI18n: './plugins/i18n.config.ts',
            },
        ],
        '@element-plus/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // 自动引入 `defineStore()`
                    'defineStore',
                ],
            },
        ],
        '@nuxt/ui',
        '@vueuse/nuxt',
        'nuxt-icons',
    ],
    elementPlus: {
        importStyle: 'scss',
        // 支持 Element Plus 的暗黑模式
        themes: ['dark'],
    },
    css: ['~/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // 覆盖Element Plus的样式变量
                    additionalData: '@use "@/assets/scss/element.scss";',
                    api: 'modern-compiler',
                },
            },
        },
        optimizeDeps: {
            include: ['dayjs', 'dayjs/plugin/*', 'element-plus']
        }
    },
    compatibilityDate: '2024-11-15',
    runtimeConfig: {
        public: {
            githubToken: process.env.NUXT_GITHUB_TOKEN,
        },
    },
    experimental: {
        // 开启异步数据加载
        asyncContext: true,
    },
});
