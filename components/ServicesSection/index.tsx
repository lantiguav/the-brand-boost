import { Wrapper } from '../Wrapper'
import { ServiceCard } from '../ServiceCard'

import { ServiceType } from '@/types/common'

type ServicesSectionProps = {
  htmlId: string
  title: string
  services: ServiceType[]
}

export const ServicesSection = ({
  htmlId,
  title,
  services,
}: ServicesSectionProps) => {
  return (
    <section id={htmlId}>
      <Wrapper className='py-20'>
        <h2 className='text-orange-dark text-5xl font-serif mb-7'>{title}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
