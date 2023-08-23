import React from 'react'
import { Wrapper } from '../Wrapper'
import { Link } from '../Link'

export const NavBar = () => {
  return (
    <header className='w-full'>
      <Wrapper className='flex justify-between py-2'>
        <div className='flex items-center'>The Brand Boost</div>
        <ul className='flex-row gap-6 uppercase hidden sm:flex'>
          <li className='flex items-center'>
            <Link href='#' variant='black' className='uppercase'>
              Servicios
            </Link>
          </li >
          <li className='flex items-center'>
            <Link href='#' variant='black' className='uppercase'>
              Sobre mi
            </Link>
          </li>
          <li className='flex items-center'>
            <Link href='#' variant='black' className='uppercase'>
              Contacto
            </Link>
          </li>
          <li className='flex items-center'>
            <Link href='#' variant='button-outlined' className='uppercase'>
              Agendar cita
            </Link>
          </li>
        </ul>
      </Wrapper>
    </header>
  )
}
