import { GoodsLoading } from 'components/app/GoodsLoading/GoodsLoading'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProduct } from 'store/features/productSlice'

import addBasket from '../../../assets/addBasket.png'
import basketAdd from '../../../assets/basketAdd.png'
import like from '../../../assets/like.png'
import redLike from '../../../assets/redLike.png'
import { IToken } from '../../../types/model'

export const MainProducts: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  const user = useAppSelector((state) => state.user.userDate)
  const product = useAppSelector((state) => state.product.product)
  console.log()

  const isLoading = useAppSelector((state) => state.product.isLoading)
  const [addLike, setAddLike] = useState(false)
  const handleClickAddLikeProduct = (): void => {
    setAddLike(!addLike)
  }

  const [addBasketProduct, setAddBasketProduct] = useState(false)

  const handleClickAddBasketProduct = (): void => {
    // if (token == null) {
    //   return navigate('/sing/in')
    // }
    setAddBasketProduct(!addBasketProduct)
  }
  return (
    <div className='mx-full w-auto mt-7 font-[Montserrat] '>
      <div className='text-lg cursor-pointer text-blue-600'>Главная страница</div>
      <div className='mx-auto flex w-auto flex-wrap pl-1'>
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
                    onClick={() => handleClickAddLikeProduct()}
                    className='w-[40px] h-[40px] absolute bg-white top-5 left-5 flex justify-center items-center rounded-[5px]'
                  >
                    <img className='w-[25px] h-[25px]' src={addLike ? redLike : like} alt='like' />
                  </div>
                  <img className='w-full h-full object-cover' src={item.photo[0]} />
                </div>
                <div className='pt-2 pl-[15px] bg-white'>
                  <div className='pb-1 text-sm'>{item.name}</div>
                  <div className='text-xs text-gray-500 pb-1'>{item.typeProduct.name}</div>
                  <div className='text-sm pr-5 pb-3 flex items-center'>
                    <span className='text-gray-500 pr-3'>Цена:</span>
                    {item.price} руб
                    {user.map((idUser) => {
                      return item.people.join('') === idUser._id ? (
                        <div
                          key={item._id}
                          onClick={() => handleClickAddBasketProduct()}
                          className={
                            'w-[30px] h-[30px] bg-blue-600 rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
                          }
                        >
                          <img className={'w-[20px] h-[20px]'} src={basketAdd} alt='like' />
                        </div>
                      ) : (
                        <div
                          key={item._id}
                          onClick={() => handleClickAddBasketProduct()}
                          className={
                            'w-[30px] h-[30px] bg-white rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
                          }
                        >
                          <img className={'w-[15px] h-[15px]'} src={addBasket} alt='like' />
                        </div>
                      )
                    })}
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
//
