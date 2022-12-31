import { MainProducts } from 'components/common/mainProducts/MainProducts'
import { useAppSelector } from 'hooks/hooks'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home/Home'

import { Goods } from './goods/Goods'
import { Cards } from './goods/productСards/CardsCategory'
import { CardsSubcategories } from './goods/productСards/CardsSubcategories'

export const RouterFile: React.FC = () => {
  const category = useAppSelector((state) => state.category.category)
  const subcategories = useAppSelector((state) => state.subcategory.subcategories)
  
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainProducts />} />
      </Route>
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
                  path={nameRout._id}
                  element={<CardsSubcategories id={nameRout._id} />}
                />
              )
            })}

            <Route index element={<Cards id={item._id} />} />
          </Route>
        )
      })}
    </Routes>
  )
}
