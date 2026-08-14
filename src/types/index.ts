export type ProjectStatus = 'completed' | 'in-development'
export type FeatureStatus = 'completed' | 'in-development' | 'planned'

export interface ProjectFeature {
  name: string
  status: FeatureStatus
}

export interface ProjectChallenge {
  title: string
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface Project {
  title: string
  slug: string
  category: string
  shortDescription: string
  overview: string
  problem?: string
  solution?: string
  technologies: string[]
  features?: ProjectFeature[]
  challenges?: ProjectChallenge[]
  learnings?: string[]
  architecture?: string[]
  github?: string
  demo?: string
  image?: string
  gallery?: GalleryImage[]
  status?: ProjectStatus
  featured?: boolean
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Experience {
  role: string
  company?: string
  dates?: string
  summary: string
  responsibilities: string[]
  technologies: string[]
}

export interface Certification {
  name: string
  issuer?: string
  date?: string
  url?: string
}

export interface Education {
  institution: string
  degree: string
  dates?: string
  certifications?: Certification[]
}

export interface SocialLink {
  label: string
  href: string
  placeholder?: boolean
}
