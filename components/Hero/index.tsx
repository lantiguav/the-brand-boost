import Image from 'next/image'

import { Wrapper } from '../Wrapper'
import { Link } from '../Link'
import { ImageType } from '@/types/common'

type HeroProps = {
  title: string
  subcopy: string
  cta: {
    text: string,
    url: string,
  }[],
  image: ImageType
}

export const Hero = ({
  title,
  subcopy,
  cta,
  image,
}: HeroProps) => {
  return (
    <div className='w-full py-12 sm:py-40 bg-pink-light'>
      <Wrapper className='flex flex-col sm:flex-row gap-4'>
        <div className='basis-1/2'>
          <h1 className='text-5xl leading-[0.8] sm:text-9xl text-orange-dark font-serif sm:leading-[6.875rem] sm:tracking-[-0.5rem]'>
            {title}
          </h1>
          <p className='mb-4 mt-4 sm:mt-14 opacity-80'>{subcopy}</p>
          <Link href={cta[0].url} variant='button-solid' className='uppercase' target='_blank'>
            {cta[0].text}
          </Link>
        </div>
        <div className='basis-1/2'>
          <Image
            className='w-full'
            src={image.url}
            title={image.title}
            alt={image.alt ?? ''}
            width={image.width}
            height={image.height}
          />
        </div>
      </Wrapper>
    </div>
  )
}
