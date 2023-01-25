import { useAppSelector } from 'hooks/hooks'
import { useState } from 'react'

import basketDelete from '../../../assets/basketDelete.png'
import like from '../../../assets/like.png'
import redLike from '../../../assets/redLike.png'
import { Modal } from '../../../ui/modal/Modal'

import { ModalDeleteProduct } from './modal/ModalDeleteProduct'
import { EmptyBasket } from './EmptyBasket'

export const ItemFromCart: React.FC = () => {
  const [addLike, setAddLike] = useState(false)
  const [modalActive, setModalActive] = useState(false)

  const handleClickAddLikeProduct = (): void => {
    setAddLike(!addLike)
  }
  const basket = useAppSelector((state) => state.basket.basket)
  const [counterProduct, setCounterProduct] = useState(0)
  const handleClickOpenModal = (): void => {
    setModalActive(true)
  }
  return (
    <>
      {basket.length !== 0 ? (
        basket?.map((item) => {
          return (
            <div key={item._id} className='mt-5 flex mx-auto font-[Montserrat] w-[95%]'>
              <Modal active={modalActive} setActive={setModalActive}>
                <ModalDeleteProduct setActive={setModalActive} id={item.product._id} />
              </Modal>
              <img
                src={item.product.photo[0]}
                alt='product photo'
                className='w-[120px] object-cover rounded-md'
              />
              <div className='px-5 text-base'>{item.product.name}</div>
              <div className='flex h-7 ml-[200px] items-center justify-center mt-2 font-[Rubik]'>
                <button
                  onClick={() => {
                    counterProduct > 0 && setCounterProduct(counterProduct - 1)
                  }}
                  className='w-[40px] h-[40px] text-gray-400 rounded-full flex items-center justify-center border-2 hover:border-blue-500 hover:text-blue-500'
                >
                  -
                </button>
                <div className='w-[40px] flex justify-center'>{counterProduct}</div>
                <button
                  onClick={() => {
                    setCounterProduct(counterProduct + 1)
                  }}
                  className='w-[40px] h-[40px] text-gray-400 rounded-full flex items-center justify-center border-2 hover:border-blue-500 hover:text-blue-500'
                >
                  +
                </button>
              </div>
              <div className='ml-auto text-base flex flex-col items-end'>
                {item.product.price} ₽
                <div className='w-full h-[135px] flex items-end'>
                  <button
                    onClick={() => {
                      handleClickAddLikeProduct()
                    }}
                    className='w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center hover:border-red-500'
                  >
                    <img className='w-[20px] h-[20px] mt-[2px]' src={addLike ? redLike : like} />
                  </button>
                  <button
                    onClick={() => {
                      handleClickOpenModal()
                    }}
                    className='w-[40px] ml-2 h-[40px] border-2 rounded-full flex justify-center items-center hover:border-red-500'
                  >
                    <img className='w-[20px] h-[20px]' src={basketDelete} />
                  </button>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <EmptyBasket />
      )}
    </>
  )
}
