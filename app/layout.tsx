import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { Alice, Open_Sans as OpenSans } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'

import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { DraftBanner } from '@/components/DraftBanner'

import { performRequest } from '@/lib/datocms'
import { navigationQuery } from './constants'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Brand Boost',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const alice = Alice({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alice',
})
const opensSans = OpenSans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export default async function RootLayout({ children }: RootLayoutProps) {
  const { isEnabled } = draftMode()

  const {
    data: { landingPage, _site },
  } = await performRequest({ query: navigationQuery, includeDrafts: isEnabled })

  const [navigation] = landingPage.navigation
  const [cta] = navigation.cta

  console.log({ navigation, _site })

  return (
    <html lang='en' className='overflow-x-clip'>
      <head>
        <link rel='icon' href={_site?.favicon?.url ?? '/favicon.svg'} />
      </head>
      <body
        className={`${alice.variable} ${opensSans.variable} font-sans relative overflow-x-clip`}>
        <DraftBanner isDraftModeEnabled={isEnabled}/>
        <NavBar links={navigation.links} logo={navigation.logo} cta={cta} />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
