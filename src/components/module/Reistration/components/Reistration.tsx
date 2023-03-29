import { Button } from 'components/ui/button/Button'
import { useNavigate } from 'react-router-dom'

import arrowLeft from '../../../../assets/arrowLeft.png'

export const Reistration: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        onClick={() => {
          navigate(-1)
        }}
        styleButtonContainer='w-40 h-screen absolute font-[Montserrat] flex hover:bg-gray-200 ease-in duration-200'
      >
        <div className='text-blue-600 text-xl py-10 text-center flex items-center px-5 '>
          <img className='w-auto h-5 px-2' src={arrowLeft} />
          назад
        </div>
      </Button>
      <div className='h-screen flex items-center justify-center'>
        <div>
          {/* <Authorization /> */}
        </div>
      </div>
    </>
  )
}
