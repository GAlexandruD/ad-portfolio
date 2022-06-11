import Project from './ProjectNew'

type Props = {}

const Projects = (props: Props) => {
  const projects = [
    {
      github: 'https://github.com/GAlexandruD/nft-challenge',
      name: 'nft-challenge',
      website: 'https://nft-challenge-six.vercel.app/',
      image: '/static/projects/PAPAFAM_NFT_MARKET_Place.png',
    },
    {
      github: 'https://github.com/GAlexandruD/react-3d-earth',
      name: 'react-3d-earth',
      website: 'https://react-3d-earth-indol.vercel.app/',
      image: '/static/projects/react-3d-earth.png',
    },
    {
      github: 'https://github.com/GAlexandruD/airbnb-clone',
      name: 'airbnb-clone',
      website: 'https://airbnb-clone-green-six.vercel.app/',
      image: '/static/projects/airbnb-clone.png',
    },

    {
      github: 'https://github.com/GAlexandruD/ad-portfolio',
      name: 'ad-portfolio',
      website: 'https://ad-portfolio.vercel.app/',
      image: '/static/projects/ad-portfolio.png',
    },

    {
      github: 'https://github.com/GAlexandruD/facerecognition',
      name: 'facerecognition',
      website: 'https://face-recognition-frt.herokuapp.com/',
      image: '/static/projects/facerecognition.png',
    },
  ]
  return (
    <>
      <h1
        id="projects"
        className="bg-slate-600 pt-14 pb-8 text-center text-3xl text-gray-300"
      >
        My projects
      </h1>
      <hr className="" />
      <div className="grid grid-cols-1 content-center justify-center bg-slate-600 px-4 pt-8 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            github={project.github}
            name={project.name}
            website={project.website}
            image={project.image}
          />
        ))}
      </div>
    </>
  )
}

export default Projects
