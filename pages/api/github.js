// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Octokit, App } from 'octokit'

import { request } from '@octokit/request'

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

octokit
  .request('GET /repos/{owner}/{repo}/commits', {
    owner: 'GAlexandruD',
    repo: 'ad-portfolio',
    per_page: 100,
  })
  .then((res) => {
    console.log('oktokit', res.data)
  })

const github = async (req, res) => {
  const result = await request('GET /repos/{owner}/{repo}/commits', {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: 'GAlexandruD',
    repo: 'ad-portfolio',
    // path: 'components/pages/index.tsx',
  })

  //format date to YYYY-MM-DD
  const dateobj = new Date(result.headers['last-modified'])
    .toISOString()
    .split('T')[0]

  res.status(200).json({
    lastMod: dateobj,
    aha: 'ahaaaaaa',
  })
  console.log(result)
}

export default github
