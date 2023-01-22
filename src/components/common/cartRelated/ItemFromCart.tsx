import { useAppSelector } from 'hooks/hooks'
import { useState } from 'react'

export const ItemFromCart: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket)
  const [counterProduct, setCounterProduct] = useState(0)

  return (
    <>
      {basket?.map((item) => {
        return (
          <div key={item._id} className='mt-5 flex w-[95%] mx-auto font-[Montserrat]'>
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
                className='w-[40px] h-[40px] text-gray-400 rounded-full flex items-center justify-center border-2'
              >
                -
              </button>
              <div className='w-[40px] flex justify-center'>{counterProduct}</div>
              <button
                onClick={() => {
                  setCounterProduct(counterProduct + 1)
                }}
                className='w-[40px] h-[40px] text-gray-400 rounded-full flex items-center justify-center border-2'
              >
                +
              </button>
            </div>
            <div className='ml-auto'>{item.product.price} ₽</div>
          </div>
        )
      })}
    </>
  )
}
