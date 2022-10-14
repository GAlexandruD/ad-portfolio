import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import fetchAll from '../../lib/fetchAll'
import Logo from '../../components/Logo'
import { urlFor } from '../../lib/sanity'
import Image from 'next/image'
import { DbProjects, DbSkills } from '../../typings'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm' // Github Flavored Markdown
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import remarkToc from 'remark-toc'
import dynamic from 'next/dynamic'
import 'highlight.js/styles/github-dark.css'
import DisplayProjectDetails from '../../components/DisplayProjectDetails'

dynamic(() => import('highlight.js/styles/github.css')) // Does not work...

export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetchAll()
  return {
    props: {
      pageInfo: result.pageInfo, //Not needed
      projects: result.projects,
      skills: result.skills, //Not needed as we get the skills from the project
      socials: result.socials, //Not needed for now.
    }, // will be passed to the page component as props
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fetchAll()
  const paths = result.projects.map((project) => {
    return {
      params: {
        id: project._id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
type Props = {}

const ProjectDetails = (initialProps: any) => {
  const router = useRouter()
  const id = router.query.id
  const project = initialProps.projects.find(
    (project: DbProjects) => project._id === id
  )

  return (
    <>
      <DisplayProjectDetails id={id} project={project} />
    </>
  )
}

export default ProjectDetails
