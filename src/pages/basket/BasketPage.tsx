import { MainCart } from 'components/module/СartRelated'

import '../../index.css'
export const BasketPage: React.FC = () => {
  return (
    <div className='mx-full w-auto mt-7 font-[Montserrat]'>
      <div className='text-lg cursor-pointer text-blue-600'>Главная страница - Корзина</div>
      <div>
        <MainCart />
      </div>
    </div>
  )
}
