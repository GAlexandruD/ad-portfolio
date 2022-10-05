// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Contact from '../components/Contact'
// import { Example } from '../components/Example'
import Footer from '../components/Footer'

import { getAllProjects, github, projectsToShow } from '../lib/githubApi'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Link from 'next/link'

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

  // useEffect(() => {
  //   console.log('😀😀😀😀😀😀😀😀😀😀', projects)
  // }, [])

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
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <a>
          <Footer />
        </a>
      </Link>
    </div>
  )
}

export default Home
