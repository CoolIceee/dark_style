import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { getBasket } from 'store/slice/basketAndLikeSlice'

import { ItemFromCart } from './itemFromCart/ItemFromCart'
import { SummaryWindow } from './summaryWindow/SummaryWindow'

export const MainCart: React.FC = () => {
  const dispatch = useAppDispatch()

  const basket = useAppSelector((state) => state.basket.basket)
  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])
  return (
    <div className='mt-5 w-full flex justify-between h-full'>
      <div className='text-xl relative md:font-bold basket_counter font-[Unbounded] py-5 w-[70%]'>
        <div className='w-[90%] mx-auto'>
          Корзина<span className='text-xs absolute'>{basket.length}</span>
        </div>
        <ItemFromCart />
      </div>
      <SummaryWindow />
    </div>
  )
}
