import { MainProducts } from 'components/common/mainProducts/MainProducts'
import { BasketPage } from 'components/pages/home/basket/BasketPage'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getCategory } from 'store/features/categorySlice'
import { dataUser } from 'store/features/userSlice'

import { Goods } from '../common/goods/Goods'
import { Cards } from '../common/goods/productСards/CardsCategory'
import { CardsSubcategories } from '../common/goods/productСards/CardsSubcategories'
import { AuthPage } from '../pages/home/auth/AuthPage'
import { HomePage } from '../pages/home/HomePage'

export const RouterFile: React.FC = () => {
  // const token = useAppSelector((state) => state.auth.token)
  const category = useAppSelector((state) => state.category.category)
  // const error = useAppSelector((state) => state.user.error)
  const subcategories = useAppSelector((state) => state.subcategory.subcategories)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    // if (error != null) {
    //   localStorage.removeItem('token')
    // }
    // if (token != null) {
    //   dispatch(dataUser())
    // }
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
              {subcategories?.map((nameRout) => {
                return (
                  <Route
                    key={nameRout._id}
                    path={nameRout.name}
                    element={<CardsSubcategories id={nameRout._id} />}
                  />
                )
              })}
              <Route index element={<Cards id={item._id} />} />
            </Route>
          )
        })}
      </Route>
      <Route path='/sing/in' element={<AuthPage />} />
      <Route path='/basket' element={<BasketPage />} />
    </Routes>
  )
}
