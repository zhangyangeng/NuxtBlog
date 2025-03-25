import markdownit from 'markdown-it';

/**
 * Markdown 渲染插件
 */
export default defineNuxtPlugin((nuxtApp) => {
    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true,
    });
    nuxtApp.provide('md', md);
});
