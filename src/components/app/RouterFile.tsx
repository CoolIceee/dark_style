import { MainProducts } from 'components/common/mainProducts/MainProducts'
import { useAppSelector } from 'hooks/hooks'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home/Home'

import { Cards } from './goods/cards/CardsCategory'
import { Goods } from './goods/Goods'

export const RouterFile: React.FC = () => {
  const category = useAppSelector((state) => state.category.category)
  
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
            {/* {nameRouter?.map((nameRout) => {
              return (
                <Route key={nameRout._id} path={nameRout._id} element={<CardsSubcategories />} />
              )
            })} */}

            <Route index element={<Cards product={item._id} />} />
          </Route>
        )
      })}
    </Routes>
  )
}
