'use client'

import { useState, useEffect } from 'react'
import { LinkType, NavigationLinkType } from '@/types/common'
import { Link } from '../Link'

type BurgerProps = {
  links: LinkType[]
  cta: LinkType
}

export const Burger = ({ links, cta }: BurgerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document
        .querySelector('body')
        ?.classList.add('h-screen', 'overflow-y-clip', 'sm:overflow-y-visible')
      return
    }

    document
      .querySelector('body')
      ?.classList.remove('h-screen', 'overflow-y-clip', 'sm:overflow-y-visible')
  }, [isOpen])

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className='flex sm:hidden flex-col justify-center items-center gap-1 z-30'>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
          }`}></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}></span>
      </button>

      <div
        className={`absolute sm:hidden bg-black inset-0 z-10 transition-all ${
          isOpen ? 'opacity-30' : 'hidden'
        }`}
        onClick={handleClick}></div>
      <div
        className={`absolute sm:hidden top-0 bottom-0 right-0 w-full max-w-xs bg-white z-20 transition-all ${
          isOpen ? 'translate-x-0' : 'translate-x-80'
        }`}>
        <ul className='flex flex-col gap-6 uppercase p-8 pt-20'>
          {links.map((link) => (
            <li key={link.text} className='flex items-center'>
              <Link
                href={link.url}
                variant='black'
                className='uppercase text-xl'>
                {link.text}
              </Link>
            </li>
          ))}
          <li className='flex items-center'>
            <Link href={cta.url} variant='button-outlined' target='_blank' className='uppercase text-xl'>
              {cta.text}
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
