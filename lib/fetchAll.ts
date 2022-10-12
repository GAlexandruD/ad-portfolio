import { fetchSkills } from './fetchSkills'
import { fetchProjects } from './fetchProjects'
import { fetchSocials } from './fetchSocials'
import { fetchPageInfo } from './fetchPageInfo'
import { PageInfo, DbProjects, DbSkills, Social } from '../typings'
import { getAllProjects } from './githubApi'

// type Props = {}

const fetchAll = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const skills: DbSkills[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()

  const sanityProjects: DbProjects[] = await fetchProjects()
  const githubProjects = await getAllProjects() // Fetching all projects from Github
  // Compare the projects from Sanity and Github and update the ones that are newer
  const updatedProjects = sanityProjects.map((project) => {
    const githubProject = githubProjects.find(
      (p: any) => p.html_url === project.githubUrl
    )
    if (githubProject) {
      if (githubProject.pushed_at !== project.updated_at) {
        // TODO: Update the project's date on Sanity
        // FIXME: The date is not updated on Sanity
        // const newGitHubDate = await JSON.parse()

        return { ...project, updated_at: githubProject.pushed_at }
      }
    }
    return project
  })

  return {
    pageInfo,
    projects: updatedProjects,
    skills,
    socials,
  }
}

export default fetchAll
