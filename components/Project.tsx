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
}

const Project = (props: Props) => {
  console.log('props in Project are: ', props)
  return (
    <>
      <div className="m-4 flex flex-col rounded-xl bg-black/20 pt-2 pb-2 shadow-md shadow-black/60 dark:bg-black/40 sm:transition-all sm:duration-300 sm:hover:scale-105">
        <Image
          src={`/static/projects/work-svgrepo-com.svg`}
          alt="Project picture"
          width={400}
          height={400}
          objectFit="contain"
        />

        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold">{props.name}</h3>
          <p className="xdark:text-gray-400 mt-1">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="mt-5 text-xs text-gray-600 dark:text-gray-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </>
  )
}

export default Project
