import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { RiArrowDownSLine } from 'react-icons/ri'
import { WindupChildren, Pace } from 'windups'

const Project = () => {
  return (
    <>
      <div className="relative grid content-center justify-center bg-slate-600 p-4">
        <Image
          src="/static/projects/ad-portfolio.png"
          alt="Project picture"
          width={1000}
          height={1000}
          objectFit="cover"
        />
      </div>

      <div className="relative grid content-center justify-center bg-slate-600 p-4">
        <Image
          src="/static/projects/ad-portfolio.png"
          alt="Project picture"
          width={1000}
          height={1000}
          objectFit="cover"
        />
      </div>
    </>
  )
}

export default Project
