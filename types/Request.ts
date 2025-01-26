/**
 * 接口响应类型
 */
export interface HttpResponse<T> {
    data: T;
    headers: Record<string, string>;
    status: number;
    url: string;
}
