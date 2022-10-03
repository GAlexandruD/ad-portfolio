import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center space-y-10 text-center sm:justify-evenly sm:px-10 md:flex-row md:text-left">
      <h3 className="mb-4 uppercase tracking-[20px] text-gray-500 sm:absolute sm:top-10 sm:mb-0 sm:text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/static/Eu2.jpg"
        alt="Author's picture"
        className="h-36 w-36 flex-shrink-0 rounded-full object-cover brightness-90 grayscale hover:grayscale-[40%] sm:-mb-20 sm:h-56 sm:w-56 md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[400px]"
      />
      <div className="mt-4 space-y-10 px-0 sm:mt-0 md:px-10">
        <h4 className="text-lg font-semibold sm:text-4xl">
          Here is a{' '}
          <span className="underline decoration-green-500/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          I am a developer with a passion for web applications.
        </p>
      </div>
    </div>
  )
}

export default About
