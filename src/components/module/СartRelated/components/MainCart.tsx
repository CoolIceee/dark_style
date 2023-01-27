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
    <div className='mt-5 w-full flex justify-between'>
      <div className='text-xl relative md:font-bold basket_counter font-[Unbounded] py-5 w-[70%]'>
        <span className='pl-5'>Корзина</span>
        <span className='text-xs absolute'>{basket.length}</span>
        <ItemFromCart />
      </div>
      <SummaryWindow />
      <div></div>
    </div>
  )
}
