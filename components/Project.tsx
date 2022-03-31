import Image from 'next/image'
import Logo from './Logo'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiExternalLink, FiLink } from 'react-icons/fi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { WindupChildren, Pace } from 'windups'

type Props = {
  github: string
  name: string
  website: string
  image: string
}

const Project = (props: Props) => {
  return (
    <>
      <div className=" relative m-2 rounded-xl bg-slate-700 p-4 shadow-xl shadow-slate-500">
        <Image
          src={`${props.image}`}
          alt="Project picture"
          width={1000}
          height={1000}
          objectFit="cover"
        />
        <h1 className="absolute top-0 left-0 rounded-xl bg-gray-500 p-2 text-2xl text-gray-200">
          {props.name}
        </h1>

        <div className="absolute bottom-0 left-0 rounded-xl bg-gray-400 p-2">
          <a
            href={`${props.github}`}
            title="Source code on GitHub"
            target="_blank"
          >
            <SiGithub className="text-5xl text-white hover:animate-pulse hover:text-gray-200" />
          </a>
        </div>

        <div className="absolute bottom-0 right-0 rounded-xl bg-gray-400 p-2">
          <a
            href={`${props.website}`}
            title="Project's website"
            target="_blank"
          >
            <FiLink className="text-5xl text-white hover:animate-pulse" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Project
