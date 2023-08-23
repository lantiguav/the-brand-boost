import { Wrapper } from '../Wrapper'
import { Link } from '../Link'
import { Burger } from './Burger'

import { NavigationLinkType } from '@/types/common'

const links: NavigationLinkType[] = [
  {
    text: 'Servicios',
    href: '#servicios',
  },
  {
    text: 'Nosotros',
    href: '#nosotros',
  },
  {
    text: 'Contacto',
    href: '#contacto',
  },
  {
    text: 'Agendar cita',
    href: 'https://thebrandboost.simplybook.me/v2/',
    isCta: true,
  },
]

export const NavBar = () => {
  return (
    <header className='w-full z-20'>
      <Wrapper className='flex justify-between py-2'>
        <div className='flex items-center'>The Brand Boost</div>
        <Burger links={links} />
        <ul className='flex-row gap-6 uppercase hidden sm:flex'>
          {links.map((link) => (
            <li key={link.text} className='flex items-center'>
              <Link
                href={link.href}
                variant={link.isCta ? 'button-outlined' : 'black'}
                target={link.isCta ? '_blank' : '_self'}
                className='uppercase'>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </header>
  )
}
