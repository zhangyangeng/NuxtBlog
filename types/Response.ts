import type { Node } from './GraphQL';
import type { PostData } from './Post';

/**
 * 首页文章响应数据
 */
export interface HomePostResponseData {
    pinnedIssues: {
        issueCount: number;
        edges: Node<PostData>[];
    };
    regularIssues: {
        issueCount: number;
        edges: Node<PostData>[];
    };
}
