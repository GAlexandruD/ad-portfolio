import Project from './Project'
// import projects from '../lib/projects.json'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import Laptop from './Laptop'
import Link from 'next/link'
import { DbProjects } from '../typings'

import { urlFor } from '../lib/sanity'

type Props = {
  projects: DbProjects[]
  setModal: (modal: boolean) => void
}

const Projects = ({ projects, setModal }: Props) => {
  // console.log(projects)
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
      className="mx-auto flex h-screen min-h-fit max-w-full flex-col items-center justify-evenly text-left"
    >
      <h3 className="mt-4 uppercase tracking-[20px] text-gray-500 sm:text-2xl">
        Projects
      </h3>

      <div className="relative flex h-screen w-full snap-x snap-mandatory items-center overflow-x-auto overflow-y-hidden">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className=""
        >
          {projects &&
            projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex h-screen w-screen snap-center flex-col items-center justify-center overflow-hidden sm:px-20 xl:space-y-10">
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
                    <Link
                      href={`/?id=${project._id}`}
                      as={`/project/${project._id}`}
                    >
                      <a
                        onClick={() => {
                          setModal(true)
                        }}
                      >
                        <Laptop
                          laptopDisplay={urlFor(project.animatedImage).url()}
                        />
                      </a>
                    </Link>
                    <p className="text-center">
                      Updated: {project.updated_at.split('T')[0]}
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
                      <Link
                        href={`/?id=${project._id}`}
                        as={`/project/${project._id}`}
                      >
                        <a
                          onClick={() => {
                            setModal(true)
                          }}
                          className="underline decoration-green-600 hover:animate-pulse"
                        >
                          {project.title}
                        </a>
                      </Link>
                    </h4>

                    <p className="text-center sm:text-lg">
                      {project.summary} <br />
                      <Link
                        href={`/?id=${project._id}`}
                        as={`/project/${project._id}`}
                      >
                        <a
                          onClick={() => {
                            setModal(true)
                          }}
                          className="text-green-600 hover:animate-pulse"
                        >
                          Read more...
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="absolute top-[25%] left-0 h-[50vh] w-full -skew-y-12 bg-green-500/10"></div>
      </div>
    </motion.div>
  )
}

export default Projects
