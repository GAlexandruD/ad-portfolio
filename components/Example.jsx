import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const Example = () => (
  <motion.ul
    className="m-0 grid h-36 w-36 list-none grid-cols-2 grid-rows-2 gap-4 overflow-hidden rounded-md bg-gray-600 p-4"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3].map((index) => (
      <motion.li
        key={index}
        className="rounded-full border bg-white"
        variants={item}
      />
    ))}
  </motion.ul>
)
