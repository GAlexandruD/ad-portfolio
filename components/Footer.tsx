import Link from 'next/link'
import { RiArrowDownSLine } from 'react-icons/ri'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="sticky hidden h-0 w-full items-center justify-center text-4xl sm:bottom-5 sm:flex sm:text-5xl md:text-7xl">
      <Link href="#hero">
        <a>
          <RiArrowDownSLine className="rotate-180 text-center font-bold opacity-30" />
        </a>
      </Link>
    </footer>
  )
}

export default Footer
