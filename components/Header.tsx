import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { WindupChildren, Pace } from 'windups'

const Header = () => {
  return (
    <div className="relative flex h-screen content-center justify-center">
      <Image
        src="/static/krivec-2.jpg"
        alt="Main picture"
        layout="fill"
        objectFit="cover"
      />

      <div className="relative mb-11 self-center text-center text-3xl text-white">
        <WindupChildren>
          <Pace ms={50}>
            <h1 className="mb-10">Hi, I am Alexandru Dragos</h1>
            <h1 className="pb-10">React Developer</h1>
          </Pace>

          <div className="flex justify-center p-1">
            <Pace ms={400}>
              <div className="p-2 hover:cursor-pointer">
                <SiGithub />
              </div>
              <div className="p-2 hover:cursor-pointer">
                <SiLinkedin />
              </div>
            </Pace>
          </div>
        </WindupChildren>
      </div>
    </div>
  )
}

export default Header
