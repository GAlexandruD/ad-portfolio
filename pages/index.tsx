import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Example } from '../components/Example'

import Header from '../components/Header'
import Logos from '../components/Logos'
import Project from '../components/Project'
import ProjectTest from '../components/ProjectTest'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>AD Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home" className="">
        <Header />
      </main>
      <h1
        id="tech"
        className="bg-slate-700 pt-20 pb-20 text-center text-3xl text-gray-300"
      >
        Some cool tech that I've used:
      </h1>

      <Logos />

      <h1 className="bg-slate-600 p-10 text-center text-3xl text-gray-300">
        My projects
      </h1>
      <div
        id="projects"
        className="grid grid-cols-1 content-center justify-center bg-slate-600 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Project />
      </div>

      <Example />
      <h1>Dupa asta</h1>
      <h1>Si inca unul</h1>
      <ProjectTest />

      <div id="go-top">
        <a className="scroll-smooth" title="Back to Top" href="#home">
          <i className="icon-up-open">ZZZ</i>
        </a>
      </div>

      {
        //<Projects />  https://ui.glass/generator/#
      }

      <footer className="bg-yellow-400"></footer>
    </div>
  )
}

export default Home
