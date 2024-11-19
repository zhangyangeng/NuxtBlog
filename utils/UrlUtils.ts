/**
 * Url工具类
 */
export class UrlUtils {
    /**
     * 前往新地址
     * @param {string} url 跳转地址
     * @param {string} target 目标
     */
    public static forwardUrl(url: string, target = '__black'): void {
        if (url) {
            window.open(url, target);
        }
    }
}
