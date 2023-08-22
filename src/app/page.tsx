import Image from 'next/image'
import { performRequest } from '../../lib/datocms';

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
  const { data: { hero: { title, subcopy, ctaText, ctaLink, id } } } = await performRequest({ query: PAGE_CONTENT_QUERY });

  console.log({ title, subcopy, ctaText, ctaLink, id });

  return (
    <>
      <header className="w-full">
        <div className="max-w-6xl my-0 mx-auto px-4 sm:px-8 flex justify-between py-8">
          <div>The Brand Boost</div>
          <ul className='flex flex-row gap-6 uppercase'>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Sobre mi</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Agendar cita</a></li>
          </ul>
        </div>
      </header>
      <main className='max-w-6xl my-0 mx-auto px-4 sm:px-8'>

        <div className='py-40'>
          <h1 className='text-9xl'>{title}</h1>
          <p>{subcopy}</p>
          <a href={ctaLink}>{ctaText}</a>
        </div>
      </main>
    </>
  )
}
