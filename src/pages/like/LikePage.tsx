import { Liked } from 'components/module/Liked'
import { FC } from 'react'

export const LikePage: FC = () => {
  return (
    <div className='mx-full h-full w-auto mt-7 font-[Montserrat] bg-red-600'>
      <Liked />
    </div>
  )
}
