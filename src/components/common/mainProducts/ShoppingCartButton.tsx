import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { addShoppingCart, getBasket } from 'store/features/basketAndLikeSlice'

import addBasket from '../../../assets/addBasket.png'
import basketAdd from '../../../assets/basketAdd.png'
import { IProduct } from '../../../types/model'
import { useState } from 'react'

interface dataProps {
  itemProduct: IProduct
}

export const ShoppingCartButton: React.FC<dataProps> = ({ itemProduct }) => {
  const dispatch = useAppDispatch()
  const [miniWindow, setMiniWindow] = useState(false)
  
  const handleClickAddBasketProduct = (id: string): void => {
    dispatch(addShoppingCart(id))
  }
  const handleClickRemoveBasketProduct = (id: string): void => {}

  const basket = useAppSelector((state) => state.basket.basket)
  const isLoading = useAppSelector((state) => state.basket.isLoading)

  const userId = basket.filter((idItem) => {
    return idItem.product === itemProduct._id
  })

  return (
    <>
      {userId.length !== 0 ? (
        <div
          key={itemProduct._id}
          onClick={() => {
            handleClickRemoveBasketProduct(itemProduct._id)
          }}
          className={
            'w-[30px] h-[30px] bg-blue-600 rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
          }
        >
          <img className={'w-[20px] h-[20px]'} src={basketAdd} alt='like' />
        </div>
      ) : 
        <div
          key={itemProduct._id}
          onClick={() => {
            setMiniWindow(true)
          }}
          className={
            'w-[30px] h-[30px] bg-white rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
          }
        >
          {miniWindow ? (
            <div className='absolute  rounded-t-xl rounded-bl-xl text-[12px] z-10 w-[190px] h-[80px] bg-white border-solid border-[1px] bottom-[27px] right-[35px]'>
              <div className='py-2 w-full flex justify-center'>
                <b>Добавить в корзину ?</b>
              </div>
              <div className='w-full flex justify-end pr-2 text-[10px]'>
                <button
                  onClick={() => {
                    setMiniWindow(false)
                  }}
                  className='w-auto rounded-md h-[30px] border-solid border-[1px] mr-1 px-2'
                >
                  Закрыть
                </button>
                <button
                  onClick={() => {
                    handleClickAddBasketProduct(itemProduct._id)
                  }}
                  className='w-auto rounded-md h-[30px] text-white bg-blue-600 px-2'
                >
                  Добавить
                </button>
              </div>
            </div>
          ): 1}
          <img className={'w-[15px] h-[15px]'} src={addBasket} alt='like' />
        </div>
      }
    </>
  )
}
