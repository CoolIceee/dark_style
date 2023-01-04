import { GoodsLoading } from 'components/app/GoodsLoading/GoodsLoading'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IToken } from 'types/model'

import addBasket from '../../../../assets/addBasket.png'
import basketAdd from '../../../../assets/basketAdd.png'
import like from '../../../../assets/like.png'
import redLike from '../../../../assets/redLike.png'
import { getOneCategoryProduct } from '../../../../store/features/productSlice'

interface productProps {
  id: string
}
export const Cards: React.FC<productProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getOneCategoryProduct(id))
  }, [dispatch, id])
  const product = useAppSelector((state) => state.product.product)
  const isLoading = useAppSelector((state) => state.product.isLoading)
  const [addLike, setAddLike] = useState(false)
  const handleClickAddLikeProduct = (): void => {
    setAddLike(!addLike)
  }
  const [addBasketProduct, setAddBasketProduct] = useState(false)
  const token = useAppSelector((state) => state.auth.token)

  const tokenDecode: IToken = jwtDecode(String(token))
  const handleClickAddBasketProduct = (): void => {
    setAddBasketProduct(!addBasketProduct)
  }
  return (
    <>
      <div className='w-full mt-7 font-[Montserrat]'>
        <NavLink className='text-lg ml-5 cursor-pointer text-blue-600' to='/'>
          Главная страница
        </NavLink>
        <div className=' mx-auto flex w-auto  flex-wrap  '>
          {isLoading ? (
            <GoodsLoading />
          ) : (
              product?.map((item) => {
              console.log(item.typeProduct.name)
              
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
                      <img
                        className='w-[25px] h-[25px]'
                        src={addLike ? redLike : like}
                        alt='like'
                      />
                    </div>
                    <img className='w-full h-full object-cover' src={item.photo[0]} />
                  </div>
                  <div className='pt-2 pl-[15px] bg-white'>
                    <div className='pb-1 text-sm'>{item.name}</div>
                    <div className='text-xs text-gray-500 pb-1'>{item.typeProduct.name}</div>
                    <div className='text-sm pr-5 pb-3 flex items-center'>
                      <span className='text-gray-500 pr-3'>Цена:</span>
                      {item.price}руб
                      {item.people.join('') === tokenDecode.id ? (
                        <div
                          onClick={() => handleClickAddBasketProduct()}
                          className={
                            'w-[30px] h-[30px] bg-blue-600 rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
                          }
                        >
                          <img className={'w-[20px] h-[20px]'} src={basketAdd} alt='like' />
                        </div>
                      ) : (
                        <div
                          onClick={() => handleClickAddBasketProduct()}
                          className={
                            'w-[30px] h-[30px] bg-white rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
                          }
                        >
                          <img className={'w-[15px] h-[15px]'} src={addBasket} alt='like' />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}
