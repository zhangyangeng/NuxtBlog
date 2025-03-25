import MarkdownIt from 'markdown-it';

/**
 * 定义自定义插件类型
 */
declare module '#app' {
    interface NuxtApp {
        $md: ReturnType<typeof MarkdownIt>
    }
}

export {}