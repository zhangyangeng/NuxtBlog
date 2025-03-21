export const issueNode = `
title
body
comments(first: 1) {
    edges {
        node {
            author {
                login
            }
            body
        }
    }
}
labels(first: 5) {
    edges {
        node {
            id
            name
            color
        }
    }
}
milestone {
    id
    number
    title
}
id
createdAt
updatedAt
number
`;
