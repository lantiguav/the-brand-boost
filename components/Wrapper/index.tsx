import React from 'react'

type WrapperProps = {
  className?: string,
  children: React.ReactNode
}

export const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={`max-w-6xl my-0 mx-auto px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}
