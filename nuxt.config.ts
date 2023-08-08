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
});
