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
      <div className=" relative m-2 rounded-xl bg-slate-700/50 pt-12 pb-12 shadow-xl shadow-slate-500">
        <Image
          src={`${props.image}`}
          alt="Project picture"
          width={1000}
          height={1000}
          objectFit="cover"
        />
        <h1 className="absolute top-0 left-0 right-0 rounded-xl  pt-2 text-center text-2xl text-gray-200">
          {props.name}
        </h1>

        <div className="absolute bottom-0 left-0 mr-2 rounded-xl p-2">
          <a
            href={`${props.github}`}
            title="Source code on GitHub"
            target="_blank"
          >
            <SiGithub className="text-4xl text-white hover:animate-pulse hover:text-gray-200" />
          </a>
        </div>

        <div className="absolute bottom-0 right-0 ml-2 rounded-xl p-2">
          <a
            href={`${props.website}`}
            title="Project's website"
            target="_blank"
          >
            <FiLink className="text-4xl text-white hover:animate-pulse" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Project
