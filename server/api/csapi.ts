export default defineEventHandler((event) => {
    const queryInfo = getQuery(event);
    return {
        code: 0,
        message: 'success',
        data: `这是测试接口，Url参数id的值为${queryInfo.id}`
    }
});