import React from 'react'

import { Wrapper } from '../Wrapper'
import { Link } from '../Link'

type HeroProps = {
  title: string,
  subcopy: string,
  ctaText: string,
  ctaLink: string,
}


export const Hero = ({ title, subcopy, ctaText, ctaLink } : HeroProps) => {
  return (
    <div className='w-full py-40 bg-pink-light'>
      <Wrapper>
        <h1 className='text-9xl text-orange-dark font-serif'>{title}</h1>
        <p className='mb-4'>{subcopy}</p>
        <Link href={ctaLink} text={ctaText} variant='button-solid' className='uppercase' />
      </Wrapper>
    </div>
  )
}
