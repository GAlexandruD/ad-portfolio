import { SiGithub, SiLinkedin } from 'react-icons/si'
import { BiEnvelope } from 'react-icons/bi'
import { MdContactMail } from 'react-icons/md'
import { WindupChildren, Pace } from 'windups'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'
import ToggleTheme from './ToggleTheme'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 mx-auto hidden max-w-7xl items-center justify-between p-5 text-gray-500 sm:flex xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {/* Social icons */}

          {socials &&
            socials.map((social, idx) => (
              <SocialIcon
                key={idx}
                url={social.url}
                className=""
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
              />
            ))}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex cursor-pointer flex-row items-center"
        >
          <ToggleTheme />
          {/* <a href="#contact" className="flex flex-row items-center">
            <BiEnvelope className="ml-4 h-8 w-8 md:ml-6" />
            <p className="ml-2 hidden text-sm uppercase lg:inline-flex">
              Get in touch
            </p>
          </a> */}
        </motion.div>
      </header>

      {/* Mobile menu */}
      <header
        style={{ backgroundColor: `${open ? '#242424' : 'transparent'}` }}
        className="absolute right-4 top-0 z-50 flex flex-col items-center justify-center p-4 sm:hidden"
      >
        {open ? (
          <CgClose
            className="mb-1 h-6 w-6 cursor-pointer text-[#808080]"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <MdContactMail
            className="h-6 w-6 cursor-pointer text-[#535353]"
            onClick={() => setOpen(!open)}
          />
        )}
        {open && (
          <ul className="flex flex-col items-center">
            <li className="">
              <SocialIcon
                url="https://github.com/GAlexandruD"
                className=""
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
              />
              {/* <a
                href="https://github.com/GAlexandruD"
                target="_blank"
                className=""
              >
                <SiGithub className="h-6 w-6 cursor-pointer hover:text-green-800" />
              </a> */}
            </li>

            <li className="">
              <SocialIcon
                url="https://www.linkedin.com/in/dragos-alexandru"
                className=""
                target="_blank"
                fgColor="gray"
                bgColor="transparent"
              />
              {/* <a
                href="https://www.linkedin.com/in/dragos-ghiugan-96492938/"
                target="_blank"
                className=""
              >
                <SiLinkedin className="h-6 w-6 cursor-pointer hover:text-green-800" />
              </a> */}
            </li>
            <li className="">
              <a
                href="#contact"
                className="flex flex-row items-center justify-center hover:text-green-800"
              >
                <BiEnvelope className="h-7 w-7 text-[#808080]" />
              </a>
            </li>
            <li className="mt-4">
              <ToggleTheme />
            </li>
          </ul>
        )}
      </header>
    </>
  )
}

export default Header
