/**
 * LocalStorage工具类，由于Nuxt为服务端渲染，直接使用会报错，这里进行封装
 */
export class LocalStorageUtils {
    /**
     * 获取LocalStorage中的值
     * @param {string} key 键值
     * @returns {string | null} 返回值
     */
    static getItem(key: string): string | null {
        if (process.server) {
            return null;
        }
        return localStorage.getItem(key);
    }

    /**
     * 设置LocalStorage中的值
     * @param {string} key 键值
     * @param {string} value 值
     */
    static setItem(key: string, value: string): void {
        if (process.server) {
            return;
        }
        localStorage.setItem(key, value);
    }

    /**
     * 移除LocalStorage中的值
     * @param {string} key 键值
     */
    static removeItem(key: string): void {
        if (process.server) {
            return;
        }
        localStorage.removeItem(key);
    }
}
