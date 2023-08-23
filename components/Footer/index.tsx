import { Wrapper } from '../Wrapper'
import { Link } from '../Link'

export const Footer = () => {
  return (
    <footer className='w-full bg-pink-light py-8'>
      <Wrapper className='flex justify-center gap-y-2 flex-wrap text-center'>
        <span className='pr-3'>
          © 2023 - The Brand Boost by Lina Rodriguez
        </span>
        <span className='px-3 lg:border-l'>
          Designed and developed by{' '}
          <Link href='https://victorlantigua.com' variant='orange' target='_blank'>
            Victor Lantigua
          </Link>{' '}
        </span>
        <span className='pl-3 lg:border-l'>
          Online illustrations by{' '}
          <Link href='https://storyset.com/online' variant='orange' target='_blank'>
            Storyset
          </Link>{' '}
        </span>
      </Wrapper>
    </footer>
  )
}
