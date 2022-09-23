import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Glitch from './Glitch'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ['Hello, I am Alexandru Dragos'],
    loop: 1,
    delaySpeed: 2000,
  })

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center pt-6 text-center sm:h-screen sm:w-screen sm:overflow-hidden sm:pt-0">
      <div className="absolute hidden h-screen min-h-screen w-screen items-center justify-center sm:flex sm:min-h-min">
        <BackgroundCircles />
      </div>

      <div className="flex h-screen min-h-screen w-screen flex-col items-center justify-center">
        {/* <h1 className=" mb-10 font-[courier] text-lg font-bold uppercase tracking-[6px] text-gray-400 opacity-60">
          Alexandru Dragos
        </h1> */}

        <img
          src="/static/Eu.jpeg"
          alt="The author"
          className="z-20 h-32 w-32 rounded-full object-cover hover:opacity-80 sm:h-64 sm:w-64"
        />
        <h1 className="px-10 text-xl font-semibold sm:text-2xl lg:text-4xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="white" />
        </h1>
        <h2 className="z-20 mt-8 uppercase tracking-[15px] ">
          <Glitch />
        </h2>

        <div className="z-20">
          <div className="">
            <div className="mb-8">
              <div className="mt-1 h-[2px] bg-gray-300/30"></div>
              <div className="xbg-[#33ff00]/30 mt-1 h-[2px] bg-gray-300/30"></div>
            </div>
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
