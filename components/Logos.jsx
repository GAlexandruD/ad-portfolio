import Logo from './Logo'
import { interpolate } from 'flubber'

const Logos = () => {
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
    <div className="flex flex-wrap content-center justify-center bg-slate-700">
      {logoPaths.map((item, index) => {
        return <Logo path={item.path} name={item.name} key={index} />
      })}
    </div>
  )
}

export default Logos
