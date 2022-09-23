import Logo from './Logo'
import { motion } from 'framer-motion'

type Props = {}

const Skills = () => {
  {
    //TypeScript
    //React Native
    //MongoDB
    //GraphQL
    //SASS
  }

  const logoPaths = [
    { path: '/static/logos/react-logo.svg', name: 'React' },
    { path: '/static/logos/Tailwind_CSS_Logo.svg', name: 'Tailwind CSS' },
    { path: '/static/logos/next-black-logo.svg', name: 'NextJS' },
    { path: '/static/logos/Firebase_Logo.svg', name: 'Firebase' },
    { path: '/static/logos/postgresql-logo.svg', name: 'PostgreSQL' },
    { path: '/static/logos/javascript-logo.svg', name: 'JavaScript' },
    { path: '/static/logos/github-logo.svg', name: 'GitHub' },
    { path: '/static/logos/airtable-logo.svg', name: 'Airtable' },
    { path: '/static/logos/HTML5_badge.svg', name: 'HTML' },
    { path: '/static/logos/css_badge.svg', name: 'CSS' },
    { path: '/static/logos/git-logo.svg', name: 'Git' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="xl-space-y-0 relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:px-10"
    >
      <h3 className="uppercase tracking-[13px] text-gray-500 sm:absolute sm:top-24 sm:text-2xl sm:tracking-[20px]">
        Skills
      </h3>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {/* Get first half of skills and map */}
        {logoPaths.slice(0, logoPaths.length / 2).map((item, index) => {
          return <Logo path={item.path} name={item.name} key={`1.${index}`} />
        })}

        {/* Get second half of skills and map with direction left */}
        {logoPaths
          .slice(logoPaths.length / 2, logoPaths.length)
          .map((item, index) => {
            return (
              <Logo
                path={item.path}
                name={item.name}
                key={`2.${index}`}
                directionLeft
              />
            )
          })}
      </div>
    </motion.div>
  )
}

export default Skills
