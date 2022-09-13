import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { RiArrowDownSLine } from 'react-icons/ri'
import { WindupChildren, Pace } from 'windups'

const Header = () => {
  return (
    <div className="relative flex h-screen content-center justify-center">
      <Image
        src="/static/krivec-2.jpg"
        alt="Main picture"
        layout="fill"
        objectFit="cover"
        className="dark:brightness-75"
      />

      <div className="absolute mb-11 self-center text-center text-3xl text-white dark:text-[#dbd3c6]">
        <WindupChildren>
          <Pace ms={50}>
            <h1 className="mb-10">Hi, I am Alexandru Dragos</h1>
            <h1 className="pb-10">React Developer</h1>
          </Pace>

          <div className="flex justify-center p-1">
            <Pace ms={400}>
              <a
                href="https://github.com/GAlexandruD"
                target="_blank"
                className="p-2"
              >
                <SiGithub />
              </a>
              <div className="p-2 hover:cursor-pointer">
                <SiLinkedin />
              </div>
            </Pace>
          </div>
        </WindupChildren>
      </div>

      <div
        id="scroll-down"
        className="absolute bottom-20 animate-pulse text-5xl text-white dark:text-[#dbd3c6] sm:text-7xl md:text-9xl"
      >
        <a className="scroll-smooth" title="Scroll down" href="#tech">
          <RiArrowDownSLine className="font-bold" />
        </a>
      </div>
    </div>
  )
}

export default Header
