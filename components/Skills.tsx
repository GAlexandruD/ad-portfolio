import Logo from './Logo'
import { motion } from 'framer-motion'
import { DbSkills } from '../typings'
import { urlFor } from '../lib/sanity'

type Props = {
  skills: DbSkills[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="mx-auto flex min-h-screen max-w-7xl flex-1 flex-col items-center justify-start overflow-hidden md:text-left"
    >
      <h3 className="mt-4 uppercase tracking-[13px] text-gray-500 sm:text-2xl sm:tracking-[20px]">
        Skills
      </h3>

      <div className="grid grid-cols-2 gap-5 pt-20 sm:grid-cols-3 md:grid-cols-4">
        {/* Get first half of skills and map */}
        {skills.slice(0, skills.length / 2).map((item, index) => {
          return (
            <Logo
              path={urlFor(item.image).url()}
              name={item.title}
              key={`1.${index}`}
              animate
              displayText
            />
          )
        })}

        {/* Get second half of skills and map with direction left */}
        {skills.slice(skills.length / 2, skills.length).map((item, index) => {
          return (
            <Logo
              path={urlFor(item.image).url()}
              name={item.title}
              key={`2.${index}`}
              directionLeft
              animate
              displayText
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default Skills
