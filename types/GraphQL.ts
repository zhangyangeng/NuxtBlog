/**
 * GraphQL Query Result
 */
export interface Node<T> {
    node: T;
}

/**
 * GraphQL Query Edge Result
 */
export interface Edges<T> {
    edges: Node<T>[];
}
