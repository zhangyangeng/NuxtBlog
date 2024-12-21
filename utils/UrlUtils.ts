/**
 * Url工具类
 */
export class UrlUtils {
    /**
     * 检测是否为url
     * @param {string} url 当前地址
     * @returns {boolean} 是否为url
     */
    public static checkUrl(url: string): boolean {
        if (/^(http(s){0,1}|www)/g.test(url)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 前往新地址
     * @param {string} url 跳转地址
     * @param {string} target 目标
     */
    public static forwardUrl(url: string, target: string = '__black'): void {
        if (url) {
            window.open(url, target);
        }
    }
}
