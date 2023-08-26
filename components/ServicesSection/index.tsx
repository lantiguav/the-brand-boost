import { Wrapper } from '../Wrapper'
import { ServiceCard } from '../ServiceCard'

import { ServiceType } from '@/types/common'

type ServicesSectionProps = {
  htmlId: string
  title: string
  services: ServiceType[]
}

const gridColumns: {
  three: string
  four: string
} = {
  three: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export const ServicesSection = ({
  htmlId,
  title,
  services,
}: ServicesSectionProps) => {
  const { length } = services
  const columns: 'three' | 'four' = length % 4 === 0 ? 'four' : 'three'

  return (
    <section id={htmlId}>
      <Wrapper className='py-20'>
        <h2 className='text-orange-dark text-5xl font-serif mb-7'>{title}</h2>
        <div className={`grid ${gridColumns[columns]} gap-6`}>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
