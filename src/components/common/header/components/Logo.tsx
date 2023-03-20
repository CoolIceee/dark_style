import { useAppDispatch } from 'hooks/hooks'
import { useNavigate } from 'react-router-dom'
import { getProduct } from 'store/slice/productSlice'

import cap from '../../../../assets/cap.png'

export const Logo: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleClickRefreshDataAndNavigate = (): void => {
    navigate('/')
    dispatch(getProduct())
  }
  return (
    <>
      <button
        onClick={() => {
          handleClickRefreshDataAndNavigate()
        }}
        className='flex justify-center'
      >
        <img src={cap} alt='cap' className='max-w-full max-h-full' />
      </button>
    </>
  )
}
