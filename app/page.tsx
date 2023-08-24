import { draftMode } from 'next/headers'

import { Section } from '@/components/Section'
import { performRequest } from '../lib/datocms'
import { pageContentQuery } from './constants'

import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/ServicesSection'
import { SectionType } from '@/types/common'

export default async function Home() {
  const { isEnabled } = draftMode()

  const {
    data: { landingPage },
  } = await performRequest({ query: pageContentQuery, includeDrafts: isEnabled })

  const { sections } = landingPage
  const [servicesSection] = landingPage.servicesSection
  const [hero] = landingPage.hero

  console.log({
    hero,
    servicesSection,
    services: servicesSection.services,
    sections,
  })

  return (
    <>
      <Hero {...hero} />
      <ServicesSection {...servicesSection} />
      {sections.map((section: SectionType, i: number) => (
        <Section key={section.htmlId} {... section} reverseLayout={i % 2 === 1}/>
      ))}
    </>
  )
}
