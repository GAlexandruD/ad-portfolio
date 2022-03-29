import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { RiArrowDownSLine } from 'react-icons/ri'
import { WindupChildren, Pace } from 'windups'

const Project = () => {
  return (
    <>
      <div className="relative h-full w-screen bg-slate-400">
        <Image
          src="/static/projects/ad-portfolio.png"
          alt="Project picture"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative h-full w-screen bg-slate-400">
        <Image
          src="/static/projects/ad-portfolio.png"
          alt="Project picture"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  )
}

export default Project
