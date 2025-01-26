import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

console.log(process.env.GITHUB_TOKEN);

const res = await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'zhangyangeng',
    repo: 'NuxtBlog',
});
console.log(res);
