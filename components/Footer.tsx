import { RiArrowDownSLine } from 'react-icons/ri'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div
      id="go-top"
      className="relative flex justify-center bg-slate-600 text-5xl text-white sm:text-7xl md:text-9xl"
    >
      <a className="scroll-smooth" title="Back to Top" href="#home">
        <RiArrowDownSLine className="rotate-180 animate-pulse text-center font-bold" />
      </a>
    </div>
  )
}

export default Footer
