import { DbSkills } from '../typings'
import { groq } from 'next-sanity'
import { sanityClient } from './sanity'

const query = groq`
*[_type == "skills"]
`

export const fetchSkills = async () => {
  const skills: DbSkills[] = await sanityClient.fetch(query)

  return skills
}
