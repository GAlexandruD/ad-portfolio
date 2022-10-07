import { SiGithub, SiLinkedin } from 'react-icons/si'
import { BiEnvelope } from 'react-icons/bi'
import { MdContactMail } from 'react-icons/md'
import { WindupChildren, Pace } from 'windups'
import { AiOutlineClose } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'
import ToggleTheme from './ToggleTheme'
import { useState } from 'react'

type Props = {}

const Header = (props: Props) => {
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

          <a href="https://github.com/GAlexandruD" target="_blank" className="">
            <SiGithub className="h-6 w-6 cursor-pointer hover:text-green-800" />
          </a>

          <a
            href="https://www.linkedin.com/in/dragos-ghiugan-96492938/"
            target="_blank"
            className=""
          >
            <SiLinkedin className="ml-4 h-6 w-6 cursor-pointer hover:text-green-800" />
          </a>
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
          <a
            href="#contact"
            className="flex flex-row items-center hover:text-green-800"
          >
            <BiEnvelope className="ml-2 h-8 w-8" />
            <p className="ml-2 hidden text-sm uppercase lg:inline-flex">
              Get in touch
            </p>
          </a>
        </motion.div>
      </header>

      {/* Mobile menu */}
      <header
        style={{ backgroundColor: `${open ? '#242424' : 'transparent'}` }}
        className="absolute top-0 right-4 z-50 flex flex-col items-center justify-center p-4 text-gray-500 sm:hidden"
      >
        {open ? (
          <CgClose
            className="h-6 w-6 cursor-pointer hover:text-green-800"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <MdContactMail
            className="h-6 w-6 cursor-pointer hover:text-green-800"
            onClick={() => setOpen(!open)}
          />
        )}
        {open && (
          <ul className="flex flex-col items-center">
            <li className="mt-4">
              <a
                href="https://github.com/GAlexandruD"
                target="_blank"
                className=""
              >
                <SiGithub className="h-6 w-6 cursor-pointer hover:text-green-800" />
              </a>
            </li>

            <li className="mt-4">
              <a
                href="https://www.linkedin.com/in/dragos-ghiugan-96492938/"
                target="_blank"
                className=""
              >
                <SiLinkedin className="h-6 w-6 cursor-pointer hover:text-green-800" />
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#contact"
                className="flex flex-row items-center justify-center hover:text-green-800"
              >
                <BiEnvelope className="h-7 w-7" />
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
