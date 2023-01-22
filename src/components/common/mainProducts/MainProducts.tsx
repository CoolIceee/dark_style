import { GoodsLoading } from 'components/common/skeleton/GoodsLoading'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect, useState } from 'react'
import { getBasket } from 'store/slice/basketAndLikeSlice'
import { getProduct } from 'store/slice/productSlice'
import { dataUser } from 'store/slice/userSlice'

import like from '../../../assets/like.png'
import redLike from '../../../assets/redLike.png'
import { ShoppingCartButton } from '../userSaveButtons/ShoppingCartButton'

export const MainProducts: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleClickAddLikeProduct = (): void => {
    setAddLike(!addLike)
  }

  const product = useAppSelector((state) => state.product.product)
  const isLoading = useAppSelector((state) => state.product.isLoading)
  const [addLike, setAddLike] = useState(false)

  useEffect(() => {
    dispatch(getProduct())
    dispatch(dataUser())
    dispatch(getBasket())
  }, [dispatch])

  return (
    <div className='mx-full w-auto mt-7 font-[Montserrat] '>
      <div className='text-lg cursor-pointer text-blue-600'>Главная страница</div>
      <div className='mx-auto flex flex-wrap'>
        {isLoading ? (
          <GoodsLoading />
        ) : (
          product?.map((item) => {
            return (
              <div
                className='w-[240px] h-auto ml-5 mt-5 cursor-pointer overflow-hidden border-[1px] border-gray-200 rounded-[8px] hover:scale-[1.03] transition ease-in shadow-lg shadow-gray-200'
                key={item._id}
              >
                <div className='flex justify-center items-center w-full h-[310px] overflow-hidden ease-in relative'>
                  <div
                    onClick={() => {
                      handleClickAddLikeProduct()
                    }}
                    className='w-[40px] h-[40px] absolute bg-white top-5 left-5 flex justify-center items-center rounded-[5px]'
                  >
                    <img className='w-[25px] h-[25px]' src={addLike ? redLike : like} alt='like' />
                  </div>
                  <img className='w-full h-full object-cover' src={item.photo[0]} />
                </div>
                <div className='pt-2 pl-[15px] bg-white'>
                  <div className='pb-1 text-base'>{item.price} ₽</div>
                  <div className='text-sm pr-3 pb-3 flex items-center relative'>
                    <span className='text-gray-500 pr-3 text-base'>{item.name} </span>

                    <ShoppingCartButton itemProduct={item} />
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
