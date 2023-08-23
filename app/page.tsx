import Image from 'next/image'
import { performRequest } from '../lib/datocms';

import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

const PAGE_CONTENT_QUERY = `
query MyQuery {
  hero {
    ctaText
    ctaLink
    id
    subcopy
    title
  }
}`;


export default async function Home() {
  const { data: { hero } } = await performRequest({ query: PAGE_CONTENT_QUERY });

  console.log({ hero });

  return (
    <>
      <NavBar />
      <main className=''>
        <Hero {...hero} />
      </main>
      <Footer/>
    </>
  )
}
