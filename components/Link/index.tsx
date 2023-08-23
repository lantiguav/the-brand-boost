import React from 'react'
import NextLink from 'next/link'

type LinkProps = {
  href: string
  text: string
  target?: string
  variant?: 'orange' | 'button-solid' | 'button-outlined' | 'black',
  className?: string,
}

const CLASSES = {
  'orange' : 'text-orange-dark underline decoration-transparent underline-offset-4 hover:decoration-orange-dark active:decoration-orange-darkest active:text-orange-darkest',
  'black' : 'text-black hover:text-orange-dark underline decoration-transparent underline-offset-4 hover:decoration-orange-dark active:decoration-orange-darkest active:text-orange-darkest',
  'button-solid' : 'px-4 py-2 rounded bg-orange-dark text-white hover:bg-orange-darkest active:bg-orange-darkest',
  'button-outlined' : 'px-4 py-2 rounded bg-white border border-orange-dark text-orange-dark hover:text-orange-darkest hover:border-orange-darkest hover:bg-pink-light active:text-orange-darkest active:border-orange-darkest active:bg-pink-light' 
}

export const Link = ({ href, text, target = '_self', variant = 'black', className = '' }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`${CLASSES[variant]} inline-block transition-all ${className}`}
      target={target}
    >
      {text}
    </NextLink>
  )
}
