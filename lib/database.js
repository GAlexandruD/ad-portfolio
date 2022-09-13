import { request } from '@octokit/request'

// Get the all the repositories from Github
const allProjects = []

const GetAllProjects = async (req, res) => {
  const repos = await request('GET /users/{owner}/repos', {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: 'GAlexandruD',
    repo: 'ad-portfolio',
    // per_page: 2,
    // path: './README.md',
  })

  console.log(repos)
  console.log('Last updated: ', repos.data[0].pushed_at)
  return repos
}

// Extract last modified date for each project
const database = []

const github = async (req, res) => {
  const repos = await request('GET /users/{owner}/repos', {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: 'GAlexandruD',
    repo: 'ad-portfolio',
    // per_page: 2,
    // path: './README.md',
  })

  const readme = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: 'GAlexandruD',
    repo: 'ad-portfolio',
    // per_page: 2,
    path: 'README.md',
  })

  const pupu = await readme.data.content
  const buff = await new Buffer.from(pupu, 'base64')

  const text = buff.toString('utf-8')

  //format date to YYYY-MM-DD
  // const dateobj = new Date(repos.headers['last-modified'])
  //   .toISOString()
  //   .split('T')[0]

  //   res.status(200).json({
  //     // status: repos.status,
  //     // dateAccessed: repos.headers.date.split(', ')[1],

  //     // lastMod: dateobj,
  //     text: text,
  //     repos: `[${repos.data.map(
  //       (element) =>
  //         element.name + ' last updated: ' + element.updated_at.split('T')[0]
  //     )}]`,
  //     aha: 'ahaaaaaa',
  //   })
  // console.log(repos.data[0])
  console.log(readme.data.content)

  console.log(text)
}

export { GetAllProjects }
