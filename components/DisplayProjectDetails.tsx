import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import { urlFor } from '../lib/sanity'
import { DbProjects } from '../typings'
import Logo from './Logo'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

type Props = {
  // id: string
  project: DbProjects
}

const DisplayProjectDetails = ({ project }: Props) => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-5 bg-gray-200/80 dark:bg-[#242424]/90">
      <h4 className="py-4 text-center tracking-widest">
        Details for:{' '}
        <span className="text-lg font-bold text-green-600 dark:text-green-500">
          {project.title}
        </span>
      </h4>
      <div className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
        <Image
          src={urlFor(project.image).url()}
          layout="responsive"
          objectFit="cover"
          width={5000}
          height={5000}
        />
        <div className="flex flex-col space-y-4 pt-4 text-center">
          <p className="text-gray-500">
            Updated: {project.updated_at.split('T')[0]}
          </p>
          {project.githubUrl && (
            <div className="flex items-center justify-center space-x-2">
              <SiGithub className="h-0 sm:h-6 sm:w-6" />
              <a href={project.githubUrl} target="_blank">
                {project.githubUrl}
              </a>
            </div>
          )}
          {project.liveUrl && (
            <div className="flex items-center justify-center space-x-2">
              <FiExternalLink className="h-0 sm:h-6 sm:w-6" />
              <a href={project.liveUrl} target="_blank">
                {project.liveUrl}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-full">
        <p className="w-full pb-2 pt-2 text-left tracking-widest text-green-600 dark:text-green-500">
          Summary:
        </p>
        <p className="w-full pl-2 pb-2">{project.summary}</p>
        <p className="w-full pt-2 pb-2 text-left tracking-widest text-green-600 dark:text-green-500">
          Description:
        </p>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm, remarkToc]}
          className="markdown xmax-w-[290px] p-2"
        >
          {project.description}
        </ReactMarkdown>
      </div>

      <p>Skills used:</p>
      <div className="grid grid-cols-2 justify-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {project.technologies.map((skill, index: Number) => {
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

export default DisplayProjectDetails
