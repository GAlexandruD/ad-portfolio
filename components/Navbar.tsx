type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="fixed -top-1 z-50 flex w-screen justify-center bg-slate-700/90 text-xl text-gray-200">
      <a href="#home" className="float-left p-4 text-center ">
        Home
      </a>
      <a href="#tech" className="float-left p-4 text-center ">
        Tech
      </a>
      <a href="#projects" className="float-left p-4 text-center ">
        Projects
      </a>
      <a href="#contact" className="float-left p-4 text-center ">
        Contact
      </a>
    </nav>
  )
}

export default Navbar
