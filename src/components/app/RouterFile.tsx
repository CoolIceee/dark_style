import { MainProducts } from 'components/common/mainProducts/MainProducts'
import { Route, Routes } from 'react-router-dom'

import { useGetProductQuery, useSearchCategoryQuery } from '../../store/get.api/get.api'
import { Home } from '../pages/home/Home'

import { Cards } from './cards/Cards'
import { Goods } from './goods/Goods'

export const RouterFile: React.FC = () => {
  const { data } = useSearchCategoryQuery('')
  const { data: productQuery } = useGetProductQuery('')
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainProducts />} />
      </Route>
      {data?.map((item) => {
        return (
          <Route
            path={item._id}
            element={<Goods categoryId={item._id} categoryName={item.name} />}
            key={item._id}
          >
            <Route index element={<Cards product={item._id} />} />
          </Route>
        )
      })}
    </Routes>
  )
}
