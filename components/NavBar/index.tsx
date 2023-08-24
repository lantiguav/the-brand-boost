import { Wrapper } from '../Wrapper'
import { Link } from '../Link'
import { Burger } from './Burger'

import { ImageType, LinkType } from '@/types/common'
import Image from 'next/image'

type NavBarProps = {
  logo: ImageType
  links: LinkType[]
  cta: LinkType
}

export const NavBar = ({ logo, links, cta }: NavBarProps) => {
  return (
    <header className='w-full z-20'>
      <Wrapper className='flex justify-between py-2'>
        <div className='flex items-center'>
          <Link href='#'>
            <Image
              className='w-16'
              src={logo.url}
              width={logo.width}
              height={logo.height}
              alt={logo.alt ?? ''}
              title={logo.title}
            />
          </Link>
        </div>
        <Burger links={links} cta={cta} />
        <ul className='flex-row gap-6 uppercase hidden sm:flex'>
          {links.map((link) => (
            <li key={link.text} className='flex items-center'>
              <Link href={link.url} variant={'black'} className='uppercase'>
                {link.text}
              </Link>
            </li>
          ))}
          <li className='flex items-center'>
            <Link
              href={cta.url}
              variant='button-outlined'
              target='_blank'
              className='uppercase'>
              {cta.text}
            </Link>
          </li>
        </ul>
      </Wrapper>
    </header>
  )
}
