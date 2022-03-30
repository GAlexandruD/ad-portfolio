import Project from './Project'

type Props = {}

const Projects = (props: Props) => {
  const projects = [
    {
      github: 'https://github.com/GAlexandruD/react-3d-earth',
      name: 'react-3d-earth',
      website: '#',
      image: '/static/projects/react-3d-earth.png',
    },
    {
      github: 'https://github.com/GAlexandruD/airbnb-clone',
      name: 'airbnb-clone',
      website: 'http://airbnb-clone-green-six.vercel.app/',
      image: '/static/projects/airbnb-clone.png',
    },
  ]
  return (
    <>
      <h1 className="bg-slate-600 p-10 text-center text-3xl text-gray-300">
        My projects
      </h1>
      <div
        id="projects"
        className="grid grid-cols-1 content-center justify-center bg-slate-600 p-4 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
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
