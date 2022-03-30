import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Example } from '../components/Example'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Logos from '../components/Logos'
import Project from '../components/Project'
import Projects from '../components/Projects'
import ProjectTest from '../components/ProjectTest'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>AD Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home">
        <Header />
      </main>

      <Logos />
      <Projects />
      <Footer />
    </div>
  )
}

{
  //<Projects />  https://ui.glass/generator/#
}
export default Home
