import { Octokit } from 'octokit';

const config = useRuntimeConfig();

const octokit = new Octokit({
    auth: config.public.githubToken,
});

export default octokit;
