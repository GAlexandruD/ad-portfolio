import ToggleTheme from './ToggleTheme'
import { FaHome } from 'react-icons/fa'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed -top-1 z-50 flex w-screen items-center justify-center bg-[#545721]/80 text-sm text-[#dbd3c6] sm:text-xl">
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
  )
}

export default Navbar
