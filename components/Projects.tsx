import Project from './Project'
import projects from '../lib/projects.json'
import { motion } from 'framer-motion'

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
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.img
              initial={{
                y: -300,
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
              src="https://t4.ftcdn.net/jpg/04/57/21/45/360_F_457214567_jM8KoqnzUJPmibc6ZT151pzlGLvrgfjT.jpg"
              alt=""
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="">
                  Showing {idx + 1} of {projects.length}:
                </span>{' '}
                <span className="underline decoration-green-600/50">
                  {project.name}
                </span>
              </h4>

              <p className="text-center text-lg md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                a dolorum consectetur suscipit, architecto aut natus error
                fugiat fuga incidunt praesentium obcaecati molestiae sequi
                tenetur aspernatur non exercitationem quod possimus!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-green-500/10"></div>
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
