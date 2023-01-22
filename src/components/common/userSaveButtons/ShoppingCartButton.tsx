import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useState } from 'react'
import { addShoppingCart } from 'store/slice/productSlice'

import { IProduct } from '../../../types/model'

interface dataProps {
  itemProduct: IProduct
}

export const ShoppingCartButton: React.FC<dataProps> = ({ itemProduct }) => {
  const dispatch = useAppDispatch()
  const [miniWindow, setMiniWindow] = useState(false)
  const user = useAppSelector((state) => state.user.userDate)
  const handleClickAddBasketProduct = (id: string): void => {
    setMiniWindow(!miniWindow)
    dispatch(addShoppingCart(id))
  }
  const handleClickRemoveBasketProduct = (id: string): void => {}
  const buttonAlreadyCart = (
    <div
      key={itemProduct._id}
      onClick={() => {
        handleClickRemoveBasketProduct(itemProduct._id)
      }}
      className={
        'w-[90px] h-[35px] border-2 border-blue-600 rounded-[5px] ml-auto flex justify-center'
      }
    >
      <b className='py-2 text-blue-600 text-xs'> В корзине</b>
    </div>
  )
  return (
    <>
      {itemProduct.people.map((filterItem) => {
        return filterItem === user[0]._id && buttonAlreadyCart
      })}
      {itemProduct.people.length === 0 &&
        (miniWindow ? (
          buttonAlreadyCart
        ) : (
          <div
            className='w-[90px] h-[35px] bg-blue-600 rounded-[5px]  ml-auto flex justify-center items-center'
            onClick={() => {
              handleClickAddBasketProduct(itemProduct._id)
            }}
          >
            <b className='py-2 text-white text-xs'> В корзину</b>
          </div>
        ))}
    </>
  )
}
