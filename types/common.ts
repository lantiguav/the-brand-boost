export type ImageType = {
  id: string
  url: string
  alt?: string
  title?: string
  width: number,
  height: number,
}

export type ServiceType = {
  id: string,
  name: string,
  description: string,
  icon: ImageType
}