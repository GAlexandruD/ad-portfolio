import { DbProjects } from '../typings'
import { groq } from 'next-sanity'
import { sanityClient } from './sanity'

const query = groq`
*[_type == "projects"] {
    ...,
    technologies[]->
}
`

export const fetchProjects = async () => {
  const projects: DbProjects[] = await sanityClient.fetch(query)

  return projects
}
