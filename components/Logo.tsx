import Image from 'next/image'
import { motion } from 'framer-motion'
import { type } from 'os'

type Props = { path: string; name: string; directionLeft?: boolean }

const Logo = (props: Props) => {
  return (
    <div className="mr-4 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{
          y: props.directionLeft ? -30 : 30,
          rotate: -180,
        }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }}
        className="relative mb-2 h-16 w-16 transition delay-150 duration-150 ease-in-out sm:h-24 sm:w-24 sm:hover:scale-110"
      >
        <Image
          src={props.path}
          alt={`${props.name} Logo`}
          layout="fill"
          objectFit="scale-down"
        />
      </motion.div>
      <p className="cursor-default text-center text-xl hover:text-[#545721] dark:hover:text-yellow-100">
        {props.name}
      </p>
    </div>
  )
}

export default Logo
