import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Header = () => {
  return (
    <div className="relative flex h-screen content-center justify-center">
      <Image
        src="/static/krivec-2.jpg"
        alt="Main picture"
        layout="fill"
        objectFit="cover"
      />

      <div className="relative self-center text-center text-3xl text-white">
        <h1>Hi, I am Alexandru Dragos</h1>
        <h1>React Developer</h1>
        <div className="flex justify-center p-1">
          <div className="p-2">
            <SiGithub />
          </div>
          <div className="p-2">
            <SiLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
