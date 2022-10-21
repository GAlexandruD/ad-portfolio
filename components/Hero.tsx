import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'
import Glitch from './Glitch'
import { urlFor } from '../lib/sanity'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [pageInfo.name],
    loop: 1,
    delaySpeed: 2000,
  })

  return (
    <div className="relative flex min-h-screen flex-col text-center sm:h-screen sm:w-screen sm:overflow-hidden sm:pt-0">
      <div className="absolute hidden h-screen min-h-screen w-screen items-center justify-center sm:flex sm:min-h-min">
        <BackgroundCircles />
      </div>

      <div className="flex h-screen max-h-[1000px] min-h-screen w-screen flex-col items-center justify-center xl:space-y-10">
        {/* <h1 className=" mb-10 font-[courier] text-lg font-bold uppercase tracking-[6px] text-gray-400 opacity-60">
          Alexandru Dragos
        </h1> */}

        <img
          src={urlFor(pageInfo.heroImage).url()}
          alt="The author"
          className="z-20 h-40 w-40 rounded-full object-cover opacity-60 hover:transform hover:opacity-80 dark:invert sm:h-64 sm:w-64"
        />
        <h1 className="px-10 text-xl font-semibold sm:text-2xl lg:text-4xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="gray" />
        </h1>
        <h2 className="z-20 mt-8 hidden uppercase tracking-[15px] dark:block">
          <Glitch />
        </h2>
        <h2 className="z-20 mt-8 w-[252px] uppercase tracking-[15px] dark:hidden ">
          REACT DEVELOPER
        </h2>

        <div className="z-20">
          <div className="">
            <div className="mb-8">
              <div className="mt-1 h-[2px] bg-gray-400 dark:bg-gray-300/30"></div>
              <div className="mt-1 h-[2px] bg-gray-400 dark:bg-gray-300/30"></div>
            </div>
            <Link href="#about">
              <button className="heroButton z-50">About</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton z-50">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton z-50">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
