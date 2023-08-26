import { linkVariants } from '@/app/constants'

type DraftBannerProps = {
  isDraftModeEnabled?: boolean
}

export const DraftBanner = ({ isDraftModeEnabled }: DraftBannerProps) => {
  return (
    <>
      {isDraftModeEnabled && (
        <div className='border px-4 py-2 sticky z-10 top-0 left-0 right-0 bg-grey text-center'>
          You are in draft mode.{' '}
          <a
            className={linkVariants['orange-darkest']}
            href='/api/exit-draft'>
            Click here to exit
          </a>
        </div>
      )}
    </>
  )
}
