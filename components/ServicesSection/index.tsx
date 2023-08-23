import { Wrapper } from '../Wrapper'
import { ServiceCard } from '../ServiceCard'

import { ServiceType } from '@/types/common'

type ServicesSectionProps = {
  id: string
  title: string
  services: ServiceType[]
}

export const ServicesSection = ({
  id,
  title,
  services,
}: ServicesSectionProps) => {
  return (
    <section id={id}>
      <Wrapper className='py-28'>
        <h2 className='text-orange-dark text-5xl font-serif'>{title}</h2>
        <div className='grid grid-cols-4 gap-10'>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
