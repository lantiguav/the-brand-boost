export type ImageType = {
  id: string
  url: string
  alt?: string
  title?: string
  width: number
  height: number
}

export type ServiceType = {
  id: string
  name: string
  description: string
  icon: ImageType
}

export type NavigationLinkType = {
  text: string
  href: string
  isCta?: boolean
}

export type SectionType = {
  htmlId: string
  title: string
  image?: ImageType
  content: string
}