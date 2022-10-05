import { RiArrowDownSLine } from 'react-icons/ri'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-0 flex justify-center text-4xl sm:bottom-5 sm:text-5xl md:text-7xl">
      <RiArrowDownSLine className="xanimate-pulse rotate-180 text-center font-bold opacity-30" />
    </footer>
  )
}

export default Footer
