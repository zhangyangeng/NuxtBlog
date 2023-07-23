/* eslint-disable camelcase */
import zh_CN from '../locales/zh-CN.json';
import zh_TW from '../locales/zh-TW.json';
import en from '../locales/en.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh_CN',
    // 是否全局注入
    globalInjection: true,
    messages: {
        zh_CN,
        zh_TW,
        en,
    },
}));
