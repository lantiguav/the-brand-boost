import Image from 'next/image'

import { Wrapper } from '../Wrapper'
import { Link } from '../Link'
import { ImageType } from '@/types/common'

type HeroProps = {
  title: string
  subcopy: string
  cta: {
    text: string
    url: string
  }[]
  image: ImageType
}

const getFormattedTitle = (title: string) : string => {
  let formattedTitle = title
  let openingTag = true
  while (formattedTitle.includes('**')) {
    const replaceValue = openingTag
      ? `<span class='text-orange-dark'>`
      : '</span>'
    formattedTitle = formattedTitle.replace('**', replaceValue)
    openingTag = !openingTag
  }

  return formattedTitle
}

export const Hero = ({ title, subcopy, cta, image }: HeroProps) => {
  return (
    <div className='w-full py-12 sm:py-20 xl:py-40 bg-pink-light'>
      <Wrapper className='flex flex-col sm:flex-row gap-x-4 gap-y-8'>
        <div className='basis-1/2 flex flex-col justify-center'>
          <h1
            className='text-5xl leading-[0.8] font-serif sm:text-6xl sm:leading-[0.8] md:text-7xl md:leading-[0.8] lg:text-[7rem] lg:leading-[0.8] lg:tracking-[-0.3rem] xl:text-9xl xl:leading-[0.8]'
            dangerouslySetInnerHTML={{ __html: getFormattedTitle(title) }}></h1>
          <p className='mb-4 mt-4 sm:mt-8 lg:mt-14 opacity-80'>{subcopy}</p>
          <div>
            <Link
              href={cta[0].url}
              variant='button-solid'
              className='uppercase'
              target='_blank'>
              {cta[0].text}
            </Link>
          </div>
        </div>
        <div className='basis-1/2 flex justify-center'>
          <Image
            className='w-full max-w-sm sm:max-w-3xl'
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
