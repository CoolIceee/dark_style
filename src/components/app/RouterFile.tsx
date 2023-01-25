import { MainProducts } from 'components/common/mainProducts/MainProducts'
import { BasketPage } from 'pages/basket/BasketPage'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getCategory } from 'store/slice/categorySlice'

import { Goods } from '../common/goods/Goods'
import { Cards } from '../common/goods/productСards/CardsCategory'
import { AuthPage } from '../../pages/auth/AuthPage'
import { HomePage } from '../../pages/home/HomePage'

export const RouterFile: React.FC = () => {
  const category = useAppSelector((state) => state.category.category)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route index element={<MainProducts />} />
        {category?.map((item) => {
          return (
            <Route
              path={item._id}
              element={<Goods categoryId={item._id} categoryName={item.name} />}
              key={item._id}
            >
              <Route index element={<Cards id={item._id} />} />
            </Route>
          )
        })}
        <Route path='basket' element={<BasketPage />} />
      </Route>
      <Route path='/sing/in' element={<AuthPage />} />
    </Routes>
  )
}
