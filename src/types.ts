export type projectStatus = 'soon' | 'progress' | 'finished'

export interface Items {
  name: string
  imgSrc: string
}
export interface Platform extends Items {
  link: string
}
export interface Project {
  name: string
  finished: projectStatus
  description: string
  technologies: Items[]
  platforms: Platform[]
}
