// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Contact from '../components/Contact'
// import { Example } from '../components/Example'
import Footer from '../components/Footer'

import { getAllProjects, github, projectsToShow } from '../lib/githubApi'
import Header from '../components/Header'
import Logos from '../components/Logos'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import { useEffect, useState } from 'react'

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  // const projects = await getAllProjects()
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  const projects = await projectsToShow().then((response) => response)

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day
    revalidate: 60 * 60 * 24, // A day in seconds
  }
}

const Home = ({ projects }) => {
  // useEffect(() => {
  //   const getProjectsOnce = async () => {
  //     const projects = projectsToShow().then((result) => setAllProjects(result))
  //   }
  //   getProjectsOnce()
  // }, [])

  useEffect(() => {
    console.log('😀😀😀😀😀😀😀😀😀😀', projects[0])
  }, [])

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
      {<Projects projects={projects} />}
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
