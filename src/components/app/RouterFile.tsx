import { Route, Routes } from 'react-router-dom'

import { useSearchCategoryQuery } from '../../store/get.api/get.api'
import { Home } from '../pages/home/Home'

import { Goods } from './goods/Goods'

export const RouterFile: React.FC = () => {
  const { data } = useSearchCategoryQuery('')

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        {data?.map((item) => {
          return <Route path={item._id} element={<Goods categoryId={item._id} />} key={item._id} />
        })}
      </Route>
    </Routes>
  )
}
