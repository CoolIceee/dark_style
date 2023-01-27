import { useAppSelector } from 'hooks/hooks'
import { useState } from 'react'

import { Modal } from '../../../../ui/modal/Modal'
import { QuantityProduct } from '../buttons/QuantityProduct'
import { SaveAndDelete } from '../buttons/SaveAndDelete'
import { EmptyBasket } from '../emptyBasket/EmptyBasket'
import { ModalDeleteProduct } from '../modal/ModalDeleteProduct'

export const ItemFromCart: React.FC = () => {
  const [modalActive, setModalActive] = useState(false)

  const basket = useAppSelector((state) => state.basket.basket)

  return (
    <>
      {basket.length !== 0 ? (
        basket?.map((item) => {
          return (
            <div key={item._id} className='mt-5 flex mx-auto font-[Montserrat] w-[95%]'>
              <Modal active={modalActive} setActive={setModalActive}>
                <ModalDeleteProduct setActive={setModalActive} id={item.product._id} />
              </Modal>
              <img src={item.product.photo[0]} alt='product photo' className='w-[120px] object-cover rounded-md' />
              <div className='px-5 text-base'>{item.product.name}</div>
              <QuantityProduct />
              <div className='ml-auto text-base flex flex-col items-end'>
                {item.product.price} ₽
                <SaveAndDelete setModalActive={setModalActive} />
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
