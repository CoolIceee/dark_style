import { Button } from 'components/ui/button/Button'
import { useNavigate } from 'react-router-dom'

import arrowLeft from '../../../../assets/arrowLeft.png'

import { Authorization } from './authorization/Authorization'
export const AuthorizationAnd: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button
        onClick={() => {
          navigate(-1)
        }}
        styleButtonContainer='xl:w-40 xl:h-screen absolute font-[Montserrat] xl:flex xl:hover:bg-gray-200 xl:ease-in xl:duration-200'
      >
        <div className='text-blue-600 text-base xl:text-xl py-10 text-center flex items-center px-5 '>
          <img className='w-auto h-4 xl:h-5 px-2' src={arrowLeft} />
          назад
        </div>
      </Button>
      <div className='h-screen flex items-center justify-center'>
        <div>
          <Authorization />
        </div>
      </div>
    </>
  )
}
