interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  name: string
  heroImage: Image
  aboutInfo: string
  aboutPicture: Image
  phoneNumber: string
  email: string
  address: string
  socials: Social[]
}

export interface Technology extends SanityBody {
  _type: 'skills'
  image: Image
  progress: number
  title: string
}

export interface DbProjects extends SanityBody {
  _type: 'projects'
  title: string
  image: Image
  animatedImage: Image
  summary: text
  description: text
  githubUrl: string
  updated_at: string
  liveUrl: string
  technologies: Technology[]
}

export interface Social extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

export interface DbSkills extends SanityBody {
  _type: 'skills'
  title: string
  progress: string
  image: Image
}
