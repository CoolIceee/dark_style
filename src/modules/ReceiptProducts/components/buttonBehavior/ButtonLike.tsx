import { Button } from 'ui/button/Button'

import like from '../../../../assets/like.png'

export const ButtonLike: React.FC = () => {
  return (
    <Button styleButtonContainer={'w-[40px] h-[40px] absolute bg-white top-5 left-5 flex justify-center items-center rounded-[5px]'}>
      <img src={like} className='w-[25px] h-[25px]' />
    </Button>
  )
}
