import Image from 'next/image'
import { ServiceType } from '@/types/common'

export const ServiceCard = ({ id, name, description, icon }: ServiceType) => {
  return (
    <article className='flex flex-col gap-4 justify-between items-center p-4 rounded shadow-regular'>
      <div className='flex flex-col items-center justify-start gap-4'>
        <Image
          className='w-16 h-16'
          src={icon.url}
          width={icon.width}
          height={icon.height}
          alt={icon.alt ?? ''}
          title={icon.title}
        />
        <h3 className='font-bold text-lg text-center leading-5'>{name}</h3>
      </div>
      <div className='flex items-center grow'>
        <p className='opacity-80 text-sm '>{description}</p>
      </div>
    </article>
  )
}
