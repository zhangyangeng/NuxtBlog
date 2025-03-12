/* eslint-disable @typescript-eslint/explicit-function-return-type */
import octokit from '.';

/**
 * 获取仓库的 issues 列表
 * @returns {Promise<any>} 返回 issues 列表
 */
export async function fetchIssuesListApi() {
    return await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'zhangyangeng',
        repo: 'NuxtBlog',
    });
}
