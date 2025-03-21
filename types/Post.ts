import type { Edges } from './GraphQL';

/**
 * 标签数据

 */
export interface LabelData {
    id: string;
    name: string;
    color: string;
}

/**
 * 评论数据
 */
export interface CommentData {
    author: {
        login: string;
    };
    body: string;
}

/**
 * 文章数据
 */
export interface PostData {
    id: number;
    number: number;
    title: string;
    body?: string | null | undefined;
    // 创建和更新时间
    created_at?: string;
    updated_at?: string;
    createdAt?: string;
    updatedAt?: string;
    // 评论
    comments?: Edges<CommentData>;
    // 标签
    labels?: Edges<LabelData>;
    // 分类
    milestone: {
        id: string;
        number: number;
        title: string;
    };
}
