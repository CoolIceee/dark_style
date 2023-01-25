import { useAppSelector } from 'hooks/hooks'
import { ReceiptProducts } from 'modules/ReceiptProducts'
import { BasketPage } from 'pages/basket/BasketPage'
import { Route, Routes } from 'react-router-dom'

import { AuthPage } from '../../pages/auth/AuthPage'
import { HomePage } from '../../pages/home/HomePage'
import { Goods } from '../common/goods/Goods'

export const RouterFile: React.FC = () => {
  const category = useAppSelector((state) => state.category.category)

  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<ReceiptProducts styleContainer={'flex flex-wrap'} />} />
        {category?.map((item) => {
          return (
            <Route path={item._id} element={<Goods categoryId={item._id} categoryName={item.name} />} key={item._id}>
              <Route index element={<ReceiptProducts styleContainer={'flex flex-wrap w-4/5'} id={item._id} />} />
            </Route>
          )
        })}
        <Route path='basket' element={<BasketPage />} />
      </Route>
      <Route path='/sing/in' element={<AuthPage />} />
    </Routes>
  )
}
