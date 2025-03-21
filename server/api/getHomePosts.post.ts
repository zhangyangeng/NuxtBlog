import { graphQL } from '..';
import { GITHUB_OWNER, GITHUB_REPO, TOP_LABEL } from '../enums/Constants';
import { issueNode } from '../scheme/issueNode';

/**
 * 查询置顶和普通 Issues用作首页数据展示
 */
export default defineEventHandler(async () => {
    return await graphQL(
        `
            {
                # 第一部分：独立查询置顶 Issues（使用顶层的 search 字段）
                pinnedIssues: search(
                    type: ISSUE
                    query: """
                    repo:${GITHUB_OWNER}/${GITHUB_REPO} is:open label:"${TOP_LABEL}" sort:created-desc
                    """
                    first: 5
                ) {
                    issueCount
                    edges {
                        node {
                            ... on Issue {
                                ${issueNode}
                            }
                        }
                    }
                }

                # 第二部分：独立查询普通 Issues（使用顶层的 search 字段）
                regularIssues: search(
                    type: ISSUE
                    query: """
                    repo:${GITHUB_OWNER}/${GITHUB_REPO} is:open -label:"${TOP_LABEL}" sort:created-desc
                    """
                    first: 5
                ) {
                    issueCount
                    edges {
                        node {
                            ... on Issue {
                                ${issueNode}
                            }
                        }
                    }
                }
            }
        `
    );
});
