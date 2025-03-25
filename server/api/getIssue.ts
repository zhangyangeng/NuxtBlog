import { graphQL } from '..';
import { GITHUB_OWNER, GITHUB_REPO } from '../enums/Constants';
import { issueNode } from '../scheme/issueNode';

/**
 * 获取单篇文章的详情
 */
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    return await graphQL(`
            {
                repository(owner: "${GITHUB_OWNER}", name: "${GITHUB_REPO}") {
                    issue(number: ${query.number}) {
                        ${issueNode}
                    }
                }
            }
        `);
});
