import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../lib/sanity'

type Props = {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
  return (
    <div className="mx-auto flex h-screen max-w-7xl flex-col items-center space-y-10 overflow-hidden px-2 text-center sm:px-10">
      <h3 className="mt-4 uppercase tracking-[20px] text-gray-500 sm:text-2xl">
        About
      </h3>
      <div className="flex flex-1 flex-col items-center justify-center md:flex-row md:text-left">
        <motion.img
          className="h-36 w-36 rounded-full object-cover brightness-90  hover:grayscale-[40%] dark:grayscale-[50%] dark:hover:brightness-75  sm:h-56 sm:w-56 md:h-96 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[400px]"
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
          src={urlFor(pageInfo.aboutPicture).url()}
          alt="Author's picture"
        />
        <div className="mt-4 flex flex-col space-y-10 px-0 sm:mt-0 md:px-10">
          <h4 className="text-lg font-semibold sm:text-4xl">
            Here is a{' '}
            <span className="underline decoration-green-600">little</span>{' '}
            background
          </h4>
          <p className="text-base">{pageInfo.aboutInfo}</p>
        </div>
      </div>
    </div>
  )
}

export default About
