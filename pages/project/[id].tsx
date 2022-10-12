import { useRouter } from 'next/router'
import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fetchAll from '../../lib/fetchAll'
import Logo from '../../components/Logo'
import { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import { DbProjects, DbSkills } from '../../typings'

// const result = await fetchAll()

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetchAll()
  return {
    props: {
      pageInfo: result.pageInfo, //Not needed
      projects: result.projects,
      skills: result.skills, //Not needed as we get the skills from the project
      socials: result.socials, //Not needed for now.
    }, // will be passed to the page component as props
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetchAll()
  const paths = result.projects.map((project) => {
    return {
      params: {
        id: project._id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
type Props = {}

const ProjectDetails = (initialProps: any) => {
  console.log('The initialProps.projects are here: ', initialProps.projects)
  const router = useRouter()
  const id = router.query.id
  const project = initialProps.projects.find(
    (project: DbProjects) => project._id === id
  )

  return (
    <div className="flex flex-col items-center justify-center space-y-5 bg-[#242424]">
      <h1 className="py-4 text-center">
        Details for:{' '}
        <span className="text-lg font-bold text-green-500">
          {project.title}
        </span>
      </h1>
      <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
        <Image
          src={urlFor(project.image).url()}
          layout="responsive"
          objectFit="cover"
          width={5000}
          height={5000}
        />
      </div>

      <p>Summary: {project.summary}</p>

      <p>Description: {project.description}</p>
      <p>Skills used:</p>
      <div className="grid grid-cols-2 justify-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {project.technologies.map((skill: DbSkills, index: Number) => {
          return (
            <Logo
              path={urlFor(skill.image).url()}
              name={skill.title}
              key={`1.${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectDetails
