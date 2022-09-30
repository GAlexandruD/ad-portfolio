import Image from 'next/image'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { BiEnvelope, BiEnvelopeOpen } from 'react-icons/bi'
import { CgMenu } from 'react-icons/cg'
import { RiArrowDownSLine } from 'react-icons/ri'
import { WindupChildren, Pace } from 'windups'
import { motion } from 'framer-motion'
import ToggleTheme from './ToggleTheme'

type Props = {}

const Header = (props: Props) => {
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
            <p className="ml-2 hidden text-sm uppercase md:inline-flex">
              Get in touch
            </p>
          </a>
        </motion.div>
      </header>

      <header className="sticky top-0 z-50 flex justify-end p-5 text-gray-500 sm:hidden">
        <CgMenu className="ml-4 h-6 w-6 cursor-pointer hover:text-green-800" />
      </header>
    </>
  )
}

export default Header
