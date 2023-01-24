import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useState } from 'react'
import { getBasket } from 'store/slice/basketAndLikeSlice'
import { addShoppingCart } from 'store/slice/productSlice'

import { IProduct } from '../../../../types/model'

interface dataProps {
  itemProduct: IProduct
}

export const ShoppingCartButton: React.FC<dataProps> = ({ itemProduct }) => {
  const dispatch = useAppDispatch()
  const [inBasket, setInBasket] = useState(false)
  const user = useAppSelector((state) => state.user.userDate)
  const handleClickAddBasketProduct = async (id: string): Promise<void> => {
    setInBasket(!inBasket)
    await dispatch(addShoppingCart(id))
    dispatch(getBasket())
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
  const buttonAddCart = (
    <div
      className='w-[90px] h-[35px] bg-blue-600 rounded-[5px]  ml-auto flex justify-center items-center'
      onClick={() => {
        void handleClickAddBasketProduct(itemProduct._id)
      }}
    >
      <b className='py-2 text-white text-xs'> В корзину</b>
    </div>
  )
  return (
    <>
      {user.length !== 0 ? (
        <>
          {itemProduct.people.map((filterItem) => {
            return filterItem === user[0]._id && buttonAlreadyCart
          })}
          {itemProduct.people.length === 0 && (inBasket ? buttonAlreadyCart : buttonAddCart)}
        </>
      ) : (
        buttonAddCart
      )}
    </>
  )
}
