import React from 'react'
import NextLink from 'next/link'
import { linkVariants } from '@/app/constants'

type LinkProps = {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  variant?: 'orange' | 'orange-darkest' | 'button-solid' | 'button-outlined' | 'black',
  className?: string,
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}


export const Link = ({ href, children, onClick, target = '_self', variant = 'black', className = '' }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className={`${linkVariants[variant]} inline-block transition-all ${className}`}
      target={target}
      onClick={onClick}
    >
      {children}
    </NextLink>
  )
}
