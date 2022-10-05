import Project from './Project'
import projects from '../lib/projects.json'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import Laptop from './Laptop'
import Link from 'next/link'

type Props = {}

const Projects = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="top-24 mt-4 uppercase tracking-[20px] text-gray-500 sm:absolute sm:top-10 sm:text-2xl">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory items-center overflow-x-auto overflow-y-hidden">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className=""
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex h-screen w-screen snap-center flex-col items-center justify-center overflow-hidden sm:space-y-10 sm:p-20">
                <motion.div
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className=""
                >
                  <Link href={'#'}>
                    <a>
                      <Laptop laptopDisplay="/static/projects/airbnb-clone.png" />
                    </a>
                  </Link>
                  <p className="text-center">
                    Updated:{` ${project.pushed_at.split('T')[0]}`}
                  </p>
                </motion.div>

                <div className="max-w-6xl space-y-2 sm:space-y-10">
                  <h4 className="text-center font-semibold sm:text-4xl">
                    <span className="sm:hidden">
                      {idx + 1} of {projects.length}:
                    </span>
                    <span className="hidden sm:block">
                      Showing {idx + 1} of {projects.length}:
                    </span>{' '}
                    <br className="sm:hidden" />
                    <Link href={'#'}>
                      <a className="underline decoration-green-600 hover:animate-pulse">
                        {project.name}
                      </a>
                    </Link>
                  </h4>

                  <p className="text-center sm:text-lg">
                    Really small description about the project. <br />
                    <Link href={'#'}>
                      <a className="text-green-600 hover:animate-pulse">
                        Read more...
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-[25%] left-0 h-[500px] w-full -skew-y-12 bg-green-600/10"></div>
    </motion.div>

    // <div className="flex flex-col items-center justify-center">
    //   <h1
    //     id="projects"
    //     className="mt-20 w-full border-t-2 border-[#a08540] pt-20 pb-8 text-center text-3xl"
    //   >
    //     My projects
    //   </h1>

    //   <div className="container mx-auto grid grid-cols-1 content-center justify-center px-4 pt-8 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //     {filter === 'toShow' ? (
    //       filteredArray(filter).map((project, index) => (
    //         <Project
    //           key={index}
    //           github={project.html_url}
    //           name={project.name}
    //           homepage={project.homepage}
    //           modified={project.pushed_at}
    //         />
    //       ))
    //     ) : (
    //       <div>Hello there!</div>
    //     )}
    //   </div>
    // </div>
  )
}

export default Projects
