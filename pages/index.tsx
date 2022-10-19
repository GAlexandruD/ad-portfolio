import { GetStaticProps } from 'next'
import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Hero from '../components/Hero'
import About from '../components/About'
import { PageInfo, DbProjects, DbSkills, Social } from '../typings'
import fetchAll from '../lib/fetchAll'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DisplayProjectDetails from '../components/DisplayProjectDetails'
import 'highlight.js/styles/github-dark.css'
import CloseModal from '../components/CloseModal'

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
  const result = await fetchAll()

  return {
    props: {
      pageInfo: result.pageInfo,
      projects: result.projects,
      skills: result.skills,
      socials: result.socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day
    revalidate: 60 * 60 * 24, // A day in seconds
  }
}

const Home = ({ pageInfo, projects, skills, socials }: Props) => {
  const router = useRouter()
  const project = projects.find(
    (project: DbProjects) => project._id === router.query.id
  )

  const [modal, setModal] = useState(false)

  return (
    <>
      {!!router.query.id && modal && (
        <div className="absolute top-0 left-0 z-30 h-screen w-screen bg-gray-200 dark:bg-[#242424]">
          <div className="h-full w-full overflow-auto">
            <CloseModal setModal={setModal} />

            <DisplayProjectDetails project={project as DbProjects} />
          </div>
        </div>
      )}

      <div
        className="z-0 h-screen snap-y snap-mandatory
      overflow-x-hidden overflow-y-scroll bg-gray-200 text-gray-600 dark:bg-[rgb(36,36,36)] dark:text-gray-400"
      >
        <Head>
          <title>AD Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {modal ? null : <Header socials={socials} />}

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
          <Projects projects={projects} setModal={setModal} />
        </section>

        <section id="contact" className="snap-start">
          <Contact pageInfo={pageInfo} />
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Home
