import { graphql } from '@octokit/graphql';
import { Octokit } from 'octokit';

const config = useRuntimeConfig();

const octokit = new Octokit({
    auth: config.githubToken,
});

const graphQL = graphql.defaults({
    headers: {
        authorization: `token ${config.githubToken}`,
    },
});

export { octokit, graphQL };
