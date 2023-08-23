import Image from 'next/image'
import { ServiceType } from '@/types/common'

export const ServiceCard = ({ id, name, description, icon }: ServiceType) => {
  return (
    <article className='flex flex-col justify-center items-center'>
      <Image
        className='w-16 h-16'
        src={icon.url}
        width={icon.width}
        height={icon.height}
        alt={icon.alt ?? ''}
        title={icon.title}
      />
      <h3 className='font-bold text-lg text-center'>{name}</h3>
      <p className='opacity-80 text-sm'>{description}</p>
    </article>
  )
}
