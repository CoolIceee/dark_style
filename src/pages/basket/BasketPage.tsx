import { MainCart } from 'components/module/СartRelated'
import { useAppDispatch } from 'hooks/hooks'
import { NavLink } from 'react-router-dom'
import { getProduct } from 'store/slice/productSlice'

import '../../index.css'
export const BasketPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleClickItemDataUpdate = (): void => {
    dispatch(getProduct())
  }
  return (
    <div className='mx-full h-full w-auto mt-7 font-[Montserrat]'>
      <div className='text-lg cursor-pointer text-blue-600'>
        <NavLink
          onClick={() => {
            handleClickItemDataUpdate()
          }}
          to={'/'}
        >
          Главная страница
        </NavLink>
        - Корзина
      </div>
      <div className='h-full'>
        <MainCart />
      </div>
    </div>
  )
}
