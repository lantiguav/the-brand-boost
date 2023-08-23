import React from 'react'
import { Wrapper } from '../Wrapper'

export const NavBar = () => {
  return (
    <header className='w-full'>
      <Wrapper className='flex justify-between py-8'>
        <div>The Brand Boost</div>
        <ul className='flex flex-row gap-6 uppercase'>
          <li>
            <a href='#'>Servicios</a>
          </li>
          <li>
            <a href='#'>Sobre mi</a>
          </li>
          <li>
            <a href='#'>Contacto</a>
          </li>
          <li>
            <a href='#'>Agendar cita</a>
          </li>
        </ul>
      </Wrapper>
    </header>
  )
}
