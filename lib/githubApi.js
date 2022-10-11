import { request } from '@octokit/request'

// Get all the repositories from Github
const getAllProjects = async (req, res) => {
  const repos = await request('GET /users/{owner}/repos', {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: 'GAlexandruD',
    // repo: 'ad-portfolio',
    // per_page: 2,
    // path: './README.md',
  })
  // console.log('All github projects are: ', repos.data)
  return repos.data //Array of all the fetched repos
}

// Filter projects to show
const projectsToShow = async () => {
  const allProjects = await getAllProjects()

  // Search for 'portfolioDisplay=true'
  const promiseProjects = await allProjects.map(async (project) => {
    const { name, owner } = project
    const condition = await github(owner.login, name)
    return { ...project, portfolioDisplay: condition }
  })
  const modified = Promise.all(promiseProjects).then((results) => results)
  return modified
}

const github = async (
  owner = 'GAlexandruD',
  repo = 'ad-portfolio',
  path = 'README.md'
) => {
  const readme = await request('GET /repos/{owner}/{repo}/contents/{path}', {
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner,
    repo,
    // per_page: 2,
    path,
  })

  // Get the content of the readme.md in base64
  const readFile = await readme.data.content

  // Create a buffer so we can transform
  const readHuman = await new Buffer.from(readFile, 'base64')

  // Transform the content of the readme so I can read it
  const text = readHuman.toString('utf-8')

  // Decide if this project should be included in the portfolio
  const display = text.includes('PortfolioDisplay=true')
  // console.log(display, owner, repo)

  return display

  // const repos = await request('GET /users/{owner}/repos', {
  //   headers: {
  //     authorization: `token ${process.env.GITHUB_TOKEN}`,
  //   },
  //   owner: 'GAlexandruD',
  //   repo: 'ad-portfolio',
  //   // per_page: 2,
  //   // path: './README.md',
  // })

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
}

export { getAllProjects, github, projectsToShow }
