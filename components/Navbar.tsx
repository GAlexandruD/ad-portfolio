import ToggleTheme from './ToggleTheme'
import { FaHome } from 'react-icons/fa'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="fixed -top-1 z-50 flex w-screen justify-center">
      <nav className="flex items-center justify-center rounded-full bg-[#a08540]/80 px-4 text-sm text-amber-50 dark:bg-[#292210]/90 dark:text-amber-100 sm:text-xl">
        <a href="#home" className="float-left p-2 text-center sm:p-4 ">
          <FaHome />
        </a>
        <a href="#tech" className="float-left p-2 text-center sm:p-4 ">
          Tech
        </a>
        <a href="#projects" className="float-left p-2 text-center sm:p-4 ">
          Projects
        </a>
        <a href="#contact" className="float-left p-2 text-center sm:p-4 ">
          Contact
        </a>
        <ToggleTheme />
      </nav>
    </div>
  )
}

export default Navbar
