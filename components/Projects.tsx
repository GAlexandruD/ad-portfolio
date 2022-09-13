import Project from './Project'

import { useEffect, useState } from 'react'

type Props = {}

const Projects = ({ projects }: any) => {
  // const projects = [
  //   {
  //     github: 'https://github.com/GAlexandruD/nft-challenge',
  //     name: 'nft-challenge',
  //     website: 'https://nft-challenge-six.vercel.app/',
  //     image: '/static/projects/PAPAFAM_NFT_MARKET_Place.png',
  //   },
  //   {
  //     github: 'https://github.com/GAlexandruD/react-3d-earth',
  //     name: 'react-3d-earth',
  //     website: 'https://react-3d-earth-indol.vercel.app/',
  //     image: '/static/projects/react-3d-earth.png',
  //   },
  //   {
  //     github: 'https://github.com/GAlexandruD/airbnb-clone',
  //     name: 'airbnb-clone',
  //     website: 'https://airbnb-clone-green-six.vercel.app/',
  //     image: '/static/projects/airbnb-clone.png',
  //   },

  //   {
  //     github: 'https://github.com/GAlexandruD/ad-portfolio',
  //     name: 'ad-portfolio',
  //     website: 'https://ad-portfolio.vercel.app/',
  //     image: '/static/projects/ad-portfolio.png',
  //   },

  //   {
  //     github: 'https://github.com/GAlexandruD/facerecognition',
  //     name: 'facerecognition',
  //     website: 'https://face-recognition-frt.herokuapp.com/',
  //     image: '/static/projects/facerecognition.png',
  //   },
  // ]

  useEffect(() => {
    console.log({ projects })
  }, [projects])

  return (
    <>
      <h1
        id="projects"
        className="mt-20 border-t-2 border-[#a08540] pt-20 pb-8 text-center text-3xl"
      >
        My projects
      </h1>

      <div className="container mx-auto grid grid-cols-1 content-center justify-center px-4 pt-8 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.data.map((project: any, index: any) => (
          <Project
            key={index}
            github={project.name}
            name={project.name}
            website={project.name}
          />
        ))}
      </div>
    </>
  )
}

export default Projects
