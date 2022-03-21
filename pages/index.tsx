import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Head>
        <title>AD Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
      </main>
      <h1>Dupa asta</h1>
      <h1>Si inca unul</h1>

      <footer className="bg-yellow-400"></footer>
    </div>
  )
}

export default Home
