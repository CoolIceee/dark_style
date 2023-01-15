import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { addShoppingCart } from 'store/features/productSlice'
import { dataUser } from 'store/features/userSlice'

import addBasket from '../../../assets/addBasket.png'
import basketAdd from '../../../assets/basketAdd.png'
import { IProduct } from '../../../types/model'

interface dataProps {
  itemProduct: IProduct
}

export const ShoppingCartButton: React.FC<dataProps> = ({ itemProduct }) => {
  const dispatch = useAppDispatch()

  const handleClickAddBasketProduct = (id: string): void => {
    dispatch(addShoppingCart(id))
    dispatch(dataUser())
  }
  const handleClickRemoveBasketProduct = (id: string): void => {}
  const user = useAppSelector((state) => state.user.userDate)
  const isAddBasLoading = useAppSelector((state) => state.product.isAddBasLoading)

  const userId = user.map((idItem) => {
    return idItem.basket.filter((peopleItem) => {
      return peopleItem === itemProduct._id
    })
  })
  useEffect(() => {
    dispatch(dataUser())
  }, [dispatch])
  return (
    <>
      {userId.map((itemProductId) => {
        console.log(itemProductId)
        return itemProductId.length !== 0 ? (
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
        ) : isAddBasLoading ? (
          <div>da</div>
        ) : (
          <div
            key={itemProduct._id}
            onClick={() => {
              handleClickAddBasketProduct(itemProduct._id)
            }}
            className={
              'w-[30px] h-[30px] bg-white rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
            }
          >
            <img className={'w-[15px] h-[15px]'} src={addBasket} alt='like' />
          </div>
        )
      })}
    </>
  )
}
