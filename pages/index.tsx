import { GetStaticProps } from 'next'
import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import { getAllProjects, github, projectsToShow } from '../lib/githubApi'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Hero from '../components/Hero'
import About from '../components/About'
import { PageInfo, DbProjects, DbSkills, Social } from '../typings'
import { fetchSkills } from '../lib/fetchSkills'
import { fetchProjects } from '../lib/fetchProjects'
import { fetchSocials } from '../lib/fetchSocials'
import { fetchPageInfo } from '../lib/fetchPageInfo'

type Props = {
  pageInfo: PageInfo
  skills: DbSkills[]
  projects: DbProjects[]
  socials: Social[]
}

// This function gets called at build time on server-side.
// It will be called again, on a serverless function, when
// revalidation is enabled and a new request comes in

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const skills: DbSkills[] = await fetchSkills()
  const socials: Social[] = await fetchSocials()

  // Fetching projects from Sanity and Github. Verify the updated_at value and if it's newer than the one in Sanity, update it.
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
    props: {
      pageInfo,
      projects: updatedProjects,
      skills,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day
    revalidate: 60 * 60 * 24, // A day in seconds
  }
}

const Home = ({ pageInfo, projects, skills, socials }: Props) => {
  return (
    <div
      className="z-0 h-screen snap-y snap-mandatory
    overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-gray-400"
    >
      <Head>
        <title>AD Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>

      <Footer />
    </div>
  )
}

export default Home
