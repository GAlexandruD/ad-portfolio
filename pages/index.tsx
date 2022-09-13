import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import { Example } from '../components/Example'
import Footer from '../components/Footer'

import { GetAllProjects } from '../lib/database'
import Header from '../components/Header'
import Logos from '../components/Logos'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Projects from '../components/Projects'
import ProjectTest from '../components/ProjectTest'
// import App from '../components/Background'
import { request } from '@octokit/request'

const Home: NextPage = ({ projects }: any) => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>AD Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home">
        <Navbar />
        <Header />
      </main>

      <Logos />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

{
  //<Projects />  https://ui.glass/generator/#
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(): Promise<any> {
  // const projects = await GetAllProjects()
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const projects = await GetAllProjects()

  console.log('1', projects)
  console.log('Last updated: ', projects.data[0].pushed_at)
  console.log('3', { projects })

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60 * 60 * 24, // A day in seconds
  }
}

export default Home
