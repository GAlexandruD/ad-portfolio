import Image from 'next/image'
import Logo from './Logo'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
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
      <div className=" relative m-4 grid content-center justify-center bg-slate-600 p-4">
        <Image
          src={`${props.image}`}
          alt="Project picture"
          width={1000}
          height={1000}
          objectFit="cover"
        />
        <div className="absolute top-0 right-0 rounded-full bg-gray-100 text-xl text-slate-700 ">
          <h1 className="p-2 font-bold">{props.name}</h1>
        </div>
        <div className="absolute left-0 top-0 flex rounded-full bg-gray-600">
          <a
            href={`${props.github}`}
            title="Source code on GitHub"
            target="_blank"
          >
            <SiGithub className="text-5xl text-white hover:animate-pulse hover:text-gray-200" />
          </a>
        </div>

        <div className="absolute bottom-0 right-0 flex rounded-lg bg-slate-700">
          <a href={`${props.website}`} target="_blank">
            <FiExternalLink className="text-5xl text-white hover:animate-pulse" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Project
