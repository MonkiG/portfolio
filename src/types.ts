export enum ProjectStatus {
  Developing = 'developing',
  Maintenance = 'maintenance',
  Hold = 'hold'
}

export interface Items {
  name: string
  imgSrc: string
}
export interface Platform extends Items {
  link: string
}
export interface Project {
  name: string
  status: ProjectStatus[]
  description: string
  technologies: Items[]
  platforms: Platform[]
}
