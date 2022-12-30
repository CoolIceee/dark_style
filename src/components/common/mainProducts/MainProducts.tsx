import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { getProduct } from 'store/features/productSlice'
export const MainProducts: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  const product = useAppSelector((state) => state.product.product)
  return (
    <div className='mx-full w-auto mt-7 font-[Montserrat]'>
      <div className='text-lg cursor-pointer text-blue-600'>Главная страница</div>
      <div className=' mx-auto flex w-auto  flex-wrap  '>
        {product?.map((item) => {
          return (
            <div
              className='w-[300px] h-auto ml-5 mt-5 border-[1px] cursor-pointer border-solid rounded-[5px]  ease-in '
              key={item._id}
            >
              <div className='flex justify-center items-center w-full h-[380px] overflow-hidden ease-in '>
                <img
                  className='w-[270px] h-[350px] object-cover rounded-[5px] hover:scale-[1.2] transition ease-in '
                  src={item.photo[0]}
                />
              </div>
              <div className='border-solid border-[2px]'></div>
              <div className='pt-2 pl-[15px]'>
                <div className='pb-1 text-sm'>{item.name}</div>
                <div className='text-xs text-gray-500 pb-1'>{item.typeProduct.name}</div>
                <div className='flex justify-end pr-5 pb-3'>{item.price}р</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
