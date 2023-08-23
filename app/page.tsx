import { performRequest } from '../lib/datocms'
import { pageContentQuery } from './constants'

import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/ServicesSection'

export default async function Home() {
  const {
    data: { landingPage },
  } = await performRequest({ query: pageContentQuery })

  const [servicesSection] = landingPage.servicesSection
  const [hero] = landingPage.hero

  console.log({ hero, servicesSection, services: servicesSection.services })

  return (
    <>
      <Hero {...hero} />
      <ServicesSection {...servicesSection} />
    </>
  )
}
