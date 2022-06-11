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
      <div className="relative m-2 rounded-xl bg-slate-700/50 pt-12 pb-12 shadow-xl shadow-slate-500 sm:transition-all sm:duration-300 sm:hover:scale-105">
        <Image
          src={`${props.image}`}
          alt="Project picture"
          width={1000}
          height={1000}
          objectFit="cover"
        />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-white">{props.name}</h3>
          <p className="mt-1 text-gray-400">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </>
  )
}

export default Project
