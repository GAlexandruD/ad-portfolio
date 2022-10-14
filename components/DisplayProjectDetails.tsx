import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'
import { urlFor } from '../lib/sanity'
import { DbProjects } from '../typings'
import Logo from './Logo'

type Props = {
  id?: String
  project: DbProjects
}

const DisplayProjectDetails = ({ id, project }: Props) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center space-y-5 bg-black/80 dark:bg-[#242424]/90">
      <h4 className="py-4 text-center tracking-widest">
        Details for:{' '}
        <span className="text-lg font-bold text-green-500">
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
      </div>

      <div className="max-w-xs sm:max-w-sm ">
        <p className="w-full pb-2 pt-2 text-left tracking-widest text-green-500">
          Summary:
        </p>
        <p className="w-full pl-2 pb-2">{project.summary}</p>
        <p className="w-full pt-2 pb-2 text-left tracking-widest text-green-500">
          Description:
        </p>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm, remarkToc]}
          className="markdown xmax-w-[290px]"
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
