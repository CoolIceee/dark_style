import { useAppSelector } from 'hooks/hooks'

import agree from '../../../assets/agree.png'
export const SummaryWindow: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket)
  let sum = 0
  basket.map((item) => {
    return (sum += item.product.price)
  })
  return (
    <div className='basket_counter w-[25%] h-[50%] sticky top-0'>
      <div className='w-[85%] mx-auto'>
        <div className='flex w-full justify-between font-[Unbounded] text-xl pt-5'>
          Итого
          <div className='font-[Montserrat]'>
            <b>{sum} ₽</b>
          </div>
        </div>
        <div className='pt-2'>
          <div className='flex justify-between text-gray-400'>
            Товары, {basket.length}шт. <span>{sum} ₽</span>
          </div>
          <div className='flex justify-between text-gray-400 pt-1'>
            Скидка <span>{sum} ₽</span>
          </div>
        </div>
        <div className='py-4 text-lg'>
          <b>Доставка: &ensp;</b>
          <span className='text-blue-600 border-b-2 border-dashed border-blue-600 cursor-pointer text-base'>
            Выбрать адрес доставки
          </span>
        </div>
        <button className='my-3 w-full h-[50px] bg-blue-600 text-white rounded-md'>Заказать</button>
        <div className='py-5 text-lg flex'>
          <img src={agree} className='w-[15px] h-[15px]' />
          <span className='text-xs ml-2'>
            <span className='text-gray-500'>Согласен с условиями</span> Правил пользования торговой
            площадкой <span className='text-gray-500'>и</span> правилами возврата
          </span>
        </div>
      </div>
    </div>
  )
}
