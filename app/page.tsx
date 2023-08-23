import Image from 'next/image'
import { performRequest } from '../lib/datocms'

import { Hero } from '@/components/Hero'

const PAGE_CONTENT_QUERY = `
query MyQuery {
  hero {
    ctaText
    ctaLink
    id
    subcopy
    title
    image {
      id
      url
      alt
    }
  }
}`

export default async function Home() {
  const {
    data: { hero },
  } = await performRequest({ query: PAGE_CONTENT_QUERY })

  console.log({ hero })

  return (
    <>
      <Hero {...hero} />
    </>
  )
}
