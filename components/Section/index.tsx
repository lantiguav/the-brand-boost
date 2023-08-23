import Image from 'next/image'

import { Wrapper } from '../Wrapper'
import { SectionType } from '@/types/common'

interface SectionProps extends SectionType {
  reverseLayout: boolean,
}

export const Section = ({ htmlId, title, image, content, reverseLayout }: SectionProps) => {
  return (
    <section id={htmlId} className='pb-20'>
      <Wrapper className={`flex flex-col ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} md:justify-between gap-12`}>
        {image && (
          <div>
            <Image
              className='mx-auto'
              src={image.url}
              height={image?.height}
              width={image?.width}
              alt={image?.alt ?? ''}
              title={image.title}
            />
          </div>
        )}
        <div className='grow'>
          <h2 className='text-orange-dark text-5xl font-serif mb-7'>{title}</h2>
          <div
            className='prose prose-p:my-2 text-black opacity-80'
            dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </Wrapper>
    </section>
  )
}
