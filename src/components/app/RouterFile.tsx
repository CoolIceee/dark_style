import { AuthorizationAnd } from 'components/module/Authorization'
import { ReceiptProducts } from 'components/module/ReceiptProducts'
import { useAppSelector } from 'hooks/hooks'
import { BasketPage } from 'pages/basket/BasketPage'
import { Route, Routes } from 'react-router-dom'

import { HomePage } from '../../pages/home/HomePage'
import { CategoryMenu } from '../module/CategoryMenu'

export const RouterFile: React.FC = () => {
  const category = useAppSelector((state) => state.category.category)
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<ReceiptProducts styleContainer={'flex flex-wrap'} />} />
        {category?.map((item) => {
          return (
            <Route path={item._id} element={<CategoryMenu categoryId={item._id} categoryName={item.name} />} key={item._id}>
              <Route index element={<ReceiptProducts styleContainer={'flex flex-wrap w-4/5'} id={item._id} />} />
            </Route>
          )
        })}
        <Route path='basket' element={<BasketPage />} />
      </Route>
      <Route path='/sing/in' element={<AuthorizationAnd />}></Route>
    </Routes>
  )
}
