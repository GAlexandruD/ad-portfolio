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
import { TiArrowBack } from 'react-icons/ti'
import { useState } from 'react'
import { useTheme } from 'next-themes'

type Props = {
  // id: string
  project: DbProjects
}

const DisplayImage = ({ image }: any) => {
  return (
    <Image
      src={urlFor(image).url() || ''}
      layout="responsive"
      objectFit="cover"
      width={640}
      height={400}
      priority
    />
  )
}

const DisplayProjectDetails = ({ project }: Props) => {
  const [isShown, setIsShown] = useState(false)
  // const { theme, setTheme } = useTheme() TODO: Could make previews to change according to theme.

  return (
    <div className="z-50 mx-auto flex max-w-[1120px] flex-col items-center justify-center space-y-5 bg-gray-200 dark:bg-[#242424]">
      <div className="my-8">
        <Link href="/#projects">
          <a className="flex items-center justify-center text-3xl text-gray-400">
            <TiArrowBack className="mr-2 h-10 w-10" />
            <span className="">Back to Projects</span>
          </a>
        </Link>
      </div>
      <h4 className="py-4 text-center tracking-widest">
        Details for:{' '}
        <span className="text-lg font-bold text-green-600 dark:text-green-500">
          {project.title}
        </span>
      </h4>
      <div className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
        <div
          className="relative cursor-pointer border-4 border-gray-600 transition-all"
          onClick={() => setIsShown(!isShown)}
          // onMouseEnter={() => setIsShown(true)}
          // onMouseLeave={() => setIsShown(false)}
        >
          {isShown ? (
            <DisplayImage image={project.animatedImage} />
          ) : (
            <>
              <div className="absolute top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/20">
                <p className="bg-[#242424] p-8 text-center text-3xl text-gray-200">
                  Click to play
                </p>
              </div>
              <DisplayImage image={project.image} />
            </>
          )}
        </div>
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

      <div className="max-w-full p-2 sm:p-4">
        <p className="w-full pb-2 pt-2 text-left tracking-widest text-green-600 dark:text-green-500">
          Summary:
        </p>
        <p className="w-full pl-2 pb-2">{project.summary}</p>
        <p className="w-full pt-8 pb-2 text-left tracking-widest text-green-600 dark:text-green-500">
          Description:
        </p>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]} //for html
          remarkPlugins={[remarkGfm, remarkToc]} //for markdown
          className="markdown prose prose-slate max-w-none dark:prose-invert lg:prose-lg"
        >
          {project.description}
        </ReactMarkdown>

        <p className='dark:text-green-500" pt-8 tracking-widest text-green-600'>
          Skills used:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
      <div className="py-8">
        <Link href="/#projects">
          <a className="flex items-center justify-center text-3xl text-gray-400">
            <TiArrowBack className="mr-2 h-10 w-10" />
            <span className="">Back to Projects</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default DisplayProjectDetails
