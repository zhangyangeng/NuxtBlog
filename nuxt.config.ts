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
        [
            '@element-plus/nuxt',
            {
                importStyle: 'scss',
            },
        ],
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
    ],
    css: ['~/assets/scss/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variable.scss" as *;',
                    api: 'modern-compiler',
                },
            },
        },
    },
    compatibilityDate: '2024-11-15',
});
