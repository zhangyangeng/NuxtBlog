// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
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
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/main.scss" as *;',
                },
            },
        },
    },
    compatibilityDate: '2024-11-15',
});
