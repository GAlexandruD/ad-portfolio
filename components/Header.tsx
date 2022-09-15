import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { RiArrowDownSLine } from 'react-icons/ri'
import { WindupChildren, Pace } from 'windups'
import { useEffect, useState } from 'react'

const Header = () => {
  const [shadow, setShadow] = useState({
    first: false,
    second: false,
    third: false,
  })

  return (
    <div className="relative flex h-screen content-center justify-center">
      <Image
        src="/static/krivec-2.jpg"
        alt="Main picture"
        layout="fill"
        objectFit="cover"
        className="dark:brightness-90"
      />

      <div className="absolute mb-11 self-center text-center text-3xl text-white">
        <div className="w-screen">
          <WindupChildren
            onFinished={() => setShadow({ ...shadow, first: true })}
          >
            <Pace ms={50}>
              <h1 className="relative z-10 mb-10 w-full">
                Hi, I am Alexandru Dragos
              </h1>
            </Pace>
          </WindupChildren>
          <span
            className={`${
              shadow.first
                ? 'absolute -left-[2px] -top-[2px] mb-10 w-full text-black/70'
                : 'hidden'
            } transition-all delay-150 duration-1000`}
          >
            Hi, I am Alexandru Dragos
          </span>
        </div>
        <h1 className="pb-10">React Developer</h1>

        <div className="flex justify-center p-1">
          <Pace ms={400}>
            <a
              href="https://github.com/GAlexandruD"
              target="_blank"
              className="p-2"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dragos-ghiugan-96492938/"
              target="_blank"
              className="p-2"
            >
              <SiLinkedin />
            </a>
          </Pace>
        </div>
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
